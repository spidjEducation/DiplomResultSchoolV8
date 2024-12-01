import { createAsyncThunk } from '@reduxjs/toolkit';
import { CategoryType, getCategory } from 'shared/api/category';
import { ErrorType, ID } from 'shared/types';

export const fetchCategoryDescription = createAsyncThunk<CategoryType, ID, { rejectValue: ErrorType }>(
	'category/fetchCategoryDescription',
	async (id, { rejectWithValue }) => {
		try {
			const { category, error } = await getCategory(id);

			if (!category) {
				throw new Error(error as string);
			}

			return category;
		} catch (error: unknown) {
			const knownError = error as ErrorType;

			return rejectWithValue(knownError);
		}
	},
);
