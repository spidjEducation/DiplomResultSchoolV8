import { useState } from 'react';
import { Button } from '../button';
import classes from './styles.module.scss';

interface ConfirmProps {
	title: string;
	text?: string;
	onConfirm: () => Promise<void>;
	onReject: () => void;
}

export const Confirm = ({ title, text, onConfirm, onReject }: ConfirmProps) => {
	const [isLoading, setIsLoading] = useState(false);

	const confirmHandler = async () => {
		setIsLoading(true);

		await onConfirm();

		setIsLoading(false);
	};

	return (
		<div className={classes.container}>
			<h3 className={classes.title}>{title}</h3>
			{!!text && <p>{text}</p>}
			<div className={classes.actions}>
				<Button className={classes.reject} onClick={onReject}>
					Отмена
				</Button>
				<Button className={classes.confirm} onClick={confirmHandler} loading={isLoading}>
					Подтвердить
				</Button>
			</div>
		</div>
	);
};
