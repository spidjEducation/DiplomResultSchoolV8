
import { AppLogo } from 'shared/ui/appLogo';
import { AppMenu } from 'shared/ui/appMenu';
import { Container } from 'shared/ui/container';
import { UserPanel } from 'shared/ui/userPanel';
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
