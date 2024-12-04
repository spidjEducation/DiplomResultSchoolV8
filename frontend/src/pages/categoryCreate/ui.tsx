import { CategoryCreateForm } from "features/category/create";
import { Container } from "shared/ui/container";
import { PageHeader } from "shared/ui/pageHeader";

export const CategoryCreatePage = () => {
    return (
        <Container>
            <PageHeader title="Создание категории" />
            <CategoryCreateForm />
        </Container>
    );
};
