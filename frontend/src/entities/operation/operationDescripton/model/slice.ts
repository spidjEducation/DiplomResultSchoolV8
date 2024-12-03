import { createSlice } from '@reduxjs/toolkit';
import { fetchCreateOperation, fetchDeleteOperation, fetchOperationDescription } from './thunk';
import { OperationDescriptionState } from './types';

const initialState: OperationDescriptionState = {
	operation: {
		id: '',
		user: '',
		account: null,
		category: null,
		name: '',
		amount: 0,
		comment: '',
		status: false,
		createdAt: '',
	},
	loading: false,
	creating: false,
	deleting: false,
	error: null,
};

export const operationDescriptionSlice = createSlice({
	name: 'operation',
	initialState,
	reducers: {},
	extraReducers: (builder) =>
		builder
			.addCase(fetchOperationDescription.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(fetchOperationDescription.fulfilled, (state, { payload }) => {
				state.operation = payload;
				state.loading = false;
				state.error = null;
			})
			.addCase(fetchOperationDescription.rejected, (state, { payload }) => {
				state.loading = false;
				state.error = payload?.message ?? null;
			})

			.addCase(fetchCreateOperation.pending, (state) => {
				state.creating = true;
				state.error = null;
			})
			.addCase(fetchCreateOperation.fulfilled, (state, { payload }) => {
				state.operation = payload;
				state.creating = false;
				state.error = null;
			})
			.addCase(fetchCreateOperation.rejected, (state, { payload }) => {
				state.creating = false;
				state.error = payload?.message ?? null;
			})

			.addCase(fetchDeleteOperation.pending, (state) => {
				state.deleting = true;
				state.error = null;
			})
			.addCase(fetchDeleteOperation.fulfilled, (state) => {
				state.deleting = false;
				state.error = null;
			})
			.addCase(fetchDeleteOperation.rejected, (state, { payload }) => {
				state.deleting = false;
				state.error = payload?.message ?? null;
			}),
});

export default operationDescriptionSlice.reducer;
