import { PropsWithChildren } from "react";
import { Outlet } from 'react-router-dom';
import { LayoutWrapper } from "shared/ui/layoutWrapper";
import { AppFooter } from "widgets/appFooter";
import { AppHeader } from "widgets/appHeader";
import classes from './styles.module.scss';

export const MainLayout = ({ children }: PropsWithChildren) => {
    return (
        <LayoutWrapper>
            <AppHeader />
            <main className={classes.main}>{children || <Outlet />}</main>
            <AppFooter />
        </LayoutWrapper>
    );
};

export const AuthLayout = () => {
    return (
        <div className={classes.auth}>
            <Outlet />
        </div>
    );
};
