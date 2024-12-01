import { useAuth } from 'app/providers/auth';
import { Link } from 'react-router-dom';
import { path } from 'shared/lib/router';
import classes from './styles.module.scss';
export const UserPanel = () => {
    const { authUser } = useAuth();

    if (!authUser) {
        throw new Error('You are not authenticated');
    }
    return (
        <Link className={classes.user} to={path.settings()}>
            <span className={classes.login}>{authUser.login}</span>
        </Link>
    );
};
