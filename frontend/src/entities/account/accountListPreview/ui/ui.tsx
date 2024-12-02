import { Link, useLocation } from "react-router-dom";
import { AccountType } from "shared/api/account";
import { path } from "shared/lib/router";
import classes from './styles.module.scss';

interface AccountItemProps {
    account: AccountType;
}

export const AccountItem = ({ account }: AccountItemProps) => {
    const location = useLocation();

    return (
        <div className={classes.account}>
            <Link className={classes.main} to={path.account.id(account.id)} state={{ from: location }}>
                <div className={classes.info}>
                    <span className={classes.amount}>{account.amount}</span>
                    <span className={classes.name}>{account.name}</span>
                </div>
            </Link>
        </div>
    );
};
