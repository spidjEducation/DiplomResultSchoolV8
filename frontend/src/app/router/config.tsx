import { ReactNode } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { path } from 'shared/lib/router';
import { MainLayout } from '../compoments/mainLayout/ui';

const ErrorPage = () => {
	return (
		<>
			<div>Упс</div>
		</>
	)
};

interface PropsWithElement { element?: ReactNode; }


const ProtectedRoute = ({ element }: PropsWithElement) => {

	return element;
};
const MainPage = () => {
	return (
		<div>Диплом ResultScool</div>
	);
};

export const routerConfig = createBrowserRouter([
	{
		path: path.home(),
		element: <ProtectedRoute element={<MainLayout />} />,
		errorElement: (
			<MainLayout>
				<ErrorPage />
			</MainLayout>
		),
		children: [
			{
				index: true,
				element: <MainPage />,
			}
		]
	},
]);
