import { createSelector } from '@reduxjs/toolkit';
import { AccountDescriptionState } from './types';

const selectBase = (state: RootState): AccountDescriptionState => state.accountDescription;

export const selectAccountDescriptionAccount = createSelector(selectBase, (state) => state.account);

export const selectAccountDescriptionId = createSelector(selectBase, (state) => state.account.id);

export const selectAccountDescriptionaLoading = createSelector(selectBase, (state) => state.loading);

export const selectAccountDescriptionError = createSelector(selectBase, (state) => state.error);
