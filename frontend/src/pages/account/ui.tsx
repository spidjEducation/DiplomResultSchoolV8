import { Container } from "shared/ui/container";
import { PageHeader } from "shared/ui/pageHeader";
import { Account } from "widgets/account";

export const AccountPage = () => {
    return (
        <Container>
            <PageHeader title="Информация о счете" />
            <Account />
        </Container>
    );
};
