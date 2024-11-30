import cn from 'classnames';
import { HTMLAttributes } from "react";
import classes from './styles.module.scss';

interface ContainerProps extends HTMLAttributes<HTMLDivElement> { width?: `${number}` | number; }

export const Container = ({ className, children, width }: ContainerProps) => {
    return (
        <div className={cn(classes.container, className)} style={width ? { maxWidth: `${width}px` } : {}}>
            {children}
        </div>
    );
};
