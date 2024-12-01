import { createSelector } from '@reduxjs/toolkit';
import { OperationListState } from './types';

const selectBase = (state: RootState): OperationListState => state.operationList;

export const selectOperationList = createSelector(selectBase, (state) => state.operations);

export const selectOperationListLoading = createSelector(selectBase, (state) => state.loading);

export const selectOperationListError = createSelector(selectBase, (state) => state.error);

export const selectOperationListPage = createSelector(selectBase, (state) => state.page);

export const selectOperationListLimit = createSelector(selectBase, (state) => state.limit);

export const selectOperationListTotal = createSelector(selectBase, (state) => state.total);

export const selectOperationListIsAll = createSelector(selectBase, (state) => state.isAll);

export const selectOperationListTotalPages = createSelector(selectBase, (state) => state.totalPages);
