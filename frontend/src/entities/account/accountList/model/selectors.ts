import { createSelector } from '@reduxjs/toolkit';
import { AccountListState } from './types';

const selectBase = (state: RootState): AccountListState => state.accountList;

export const selectAccountList = createSelector(selectBase, (state) => state.accounts);

export const selectAccountListLoading = createSelector(selectBase, (state) => state.loading);

export const selectAccountListError = createSelector(selectBase, (state) => state.error);
