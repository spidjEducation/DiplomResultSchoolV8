import { PropsWithChildren } from "react";
import classes from './styles.module.scss';
export const ExamplComponent = ({ children }: PropsWithChildren) => {
    return (
        <div className={classes.main} >
            {children}
        </div>
    );
};
