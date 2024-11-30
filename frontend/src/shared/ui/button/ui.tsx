import cn from 'classnames';
import { ButtonHTMLAttributes } from 'react';
import classes from './styles.module.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	label?: string;
	loading?: boolean;
}

export const Button = ({ className, type = 'button', children, label, loading, ...rest }: ButtonProps) => {
	return (
		<button className={cn(className, classes.button, loading ? 'loading' : '')} type={type} {...rest}>
			{label || children}
		</button>
	);
};
