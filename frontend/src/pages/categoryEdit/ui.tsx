import { CategoryEditForm } from "features/category/edit";
import { Container } from "shared/ui/container";
import { PageHeader } from "shared/ui/pageHeader";

export const CategoryEditPage = () => {
    return (
        <Container>
            <PageHeader title="Редактирование категории" />
            <CategoryEditForm />
        </Container>
    );
};
