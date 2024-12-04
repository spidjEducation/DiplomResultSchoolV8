import { Container } from "shared/ui/container";
import { PageHeader } from "shared/ui/pageHeader";
import { Operation } from "widgets/operation";

export const OperationPage = () => {
    return (
        <Container>
            <PageHeader title="Информация об операции" />
            <Operation />
        </Container>
    );
};
