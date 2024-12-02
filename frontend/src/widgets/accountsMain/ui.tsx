import { fetchAccountList, selectAccountList, selectAccountListLoading } from 'entities/account/accountList';
import { AccountItem } from 'entities/account/accountListPreview/ui';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from 'shared/lib/store';
import { Block } from 'shared/ui/block';
import { Loading } from 'shared/ui/loading';
import classes from './styles.module.scss';

export const AccountsMain = () => {
	const dispatch = useAppDispatch();
	const accounts = useAppSelector(selectAccountList);
	const isLoading = useAppSelector(selectAccountListLoading);

	useEffect(() => {
		dispatch(fetchAccountList());
	}, [dispatch]);

	if (isLoading) {
		return <Loading />;
	}

	return (
		<Block className={classes.main}>
			<h4 className={classes.title}>Список счетов</h4>
			<div className={classes.list}>
				{accounts?.map((account) => (
					<AccountItem
						key={account.id}
						account={account}
					/>
				))}
			</div>
		</Block>
	);
};
