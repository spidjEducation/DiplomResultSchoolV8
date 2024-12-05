import { yupResolver } from '@hookform/resolvers/yup';
import { useAuth } from 'app/providers/auth';
import { useToast } from 'app/providers/toast';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { request, RequestData } from 'shared/api';
import { UserResponse, UserType } from 'shared/api/user';
import { path } from 'shared/lib/router/path';
import { Block } from 'shared/ui/block';
import { Form } from 'shared/ui/form';
import { Button } from 'shared/ui/formButton';
import { Input } from 'shared/ui/formInput';
import { editUserFormRules } from './rules';
import classes from './styles.module.scss';

type Nullable<T> = { [K in keyof T]: T[K] | null; };

interface EditUserFormProps {
	userData: Nullable<UserType>;
}

export const EditUserForm = ({ userData }: EditUserFormProps) => {
	const navigate = useNavigate();
	const { showToast } = useToast();
	const { authCheck } = useAuth();
	const [isLoading, setIsLoading] = useState(false);

	const submitHandler = async (submittedData: Omit<RequestData, 'passcheck'>) => {
		setIsLoading(true);

		const { user, error } = await request<UserResponse>({
			url: `/users/${userData.id}`,
			method: 'PATCH',
			data: submittedData,
		});

		if (!user) {
			throw new Error(error || 'Unknown error');
		}

		authCheck();

		setIsLoading(false);

		navigate(path.home());

		showToast({ message: 'Изменения внесены', type: 'success' });
	};

	return (
		<Block className={classes.block}>
			<Form className={classes.form} onSubmit={submitHandler} resolver={yupResolver(editUserFormRules)}>
				<Input type="text" name="login" defaultValue={userData.login || ''} label="Логин" />
				<Input type="text" name="lastname" defaultValue={userData.lastname || ''} label="Фамилия" />
				<Input type="text" name="firstname" defaultValue={userData.firstname || ''} label="Имя" />
				<Input type="password" name="password" label="Пароль" />
				<Input type="password" name="passcheck" label="Повторите пароль" />
				<Button type="submit" disabled={isLoading} loading={isLoading}>
					Внести изменения
				</Button>
			</Form>
		</Block>
	);
};
