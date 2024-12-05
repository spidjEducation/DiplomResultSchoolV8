import { useAuth } from "app/providers/auth";
import { UserDelete } from "features/user/delete";
import { EditUserForm } from "features/user/edit";
import { Container } from "shared/ui/container";
import { Grid } from "shared/ui/grid";
import { PageHeader } from "shared/ui/pageHeader";

export const UserEditPage = () => {
    const { authUser } = useAuth();

    if (!authUser) {
        throw new Error('You are not authenticated');
    }
    return (
        <Container>
            <PageHeader title="Редактирование пользователя" />
            <Grid>
                <EditUserForm userData={authUser} />
                <UserDelete userId={authUser.id} />
            </Grid>
        </Container>
    );
};
