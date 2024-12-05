import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import classes from './styles.module.scss';
// import { accountEditFormRules } from './account-edit.rules';
import { yupResolver } from '@hookform/resolvers/yup';
// import { Button, Form, Input, Radio, Textarea } from 'shared/ui/form-components';
// import { Block, Fieldset, Loading } from 'shared/ui/components';
import { useToast } from 'app/providers/toast';
import { RequestData } from 'shared/api';
// import { ACCOUNT_TYPES } from 'shared/lib/account';
import { useAppDispatch, useAppSelector } from 'shared/lib/store';
// import {
// 	fetchEditAccount,
// 	fetchGetAccount,
// 	selectAccountData,
// 	selectAccountDataError,
// 	selectAccountDataId,
// 	selectAccountDataLoading,
// 	selectAccountDataUpdating,
// } from 'entities/account/account-data';
import { fetchAccountDescription, selectAccountDescriptionAccount, selectAccountDescriptionaLoading, selectAccountDescriptionError, selectAccountDescriptionId } from 'entities/account/accountDescripton';
import { fetchEditAccount } from 'entities/account/accountDescripton/model/thunk';
import { yup } from 'shared/lib/yup';
import { Block } from 'shared/ui/block';
import { Form } from 'shared/ui/form';
import { Button } from 'shared/ui/formButton';
import { Input } from 'shared/ui/formInput';
import { Loading } from 'shared/ui/loading';
import { Textarea } from 'widgets/textarea';

const accountEditFormRules = yup.object().shape({
	name: yup.string().required().min(3).max(50),
	amount: yup.number(),
});

export const AccountEditForm = () => {
	const { id } = useParams();
	const account = useAppSelector(selectAccountDescriptionAccount);
	const currentAccountId = useAppSelector(selectAccountDescriptionId);
	const isLoading = useAppSelector(selectAccountDescriptionaLoading);
	const isUpdating = useAppSelector(selectAccountDescriptionaLoading);
	const error = useAppSelector(selectAccountDescriptionError);
	const dispatch = useAppDispatch();
	const { showToast } = useToast();

	useEffect(() => {
		if (id && id !== currentAccountId) dispatch(fetchAccountDescription(id));
	}, [dispatch, id, currentAccountId]);

	const submitHandler = async (editData: RequestData) => {
		await dispatch(fetchEditAccount({ id: account.id, submittedData: editData }));

		showToast({ message: 'Изменения внесены', type: 'success' });
	};

	if (error) {
		showToast({ message: error, type: 'error' });
	}

	if (isLoading) {
		return <Loading />;
	}

	return (
		<Block className={classes.block}>
			<Form className={classes.form} onSubmit={submitHandler} resolver={yupResolver(accountEditFormRules)}>
				<Input type="text" name="name" defaultValue={account.name} label="Название счета" />
				<Input type="number" name="amount" defaultValue={account.amount} label="Сумма" />
				<Textarea name="comment" label="Комментарий" defaultValue={account.comment} />
				<Button type="submit" disabled={isUpdating} loading={isUpdating}>
					Внести изменения
				</Button>
			</Form>
		</Block>
	);
};
