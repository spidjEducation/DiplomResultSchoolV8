import { Container } from "shared/ui/container";
import { Grid } from "shared/ui/grid";
import { PageHeader } from "shared/ui/pageHeader";


export const Page404 = () => {
    return (
        <Container>
            <Grid>
                <PageHeader title="404" />
                <h4>Страница не найдена</h4>
            </Grid>
        </Container>
    );
};