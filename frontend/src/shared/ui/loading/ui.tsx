import loadingGif from 'shared/assets/img/spinner.gif';
import { Block } from '../block';
import classes from './styles.module.scss';


export const Loading = () => {
	return (
		<Block className={classes.loading}>
			<img src={loadingGif} alt="Loading..." />
		</Block>
	);
};
