import { OperationCreateForm } from "features/operation/create";
import { Container } from "shared/ui/container";
import { PageHeader } from "shared/ui/pageHeader";

export const OperationCreatePage = () => {
    return (
        <Container>
            <PageHeader title="Создание операции" />
            <OperationCreateForm />
        </Container>
    );
};
