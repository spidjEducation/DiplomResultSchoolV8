import { createSlice } from '@reduxjs/toolkit';
import { fetchAccountDescription } from './thunk';
import { AccountDescriptionState } from './types';

const initialState: AccountDescriptionState = {
	account: {
		id: '',
		name: '',
		createdAt: '',
		amount: 0,
		comment: '',
	},
	loading: false,
	error: null,
};

export const accountDescriptionSlice = createSlice({
	name: 'account',
	initialState,
	reducers: {},
	extraReducers: (builder) =>
		builder
			.addCase(fetchAccountDescription.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(fetchAccountDescription.fulfilled, (state, { payload }) => {
				state.account = payload;
				state.loading = false;
				state.error = null;
			})
			.addCase(fetchAccountDescription.rejected, (state, { payload }) => {
				state.loading = false;
				state.error = payload?.message ?? null;
			}),
});

export default accountDescriptionSlice.reducer;
