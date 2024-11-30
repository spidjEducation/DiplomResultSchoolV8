import { Link } from "react-router-dom";
import { Icons } from "shared/types";
import { Icon } from "shared/ui/icon";
import classes from './styles.module.scss';

export const AppLogo = () => {
    return (
        <Link className={classes.logo} to={'/'}>
            <Icon className={classes.icon} name={Icons.logo} />
        </Link>
    );
};
