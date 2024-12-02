import { fetchOperationList, selectOperationList, selectOperationListLimit, selectOperationListLoading } from 'entities/operation/operationList';
import { ReactNode, useEffect } from 'react';
import { OperationType } from 'shared/api/operation';
import { useAppDispatch, useAppSelector } from 'shared/lib/store';
import { Block } from 'shared/ui/block';
import { Loading } from 'shared/ui/loading';
import classes from './styles.module.scss';

interface OperationsMainProps {
	renderOperationList: (operations: OperationType[]) => ReactNode;
}

export const OperationsMain = ({ renderOperationList }: OperationsMainProps) => {
	const dispatch = useAppDispatch();
	const operations = useAppSelector(selectOperationList);
	const isLoading = useAppSelector(selectOperationListLoading);
	const limit = useAppSelector(selectOperationListLimit);

	useEffect(() => {
		dispatch(fetchOperationList({ limit }));
	}, [dispatch, limit]);

	if (isLoading) {
		return <Loading />;
	}

	return (
		<Block className={classes.main}>
			<h4 className={classes.title}>Недавние операции</h4>
			{renderOperationList(operations)}
		</Block>
	);
};
