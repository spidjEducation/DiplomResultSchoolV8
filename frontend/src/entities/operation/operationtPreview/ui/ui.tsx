import cn from 'classnames';
import { format } from 'date-fns';
import { ReactNode } from 'react';
import { Link, useLocation } from "react-router-dom";
import { OperationType } from "shared/api/operation";
import { DATETIME_FORMAT } from 'shared/constant';
import { CategoryType } from "shared/lib/category";
import { path } from 'shared/lib/router';
import { Block } from 'shared/ui/block';
import classes from './styles.module.scss';

interface OperationItemProps { operation: OperationType; }
interface OperationViewProps extends OperationItemProps { deleteSlot: ReactNode; }

export const OperationItem = ({ operation }: OperationItemProps) => {
    const location = useLocation();

    const amountTypeClass = operation.category?.type === CategoryType.income ? 'income' : 'expense';

    return (
        <div className={classes.operation}>
            <Link className={classes.main} to={path.operation.id(operation.id)} state={{ from: location }}>
                <div className={classes.info}>
                    <span>{operation.category?.name}</span>
                    <span className={classes.datetime}>
                        {operation.createdAt ? format(operation.createdAt, DATETIME_FORMAT) : ''}
                    </span>
                    <span className={cn(classes.amount, amountTypeClass)}>{operation.amount}</span>
                    <span>Счет: {operation.account?.name}</span>
                </div>
            </Link>
        </div>
    );
};

export const OperationView = ({ operation, deleteSlot }: OperationViewProps) => {
    const amountTypeClass = operation.category?.type === CategoryType.income ? 'income' : 'expense';

    return (
        <Block className={classes.view}>
            <h4>Операция №{operation.id}</h4>
            {/* {operation.status ? (
                <IconCategory className={css['icon']} name={operation.category?.icon ?? undefined} />
            ) : (
                <Icon className={css['abort-icon']} name={Icons.abort} />
            )} */}
            <dl>
                <div>
                    <dt>Дата:</dt>
                    <dd>{operation.createdAt ? format(operation.createdAt, DATETIME_FORMAT) : ''}</dd>
                </div>
                <div>
                    <dt>Тип:</dt>
                    <dd>{operation.category?.name}</dd>
                </div>
                <div>
                    <dt>Сумма:</dt>
                    <dd>
                        <span className={cn(classes.amount, amountTypeClass)}>{operation.amount}</span>
                    </dd>
                </div>
                <div>
                    <dt>Счет:</dt>
                    <dd>{operation.account?.name}</dd>
                </div>
                <div>
                    <dt>Комментарий:</dt>
                    <dd>{operation.comment}</dd>
                </div>
            </dl>
            <div className={classes.actions}>{deleteSlot}</div>
        </Block>
    );
};