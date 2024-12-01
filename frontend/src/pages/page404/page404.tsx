import { Container } from "shared/ui/container";
import { PageHeader } from "shared/ui/pageHeader";
import classes from './styles.module.scss';


export const Page404 = () => {
    return (
        <Container>
            <div className={classes.grid} >
                <PageHeader title="404" />
                <h4>Страница не найдена</h4>
            </div>
        </Container>
    );
};