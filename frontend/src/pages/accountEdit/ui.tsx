import { AccountEditForm } from "features/account/edit/ui";
import { Container } from "shared/ui/container";
import { PageHeader } from "shared/ui/pageHeader";

export const AccountEditPage = () => {
    return (
        <Container>
            <PageHeader title="Редактирование счета" />
            <AccountEditForm />
        </Container>
    );
};
