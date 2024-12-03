import { Container } from "shared/ui/container";
import { PageHeader } from "shared/ui/pageHeader";
import { Category } from "widgets/category";

export const CategoryPage = () => {
    return (
        <Container>
            <PageHeader title="Информация о категории" />
            <Category />
        </Container>
    );
};
