import { useModal } from 'app/providers/modal';
import { useToast } from 'app/providers/toast';
import { selectAccountDescriptionError } from 'entities/account/accountDescripton';
import { fetchDeleteAccount } from 'entities/account/accountDescripton/model/thunk';
import { useNavigate } from 'react-router-dom';
import { path } from 'shared/lib/router';
import { useAppDispatch, useAppSelector } from 'shared/lib/store';
import { Icons, ID } from 'shared/types';
import { Confirm } from 'shared/ui/confirm';
import { Icon } from 'shared/ui/icon';
import classes from './styles.module.scss';

interface AccountDeleteProps {
	accountId: ID;
}

export const AccountDelete = ({ accountId }: AccountDeleteProps) => {
	const navigate = useNavigate();
	const { showToast } = useToast();
	const { openModal, closeModal } = useModal();
	const dispatch = useAppDispatch();
	const error = useAppSelector(selectAccountDescriptionError);

	const deleteAccount = async () => {
		await dispatch(fetchDeleteAccount(accountId)).unwrap();

		showToast({ message: 'Счет удален', type: 'success' });

		navigate(path.home(), { replace: true });

		closeModal();
	};

	if (error) {
		showToast({ message: error, type: 'error' });
	}

	const deleteHandler = () => {
		openModal(
			<Confirm
				title="Хотите удалить счет?"
				text="Все операции счета так же будут удалены!"
				onConfirm={deleteAccount}
				onReject={closeModal}
			/>,
		);
	};

	return (
		<button className={classes.button} type="button" onClick={deleteHandler}>
			<Icon className={classes.icon} name={Icons.cart}></Icon>
		</button>
	);
};
