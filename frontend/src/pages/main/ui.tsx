import { Container } from "shared/ui/container";
import classes from './styles.module.scss';

const AccountsMain = () => {
    return (<div>Список счетов</div>)
}
const CategoriesMain = () => {
    return (<div>Список категорий</div>)
}
const OperationsMain = () => {
    return (<div>Список операций</div>)
}

export const MainPage = () => {
    return (
        <Container className={classes.main}>
            <div className={classes.content}>
                <AccountsMain />
                <OperationsMain />
                <CategoriesMain />
            </div>
        </Container>
    );
};
