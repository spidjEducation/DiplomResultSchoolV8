import { AuthLayout, MainLayout } from 'app/layouts';
import { useAuth } from 'app/providers/auth';
import { AccountPage } from 'pages/account';
import { CategotyPage } from 'pages/category';
import { ErrorPage } from 'pages/error';
import { LoginPage } from 'pages/login';
import { MainPage } from 'pages/main';
import { OperationPage } from 'pages/operation';
import { Page404 } from 'pages/page404/page404';
import { RegisterPage } from 'pages/register';
import { ReactNode } from 'react';
import { createBrowserRouter, Navigate, useLocation } from 'react-router-dom';
import { path } from 'shared/lib/router';

interface PropsWithElement { element?: ReactNode; }


const ProtectedRoute = ({ element }: PropsWithElement) => {
	const location = useLocation();

	const { authUser } = useAuth();

	return authUser ? element : <Navigate to={path.login()} replace state={{ from: location }} />;
};

const AuthenticationRoute = ({ element }: PropsWithElement) => {
	const { authUser } = useAuth();

	return authUser ? <Navigate to={path.home()} replace /> : element;
};

const ErrorWithLayout = () => {
	return (
		<MainLayout>
			<ErrorPage />
		</MainLayout>
	);
};

export const routerConfig = createBrowserRouter([
	{
		path: path.home(),
		element: <ProtectedRoute element={<MainLayout />} />,
		errorElement: (
			<ErrorWithLayout />
		),
		children: [
			{
				index: true,
				element: <MainPage />,
			},
			{
				path: path.account.root(),
				element: <AccountPage />,
			},
			{
				path: path.category.root(),
				element: <CategotyPage />,
			},
			{
				path: path.operation.root(),
				element: <OperationPage />,
			},
			{
				path: path.others(),
				element: <Page404 />,
			},
		]
	},
	{
		path: path.home(),
		element: <AuthenticationRoute element={<AuthLayout />} />,
		children: [
			{
				path: path.login(),
				element: <LoginPage />,
			},
			{
				path: path.register(),
				element: <RegisterPage />,
			},
		],
	},
]);
