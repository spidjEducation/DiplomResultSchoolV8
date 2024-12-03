import { AuthLayout, MainLayout } from 'app/layouts';
import { useAuth } from 'app/providers/auth';
import { AccountPage } from 'pages/account';
import { AccountCreatePage } from 'pages/accountCreate';
import { AccountEditPage } from 'pages/accountEdit';
import { CategoryPage } from 'pages/category';
import { CategoryCreatePage } from 'pages/categoryCreate';
import { CategoryEditPage } from 'pages/categoryEdit';
import { ErrorPage } from 'pages/error';
import { HistoryPage } from 'pages/history';
import { LoginPage } from 'pages/login';
import { MainPage } from 'pages/main';
import { OperationPage } from 'pages/operation';
import { OperationCreatePage } from 'pages/operationCreate';
import { Page404 } from 'pages/page404/ui';
import { RegisterPage } from 'pages/register';
import { UserEditPage } from 'pages/userEdit';
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
				path: path.settings(),
				element: <UserEditPage />,
			},
			{
				path: path.account.root(),
				element: <Navigate to={path.account.create()} replace />,
			},
			{
				path: path.account.id(),
				element: <AccountPage />,
			},
			{
				path: path.account.create(),
				element: <AccountCreatePage />,
			},
			{
				path: path.account.edit(),
				element: <AccountEditPage />,
			},
			{
				path: path.category.root(),
				element: <Navigate to={path.category.create()} replace />,
			},
			{
				path: path.category.id(),
				element: <CategoryPage />,
			},
			{
				path: path.category.create(),
				element: <CategoryCreatePage />,
			},
			{
				path: path.category.edit(),
				element: <CategoryEditPage />,
			},

			{
				path: path.operation.root(),
				element: <Navigate to={path.operation.create()} replace />,
			},
			{
				path: path.operation.id(),
				element: <OperationPage />,
			},
			{
				path: path.operation.create(),
				element: <OperationCreatePage />,
			},
			{
				path: path.history(),
				element: <HistoryPage />,
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
