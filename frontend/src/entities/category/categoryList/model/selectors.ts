import { createSelector } from '@reduxjs/toolkit';
import { CategoryListState } from './types';

const selectBase = (state: RootState): CategoryListState => state.categoryList;

export const selectCategoryList = createSelector(selectBase, (state) => state.categories);

export const selectCategoryListLoading = createSelector(selectBase, (state) => state.loading);

export const selectCategoryListError = createSelector(selectBase, (state) => state.error);
