import { fetchAccountDescription, selectAccountDescriptionAccount, selectAccountDescriptionaLoading, selectAccountDescriptionId } from 'entities/account/accountDescripton';
import { AccountView } from 'entities/account/accountPreview';
import { AccountDelete } from 'features/account/delete';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from 'shared/lib/store';
import { Loading } from 'shared/ui/loading';

export const Account = () => {
	const { id } = useParams();
	const dispatch = useAppDispatch();
	const account = useAppSelector(selectAccountDescriptionAccount);
	const currentAccountId = useAppSelector(selectAccountDescriptionId);
	const isLoading = useAppSelector(selectAccountDescriptionaLoading);

	useEffect(() => {
		if (id) dispatch(fetchAccountDescription(id));
	}, [currentAccountId, dispatch, id]);

	if (isLoading) {
		return <Loading />;
	}

	return (
		<>
			<AccountView account={account} deleteSlot={<AccountDelete accountId={account.id} />} />
		</>
	);
};
