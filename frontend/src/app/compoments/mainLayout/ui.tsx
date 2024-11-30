import { PropsWithChildren } from "react";
import { Outlet } from 'react-router-dom';
import { AppFooter } from "../appFooter";
import { AppHeader } from "../appHeader";
import { LayoutWrapper } from "../layoutWrapper";
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
