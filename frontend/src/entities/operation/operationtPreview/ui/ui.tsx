import cn from 'classnames';
import { Link, useLocation } from "react-router-dom";
import { OperationType } from "shared/api/operation";
import { CategoryType } from "shared/lib/category";
import { path } from 'shared/lib/router';
import classes from './styles.module.scss';

interface OperationItemProps {
    operation: OperationType;
}

export const OperationItem = ({ operation }: OperationItemProps) => {
    const location = useLocation();

    const amountTypeClass = operation.category?.type === CategoryType.income ? 'income' : 'expense';

    return (
        <div className={classes.operation}>
            <Link className={classes.main} to={path.operation.id(operation.id)} state={{ from: location }}>
                <div className={classes.info}>
                    <span>{operation.category?.name}</span>
                    <span className={classes.datetime}>
                        {operation.createdAt ? operation.createdAt : ''}
                    </span>
                    <span className={cn(classes.amount, amountTypeClass)}>{operation.amount}</span>
                    <span>Счет: {operation.account?.name}</span>
                </div>
            </Link>
        </div>
    );
};
