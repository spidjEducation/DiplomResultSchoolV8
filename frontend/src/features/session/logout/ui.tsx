import { Icons } from 'shared/types';
import { Icon } from 'shared/ui/icon';
import classes from './styles.module.scss';

export const LogoutButton = () => {

	const logoutHandler = () => {
		console.log('Выход');
	};

	return (
		<button className={classes.button} onClick={logoutHandler}>
			<Icon className={classes.icon} name={Icons.exit} />
		</button>
	);
};