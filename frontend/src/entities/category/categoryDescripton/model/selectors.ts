import { createSelector } from '@reduxjs/toolkit';
import { CategoryDescriptionState } from './types';

const selectBase = (state: RootState): CategoryDescriptionState => state.categoryDescription;

export const selectCategoryDescription = createSelector(selectBase, (state) => state.category);

export const selectCategoryDescriptionId = createSelector(selectBase, (state) => state.category.id);

export const selectCategoryDescriptionLoading = createSelector(selectBase, (state) => state.loading);

export const selectCategoryDescriptionError = createSelector(selectBase, (state) => state.error);
