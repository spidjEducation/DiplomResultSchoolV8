import { Container } from 'shared/ui/container';
import classes from './styles.module.scss';
export const AppFooter = () => {
    return (
        <footer className={classes.footer}>
            <Container className={classes.container}>
                <span>Дипломный проект</span> <span>Дмитрий Спиридов</span>
            </Container>
        </footer>
    );
};
