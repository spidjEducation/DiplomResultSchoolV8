import { OperationsList } from "features/operation";
import { Container } from "shared/ui/container";
import { AccountsMain } from "widgets/accountsMain";
import { CategoriesMain } from "widgets/categoriesMain";
import { OperationsMain } from "widgets/operationsMain";
import classes from './styles.module.scss';

export const MainPage = () => {
    return (
        <Container className={classes.main}>
            <div className={classes.content}>
                <AccountsMain />
                <OperationsMain renderOperationList={(operations) => <OperationsList operations={operations} />} />
                <CategoriesMain />
            </div>
        </Container>
    );
};
