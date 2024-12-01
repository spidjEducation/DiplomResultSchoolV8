import { createSlice } from '@reduxjs/toolkit';
import { fetchCategoryDescription } from './thunk';
import { CategoryDescriptionState } from './types';

const initialState: CategoryDescriptionState = {
	category: {
		id: '',
		name: '',
		type: '',
		createdAt: '',
	},
	loading: false,
	error: null,
};

const categoryDescriptionSlice = createSlice({
	name: 'category',
	initialState,
	reducers: {},
	extraReducers: (builder) =>
		builder
			.addCase(fetchCategoryDescription.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(fetchCategoryDescription.fulfilled, (state, { payload }) => {
				state.category = payload;
				state.loading = false;
				state.error = null;
			})
			.addCase(fetchCategoryDescription.rejected, (state, { payload }) => {
				state.loading = false;
				state.error = payload?.message ?? null;
			}),
});

export default categoryDescriptionSlice.reducer;
