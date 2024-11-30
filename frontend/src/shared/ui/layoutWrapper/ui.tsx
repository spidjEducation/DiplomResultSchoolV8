import { PropsWithChildren } from "react";
import classes from './styles.module.scss';

export const LayoutWrapper = ({ children }: PropsWithChildren) => {
    return (
        <div className={classes.wrapper}>{children}</div>
    );
};
