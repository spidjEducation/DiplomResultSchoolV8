import { RouterProvider } from "react-router-dom";
import { routerConfig } from './config';

export const AppRouter = () => <RouterProvider router={routerConfig} />;