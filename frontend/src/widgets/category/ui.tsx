import { fetchCategoryDescription, selectCategoryDescription, selectCategoryDescriptionId, selectCategoryDescriptionLoading } from 'entities/category/categoryDescripton';
import { CategoryView } from 'entities/category/categorytPreview';
import { CategoryDelete } from 'features/category/delete';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from 'shared/lib/store';
import { Loading } from 'shared/ui/loading';


export const Category = () => {
	const { id } = useParams();
	const category = useAppSelector(selectCategoryDescription);
	const currentCategoryId = useAppSelector(selectCategoryDescriptionId);
	const dispatch = useAppDispatch();
	const isLoading = useAppSelector(selectCategoryDescriptionLoading);

	useEffect(() => {
		if (id && id !== currentCategoryId) dispatch(fetchCategoryDescription(id));
	}, [currentCategoryId, dispatch, id]);

	if (isLoading) {
		return <Loading />;
	}

	return <CategoryView category={category} deleteSlot={<CategoryDelete categoryId={category.id} />} />;

};
