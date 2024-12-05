import { yupResolver } from '@hookform/resolvers/yup';
import { useToast } from 'app/providers/toast';
import { selectOperationDescriptionError, selectOperationDescriptionLoading } from 'entities/operation/operationDescripton';
import { fetchCreateOperation } from 'entities/operation/operationDescripton/model/thunk';
import { useEffect, useMemo, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { RequestData } from 'shared/api';
import { AccountType, getAccounts } from 'shared/api/account';
import { CategoryType, getCategories } from 'shared/api/category';
import { path } from 'shared/lib/router';
import { useAppDispatch, useAppSelector } from 'shared/lib/store';
import { yup } from "shared/lib/yup";
import { ID } from 'shared/types';
import { Block } from "shared/ui/block";
import { Form } from "shared/ui/form";
import { Button } from "shared/ui/formButton";
import { Input } from "shared/ui/formInput";
import { Select } from 'shared/ui/select';
import classes from './styles.module.scss';

const operationCreateFormRules = yup.object().shape({
    amount: yup
        .number()
        .nullable()
        .transform((value, originalValue) => (originalValue === '' ? undefined : value))
        .required(),
    category: yup
        .string()
        .nullable()
        .transform((value, originalValue) => (originalValue === '' ? undefined : value))
        .required(),
    account: yup
        .string()
        .nullable()
        .transform((value, originalValue) => (originalValue === '' ? undefined : value))
        .required(),
    comment: yup.string(),
});

interface OptionProps { value: string; label: string; }
export interface LocationFromAccount { state?: { from: { accountId: ID } }; }


export const OperationCreateForm = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const [accounts, setAccounts] = useState<AccountType[]>([]);
    const [categories, setCategories] = useState<CategoryType[]>([]);
    const isCreating = useAppSelector(selectOperationDescriptionLoading);
    const error = useAppSelector(selectOperationDescriptionError);
    const location = useLocation() as LocationFromAccount;
    const { showToast } = useToast();

    const accountOptions = useMemo((): OptionProps[] => accounts.map((item) => ({ label: item.name as string, value: item.id as string })), [accounts]);
    const categoryOptions = useMemo((): OptionProps[] => categories.map((item) => ({ label: item.name as string, value: item.id as string })), [categories]);

    useEffect(() => {
        getAccounts().then(({ accounts }) => setAccounts(accounts ?? []));
        getCategories().then(({ categories }) => setCategories(categories ?? []));
    }, []);

    const submitHandler = async (submittedData: RequestData) => {
        const newOperation = await dispatch(fetchCreateOperation(submittedData)).unwrap();

        showToast({ message: 'Счет создан', type: 'success' });

        navigate(path.operation.id(newOperation.id), { replace: true });
    };

    if (error) {
        showToast({ message: error, type: 'error' });
    }

    return (
        <Block className={classes.block}>
            <Form className={classes.form} onSubmit={submitHandler} resolver={yupResolver(operationCreateFormRules)}>
                <Input type="number" name="amount" label="Сумма операции" />
                <Select
                    name="account"
                    options={accountOptions}
                    defaultValue={location.state?.from.accountId || ''}
                    label="Счет операции"
                    placeholder=""
                />
                <Select name="category" options={categoryOptions} label="Категория операции" placeholder="" />
                <Input type="text" name="comment" label="Комментарий" />
                <Button type="submit" disabled={isCreating} loading={isCreating}>
                    Создать операцию
                </Button>
            </Form>
        </Block>
    );
};