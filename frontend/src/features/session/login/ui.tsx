import { yupResolver } from '@hookform/resolvers/yup';
import { useAuth } from 'app/providers/auth';
import { useToast } from 'app/providers/toast';
import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { path } from 'shared/lib/router';
import { yup } from 'shared/lib/yup';
import { Block } from 'shared/ui/block';
import { Form } from 'shared/ui/form';
import { Button } from 'shared/ui/formButton';
import { Input } from 'shared/ui/formInput';
import classes from './styles.module.scss';

type RequestData = Record<string, string | number | boolean>;

const loginFormRules = yup.object().shape({
    login: yup.string().required().min(5).max(30),
    password: yup.string().required().min(8).max(30)
});

export const LoginForm = () => {
    const navigate = useNavigate();
    const from = useLocation().state?.from;
    const { showToast } = useToast();
    const [isLoading, setIsLoading] = useState(false);

    const { authorize } = useAuth();

    const loginHandler = async ({ login, password }: RequestData) => {
        setIsLoading(true);

        const { error } = await authorize(login as string, password as string);

        setIsLoading(false);

        if (error) {
            showToast({ message: error, type: 'error' });

            return;
        }

        navigate(from?.pathname || path.home());

        showToast({ message: 'Вы успешно вошли в систему', type: 'success' });
    };
    return (
        <Block className={classes.block}>
            <h1 className={classes.title}>Авторизация</h1>
            <Form className={classes.form} onSubmit={loginHandler} resolver={yupResolver(loginFormRules)}>
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