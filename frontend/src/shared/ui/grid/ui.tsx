import cn from 'classnames';
import { HTMLAttributes } from 'react';
import classes from './styles.module.scss';

interface GridProps extends HTMLAttributes<HTMLDivElement> {
	columns?: number;
	gap?: number;
}

export const Grid = ({ className, children }: GridProps) => {
	return (
		<div className={cn(classes.grid, className)}>
			{children}
		</div>
	);
};
