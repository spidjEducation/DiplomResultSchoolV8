import { fetchCategoryList, selectCategoryList, selectCategoryListLoading } from 'entities/category/categoryList';
import { CategoryItem } from 'entities/category/categorytListPreview/ui';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from 'shared/lib/store';
import { Block } from 'shared/ui/block';
import { Loading } from 'shared/ui/loading';
import classes from './styles.module.scss';

export const CategoriesMain = () => {
	const categories = useAppSelector(selectCategoryList);

	const dispatch = useAppDispatch();
	const isLoading = useAppSelector(selectCategoryListLoading);

	useEffect(() => {
		dispatch(fetchCategoryList());
	}, [dispatch]);

	if (isLoading) {
		return <Loading />;
	}

	return (
		<Block className={classes.main}>
			<h4 className={classes.title}>Список категорий</h4>
			<div className={classes.list}>
				{categories?.map((category) => (
					<CategoryItem
						key={category.id}
						category={category}
					/>
				))}
			</div>
		</Block>
	);
};
