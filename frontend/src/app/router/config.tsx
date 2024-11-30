import { AuthLayout, MainLayout } from 'app/layouts';
import { AccountPage } from 'pages/account';
import { CategotyPage } from 'pages/category';
import { ErrorPage } from 'pages/error';
import { LoginPage } from 'pages/login';
import { MainPage } from 'pages/main';
import { OperationPage } from 'pages/operation';
import { RegisterPage } from 'pages/register';
import { ReactNode } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { path } from 'shared/lib/router';

interface PropsWithElement { element?: ReactNode; }


const ProtectedRoute = ({ element }: PropsWithElement) => {

	return element;
};

const AuthenticationRoute = ({ element }: PropsWithElement) => {
	return element;
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
				path: path.account(),
				element: <AccountPage />,
			},
			{
				path: path.category(),
				element: <CategotyPage />,
			},
			{
				path: path.operation(),
				element: <OperationPage />,
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
