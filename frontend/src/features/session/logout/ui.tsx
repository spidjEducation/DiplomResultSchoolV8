import { useAuth } from 'app/providers/auth';
import { useModal } from 'app/providers/modal';
import { Icons } from 'shared/types';
import { Confirm } from 'shared/ui/confirm';
import { Icon } from 'shared/ui/icon';
import classes from './styles.module.scss';

export const LogoutButton = () => {
	const { logout } = useAuth();
	const { openModal, closeModal } = useModal();

	const logoutHandler = () => {
		openModal(
			<Confirm
				title="Хотите выйти?"
				onConfirm={async () => {
					logout();
					closeModal();
				}}
				onReject={closeModal}
			/>,
		);
	};

	return (
		<button className={classes.button} onClick={logoutHandler}>
			<Icon className={classes.icon} name={Icons.exit} />
		</button>
	);
};