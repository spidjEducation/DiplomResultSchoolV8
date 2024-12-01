import { useClickAway } from '@uidotdev/usehooks';
import { useModal, useModalState } from 'app/providers/modal';
import { Icons } from 'shared/types';
import { Icon } from '../icon';
import classes from './styles.module.scss';

export const Modal = () => {
	const { isOpen, content } = useModalState();
	const { closeModal } = useModal();
	const clickAwayRef = useClickAway<HTMLDivElement>(closeModal);

	return (
		<div className={`${classes.modal} ${isOpen ? 'active' : ''}`}>
			<div className={classes.container} ref={clickAwayRef}>
				<button className={classes.close} onClick={closeModal}>
					<Icon className={classes.icon} name={Icons.cross} />
				</button>
				{content}
			</div>
		</div>
	);
};
