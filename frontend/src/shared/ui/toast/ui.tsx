import cn from 'classnames';
import classes from './styles.module.scss';

import { useToast, useToastState } from 'app/providers/toast';
import { Icons } from 'shared/types';
import { Icon } from '../icon';

export const Toast = () => {
	const { isOpen, type, message } = useToastState();
	const { closeToast } = useToast();

	return (
		<div className={cn(classes.toast, type, isOpen ? 'active' : '')}>
			<button className={classes.close} onClick={closeToast}>
				<Icon className={classes.icon} name={Icons.cross} />
			</button>
			{message}
		</div>
	);
};
