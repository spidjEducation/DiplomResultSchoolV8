import { AccountCreateForm } from "features/account/create/ui";
import { Container } from "shared/ui/container";
import { PageHeader } from "shared/ui/pageHeader";

export const AccountCreatePage = () => {
    return (
        <Container>
            <PageHeader title="Создание счета" />
            <AccountCreateForm />
        </Container>
    );
};
