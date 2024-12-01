import { Providers } from './providers';
import { AppRouter } from './router';
import './styles/styles.scss';
const App = () => {
	return (
		<Providers>
			<AppRouter />
		</Providers>
	)
}

export { App };
