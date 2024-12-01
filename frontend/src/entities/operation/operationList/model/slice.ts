import { createSlice } from '@reduxjs/toolkit';
import { LIMIT_FETCH } from 'shared/constant';
import { fetchOperationList } from './thunk';
import { OperationListState } from './types';

const initialState: OperationListState = {
	operations: [],
	page: 0,
	total: 0,
	limit: LIMIT_FETCH,
	totalPages: 0,
	loading: false,
	isAll: false,
	error: null,
};

const operationListSlice = createSlice({
	name: 'operations',
	initialState,
	reducers: {
		operationListStoreClear: () => initialState,
	},
	extraReducers: (builder) =>
		builder
			.addCase(fetchOperationList.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(fetchOperationList.fulfilled, (state, { payload }) => {
				state.operations = payload.items;
				state.page = payload.page;
				state.total = payload.total;
				state.totalPages = payload.totalPages;
				state.isAll = payload.page >= payload.totalPages;
				state.loading = false;
				state.error = null;
			})
			.addCase(fetchOperationList.rejected, (state, { payload }) => {
				state.loading = false;
				state.error = payload?.message ?? null;
			}),
});

export default operationListSlice.reducer;
