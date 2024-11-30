import cn from 'classnames';
import { HTMLAttributes } from 'react';
import classes from './styles.module.scss';

export const Block = ({ className, children, ...rest }: HTMLAttributes<HTMLDivElement>) => {
	return (
		<div className={cn(classes.block, className)} {...rest}>
			{children}
		</div>
	);
};
