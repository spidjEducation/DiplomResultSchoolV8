import { useState } from 'react';
import { Link } from 'react-router-dom';
import { RequestData } from 'shared/api';
import { path } from 'shared/lib/router';

import { Block } from 'shared/ui/block';
import { Form } from 'shared/ui/form';
import { Button } from 'shared/ui/formButton';
import { Input } from 'shared/ui/formInput';
import classes from './styles.module.scss';


export const RegisterForm = () => {
	const [isLoading, setIsLoading] = useState(false);

	const submitHandler = async ({ login, password }: RequestData) => {
		setIsLoading(true);

		setIsLoading(false);
	};

	return (
		<Block className={classes.block}>
			<h1 className={classes.title}>Регистрация</h1>
			<Form className={classes.form} onSubmit={submitHandler}>
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
