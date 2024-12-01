import { useNavigate } from 'react-router-dom';
import { Icons } from 'shared/types';
import { Icon } from '../icon';
import classes from './styles.module.scss';

interface PageHeaderProps {
	title: string;
}

export const PageHeader = ({ title }: PageHeaderProps) => {
	const navigate = useNavigate();

	return (
		<div className={classes.main}>
			<button className={classes.button} type="button" onClick={() => navigate(-1)}>
				<Icon className={classes.icon} name={Icons.back}></Icon>
				<span>Назад</span>
			</button>
			<h1>{title}</h1>
		</div>
	);
};
