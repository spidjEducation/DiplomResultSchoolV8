import cn from 'classnames';
import { NavLink } from 'react-router-dom';
import { path } from 'shared/lib/router';
import { Icons } from 'shared/types';
import { Icon } from 'shared/ui/icon';
import classes from './styles.module.scss';

const LogoutButton = () => {
    const logoutHandler = () => {
        console.log('Выход')
    };

    return (
        <button className={cn(classes.button)} onClick={logoutHandler}>
            <Icon className={classes.icon} name={Icons.exit} />
        </button>
    );
}
export const AppMenu = () => {
    return (
        <nav className={classes.menu}>
            <ul className={classes.list}>
                <li className={classes.item}>
                    <NavLink className={classes.link} to={path.home()}>
                        Главная
                    </NavLink>
                </li>
                <li className={classes.item}>
                    <NavLink className={classes.link} to={path.account()}>
                        Счета
                    </NavLink>
                </li>
                <li className={classes.item}>
                    <NavLink className={classes.link} to={path.operation()}>
                        Операции
                    </NavLink>
                </li>
                <li className={classes.item}>
                    <NavLink className={classes.link} to={path.category()}>
                        Категории
                    </NavLink>
                </li>
                <li className={classes.item}>
                    <LogoutButton />
                </li>

            </ul>
        </nav>
    );
};
