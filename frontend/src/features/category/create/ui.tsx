import { yupResolver } from '@hookform/resolvers/yup';
import { useToast } from 'app/providers/toast';
import { selectCategoryDescriptionError, selectCategoryDescriptionLoading } from 'entities/category/categoryDescripton';
import { fetchCreateCategory } from 'entities/category/categoryDescripton/model/thunk';
import { useNavigate } from "react-router-dom";
import { RequestData } from 'shared/api';
import { CATEGORY_TYPES } from 'shared/lib/category';
import { path } from 'shared/lib/router';
import { useAppDispatch, useAppSelector } from 'shared/lib/store';
import { yup } from "shared/lib/yup";
import { Block } from "shared/ui/block";
import { Fieldset } from 'shared/ui/fieldset';
import { Form } from 'shared/ui/form';
import { Button } from 'shared/ui/formButton';
import { Input } from "shared/ui/formInput";
import { Radio } from 'shared/ui/formRadio';
import classes from './styles.module.scss';

const categoryCreateFormRules = yup.object().shape({
    type: yup.number().required(),
    name: yup.string().required().min(5).max(50),
});

export const CategoryCreateForm = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const { showToast } = useToast();
    const isCreating = useAppSelector(selectCategoryDescriptionLoading);
    const error = useAppSelector(selectCategoryDescriptionError);

    const submitHandler = async (submittedData: RequestData) => {

        const newCategory = await dispatch(fetchCreateCategory(submittedData)).unwrap();

        showToast({ message: 'Категория создана', type: 'success' });

        navigate(path.category.id(newCategory.id), { replace: true });
    };

    if (error) {
        showToast({ message: error, type: 'error' });
    }

    return (
        <Block className={classes.block}>
            <Form className={classes.form} onSubmit={submitHandler} resolver={yupResolver(categoryCreateFormRules)}>
                <Input type="text" name="name" label="Название категории" />
                <Fieldset label="Тип категории">
                    <div className={classes.radiobuttons}>
                        {CATEGORY_TYPES.map((type, i) => (
                            <Radio key={type.id} name="type" value={type.id} label={type.name} defaultChecked={!i} />
                        ))}
                    </div>
                </Fieldset>
                <Button type="submit" disabled={isCreating} loading={isCreating}>
                    Создать категорию
                </Button>
            </Form>
        </Block>
    );
};