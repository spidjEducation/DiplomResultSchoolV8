import { OperationItem } from 'entities/operation/operationtPreview';
import { OperationType } from 'shared/api/operation';
import classes from './styles.module.scss';

interface OperationsListProps {
	operations: OperationType[];
}

export const OperationsList = ({ operations }: OperationsListProps) => {
	return (
		<div className={classes.list}>
			{operations.length ? (
				operations?.map((operation) => (
					<OperationItem
						key={operation.id}
						operation={operation}
					/>
				))
			) : (
				<h5>Операций нет</h5>
			)}
		</div>
	);
};
