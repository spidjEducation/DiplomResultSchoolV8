import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { path } from 'shared/lib/router';
import { Block } from 'shared/ui/block';
import { Form } from 'shared/ui/form';
import { Button } from 'shared/ui/formButton';
import { Input } from 'shared/ui/formInput';
import classes from './styles.module.scss';

type RequestData = Record<string, string | number | boolean>;

export const LoginForm = () => {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);

    const loginHandler = async ({ login, password }: RequestData) => {
        console.log('Авторизация');
    };
    return (
        <Block className={classes.block}>
            <h1 className={classes.title}>Авторизация</h1>
            <Form className={classes.form} onSubmit={loginHandler}>
                <Input type="text" name="login" label="Логин" />
                <Input type="password" name="password" label="Пароль" />
                <Button type="submit" disabled={isLoading} loading={isLoading}>
                    Войти
                </Button>
            </Form>
            <Link className={classes.link} to={path.register()}>
                Регистрация
            </Link>
        </Block>
    );
}