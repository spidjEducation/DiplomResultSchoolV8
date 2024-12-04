import { yupResolver } from '@hookform/resolvers/yup';
import { useToast } from 'app/providers/toast';
import { fetchCategoryDescription, selectCategoryDescription, selectCategoryDescriptionError, selectCategoryDescriptionId, selectCategoryDescriptionLoading } from 'entities/category/categoryDescripton';
import { fetchEditCategory } from 'entities/category/categoryDescripton/model/thunk';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { RequestData } from 'shared/api';
import { CATEGORY_TYPES } from 'shared/lib/category';
import { useAppDispatch, useAppSelector } from 'shared/lib/store';
import { yup } from 'shared/lib/yup';
import { Block } from 'shared/ui/block';
import { Fieldset } from 'shared/ui/fieldset';
import { Form } from 'shared/ui/form';
import { Button } from 'shared/ui/formButton';
import { Input } from 'shared/ui/formInput';
import { Radio } from 'shared/ui/formRadio';
import { Loading } from 'shared/ui/loading';
import classes from './styles.module.scss';


const categoryEditFormRules = yup.object().shape({
	type: yup.number().required(),
	name: yup.string().required().min(5).max(50),
});

export const CategoryEditForm = () => {
	const { id } = useParams();
	const category = useAppSelector(selectCategoryDescription);
	const currentCategoryId = useAppSelector(selectCategoryDescriptionId);
	const isLoading = useAppSelector(selectCategoryDescriptionLoading);
	const error = useAppSelector(selectCategoryDescriptionError);
	const dispatch = useAppDispatch();
	const { showToast } = useToast();

	useEffect(() => {
		if (id && id !== currentCategoryId) dispatch(fetchCategoryDescription(id));
	}, [currentCategoryId, dispatch, id]);

	const submitHandler = async (editData: RequestData) => {
		await dispatch(fetchEditCategory({ id: category.id, submittedData: editData }));

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
			<Form className={classes.form} onSubmit={submitHandler} resolver={yupResolver(categoryEditFormRules)}>
				<Input type="text" name="name" defaultValue={category.name} label="Название категории" />
				<Fieldset label="Тип категории">
					<div className={classes.radiobuttons}>
						{CATEGORY_TYPES.map((type) => (
							<Radio
								key={type.id}
								name="type"
								value={type.id}
								label={type.name}
								defaultChecked={type.id === category.type}
							/>
						))}
					</div>
				</Fieldset>
				<Button type="submit" disabled={isLoading} loading={isLoading}>
					Внести изменения
				</Button>
			</Form>
		</Block>
	);
};
