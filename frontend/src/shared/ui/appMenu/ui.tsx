import { LogoutButton } from 'features/session';
import { NavLink } from 'react-router-dom';
import { path } from 'shared/lib/router';
import classes from './styles.module.scss';

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
                    <NavLink className={classes.link} to={path.account.root()}>
                        Добавить счет
                    </NavLink>
                </li>
                <li className={classes.item}>
                    <NavLink className={classes.link} to={path.operation.root()}>
                        Добавить операцию
                    </NavLink>
                </li>
                <li className={classes.item}>
                    <NavLink className={classes.link} to={path.category.root()}>
                        Добавить категорию
                    </NavLink>
                </li>
                <li className={classes.item}>
                    <LogoutButton />
                </li>

            </ul>
        </nav>
    );
};
