import { useNavigate } from 'react-router-dom';
import { path } from 'shared/lib/router';
import classes from './styles.module.scss';
//import { Icon } from 'shared/ui/icons';
import { useModal } from 'app/providers/modal';
//import { Confirm } from 'shared/ui/components';
import { useToast } from 'app/providers/toast';
import { selectOperationDescriptionError } from 'entities/operation/operationDescripton';
import { fetchDeleteOperation } from 'entities/operation/operationDescripton/model/thunk';
import { fetchOperationList } from 'entities/operation/operationList';
import { LIMIT_FETCH } from 'shared/constant';
import { useAppDispatch, useAppSelector } from 'shared/lib/store';
import { Icons, ID } from 'shared/types';
import { Confirm } from 'shared/ui/confirm';
import { Icon } from 'shared/ui/icon';

interface OperationDeleteProps {
	operationId: ID;
}

export const OperationDelete = ({ operationId }: OperationDeleteProps) => {
	const navigate = useNavigate();
	const { showToast } = useToast();
	const { openModal, closeModal } = useModal();
	const dispatch = useAppDispatch();
	const error = useAppSelector(selectOperationDescriptionError);

	const deleteOperation = async () => {
		await dispatch(fetchDeleteOperation(operationId)).unwrap();
		await dispatch(fetchOperationList({ limit: LIMIT_FETCH }));

		showToast({ message: 'Операция удалена', type: 'success' });

		navigate(path.home(), { replace: true });

		closeModal();
	};

	if (error) {
		showToast({ message: error, type: 'error' });
	}

	const deleteHandler = () => {
		openModal(<Confirm title="Хотите удалить операцию?" onConfirm={deleteOperation} onReject={closeModal} />);
	};

	return (
		<button className={classes.button} type="button" onClick={deleteHandler}>
			<Icon className={classes.icon} name={Icons.cart}></Icon>
		</button>
	);
};
