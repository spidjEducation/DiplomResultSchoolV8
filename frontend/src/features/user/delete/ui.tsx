import { useAuth } from 'app/providers/auth';
import { useModal } from 'app/providers/modal';
import { useToast } from 'app/providers/toast';
import { useNavigate } from 'react-router-dom';
import { request } from 'shared/api';
import { path } from 'shared/lib/router';
import { ID } from 'shared/types';
import { Button } from 'shared/ui/button';
import { Confirm } from 'shared/ui/confirm';
import classes from './styles.module.scss';

interface UserDeleteProps {
	userId: ID | null;
}

export const UserDelete = ({ userId }: UserDeleteProps) => {
	const navigate = useNavigate();
	const { showToast } = useToast();
	const { logout } = useAuth();
	const { openModal, closeModal } = useModal();

	const deleteUser = async () => {
		await request({ url: `/users/${userId}`, method: 'DELETE' });

		logout();

		navigate(path.home(), { replace: true });

		closeModal();

		showToast({ message: 'Вы удалены из системы', type: 'success' });
	};

	const deleteHandler = () => {
		openModal(
			<Confirm
				title="Хотите удалить свой аккаунт?"
				text="Все данные будут безвозвратно удалены!"
				onConfirm={deleteUser}
				onReject={closeModal}
			/>,
		);
	};

	return (
		<Button className={classes.button} type="button" onClick={deleteHandler}>
			Удалить пользователя
		</Button>
	);
};
