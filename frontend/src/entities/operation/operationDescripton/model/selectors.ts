import { createSelector } from '@reduxjs/toolkit';
import { OperationDescriptionState } from './types';

const selectBase = (state: RootState): OperationDescriptionState => state.operationData;

export const selectOperationDescription = createSelector(selectBase, (state) => state.operation);

export const selectOperationDescriptionId = createSelector(selectBase, (state) => state.operation.id);

export const selectOperationDescriptionLoading = createSelector(selectBase, (state) => state.loading);

export const selectOperationDescriptionError = createSelector(selectBase, (state) => state.error);
