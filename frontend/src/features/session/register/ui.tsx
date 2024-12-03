import { useState } from 'react';
import { Link } from 'react-router-dom';
import { RequestData } from 'shared/api';
import { path } from 'shared/lib/router';

import { yupResolver } from '@hookform/resolvers/yup';
import { useAuth } from 'app/providers/auth';
import { useToast } from 'app/providers/toast';
import { yup } from 'shared/lib/yup';
import { Block } from 'shared/ui/block';
import { Form } from 'shared/ui/form';
import { Button } from 'shared/ui/formButton';
import { Input } from 'shared/ui/formInput';
import classes from './styles.module.scss';

const registerFormRules = yup.object().shape({
	login: yup.string().required().min(5).max(30),
	password: yup.string().required().min(8).max(30),
	passcheck: yup
		.string()
		.required()
		.oneOf([yup.ref('password')]),
});

export const RegisterForm = () => {
	const { registration } = useAuth();
	const [isLoading, setIsLoading] = useState(false);
	const { showToast } = useToast();

	const submitHandler = async ({ login, password }: RequestData) => {
		setIsLoading(true);

		const { error } = await registration(login as string, password as string);

		setIsLoading(false);

		if (error) {
			showToast({
				message: error.includes('E11000') ? 'Такой пользователь уже существует' : error,
				type: 'error',
			});

			return;
		}

		showToast({ message: 'Вы успешно зарегистрировались', type: 'success' });
	};

	return (
		<Block className={classes.block}>
			<h1 className={classes.title}>Регистрация</h1>
			<Form className={classes.form} onSubmit={submitHandler} resolver={yupResolver(registerFormRules)}>
				<Input type="text" name="login" label="Логин" />
				<Input type="password" name="password" label="Пароль" />
				<Input type="password" name="passcheck" label="Повторите пароль" />
				<Button type="submit" disabled={isLoading} loading={isLoading}>
					Зарегистрироваться
				</Button>
			</Form>
			<Link className={classes.link} to={path.login()}>
				Авторизация
			</Link>
		</Block>
	);
};
