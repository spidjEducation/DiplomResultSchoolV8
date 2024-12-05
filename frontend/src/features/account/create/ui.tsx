import { yupResolver } from '@hookform/resolvers/yup';
import { useToast } from 'app/providers/toast';
import { selectAccountDescriptionaLoading, selectAccountDescriptionError } from 'entities/account/accountDescripton';
import { fetchCreateAccount } from 'entities/account/accountDescripton/model/thunk';
import { useNavigate } from 'react-router-dom';
import { RequestData } from 'shared/api';
import { path } from 'shared/lib/router';
import { useAppDispatch, useAppSelector } from 'shared/lib/store';
import { yup } from 'shared/lib/yup';
import { Block } from 'shared/ui/block';
import { Form } from 'shared/ui/form';
import { Button } from 'shared/ui/formButton';
import { Input } from 'shared/ui/formInput';
import { Textarea } from 'widgets/textarea';
import classes from './styles.module.scss';

const accountCreateFormRules = yup.object().shape({
	name: yup.string().required().min(3).max(50),
	amount: yup.number().transform((value, originalValue) => (originalValue === '' ? 0 : value)),
	comment: yup.string().nullable(),
});


export const AccountCreateForm = () => {
	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	const { showToast } = useToast();
	const isCreating = useAppSelector(selectAccountDescriptionaLoading);
	const error = useAppSelector(selectAccountDescriptionError);

	const submitHandler = async (submittedData: RequestData) => {
		const newAccount = await dispatch(fetchCreateAccount(submittedData)).unwrap();

		showToast({ message: 'Счет создан', type: 'success' });

		navigate(path.account.id(newAccount.id), { replace: true });
	};

	if (error) {
		showToast({ message: error, type: 'error' });
	}

	return (
		<Block className={classes.block}>
			<Form className={classes.form} onSubmit={submitHandler} resolver={yupResolver(accountCreateFormRules)}>
				<Input type="text" name="name" label="Название счета" />
				<Input type="number" name="amount" label="Сумма" />
				<Textarea name="comment" label="Комментарий" />
				<Button type="submit" disabled={isCreating} loading={isCreating}>
					Создать счет
				</Button>
			</Form>
		</Block>
	);
};
