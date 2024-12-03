import { useModal } from 'app/providers/modal';
import { useToast } from 'app/providers/toast';
import { selectCategoryDescriptionError } from 'entities/category/categoryDescripton';
import { fetchDeleteCategory } from 'entities/category/categoryDescripton/model/thunk';
import { useNavigate } from 'react-router-dom';
import { path } from 'shared/lib/router';
import { useAppDispatch, useAppSelector } from 'shared/lib/store';
import { Icons, ID } from 'shared/types';
import { Confirm } from 'shared/ui/confirm';
import { Icon } from 'shared/ui/icon';
import classes from './styles.module.scss';

interface CategoryDeleteProps { categoryId: ID; }

export const CategoryDelete = ({ categoryId }: CategoryDeleteProps) => {
	const navigate = useNavigate();
	const { showToast } = useToast();
	const { openModal, closeModal } = useModal();
	const dispatch = useAppDispatch();
	const error = useAppSelector(selectCategoryDescriptionError);

	const deleteCategory = async () => {
		await dispatch(fetchDeleteCategory(categoryId)).unwrap();

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
				title="Хотите удалить категорию?"
				text="Все операции категории так же будут удалены!"
				onConfirm={deleteCategory}
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
