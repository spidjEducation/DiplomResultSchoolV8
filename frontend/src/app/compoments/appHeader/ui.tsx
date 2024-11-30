import { AppLogo } from "../appLogo";
import { AppMenu } from "../appMenu";
import { Container } from "../container";
import { UserPanel } from "../userPanel";
import classes from './styles.module.scss';

export const AppHeader = () => {
    return (
        <header className={classes.header}>
            <Container>
                <div className={classes.body}>
                    <AppLogo />
                    <AppMenu />
                    <UserPanel />
                </div>
            </Container>

        </header>
    );
};
