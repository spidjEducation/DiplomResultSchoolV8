import { createAsyncThunk } from '@reduxjs/toolkit';
import { CategoryType, deleteCategory, getCategory } from 'shared/api/category';
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

export const fetchDeleteCategory = createAsyncThunk<ID, ID, { rejectValue: ErrorType }>(
	'category/fetchDeleteCategory',
	async (id, { rejectWithValue }) => {
		try {
			const { error } = await deleteCategory(id);

			if (error) {
				throw new Error(error as string);
			}

			return id;
		} catch (error: unknown) {
			const knownError = error as ErrorType;

			return rejectWithValue(knownError);
		}
	},
);
