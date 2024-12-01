export { default as categoryDescriptionReducer } from './model/slice';
export { fetchCategoryDescription } from './model/thunk';

export {
	selectCategoryDescription,
	selectCategoryDescriptionError,
	selectCategoryDescriptionId,
	selectCategoryDescriptionLoading,
} from './model/selectors';
export { type CategoryDescriptionState } from './model/types';
