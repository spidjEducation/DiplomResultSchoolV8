import { createAsyncThunk } from '@reduxjs/toolkit';
import { CategoryType, getCategories } from 'shared/api/category';
import { ErrorType } from 'shared/types';

export const fetchCategoryList = createAsyncThunk<CategoryType[], void, { rejectValue: ErrorType }>(
	'categories/fetchCategoryList',
	async (_, { rejectWithValue }) => {
		try {
			const { categories, error } = await getCategories();

			if (!categories) {
				throw new Error(error as string);
			}

			return categories;
		} catch (error: unknown) {
			const knownError = error as ErrorType;

			return rejectWithValue(knownError);
		}
	},
);
