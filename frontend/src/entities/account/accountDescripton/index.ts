export { default as accountDescriptionReducer } from './model/slice';
export { fetchAccountDescription } from './model/thunk';

export {
	selectAccountDescriptionAccount,
	selectAccountDescriptionError,
	selectAccountDescriptionId,
	selectAccountDescriptionaLoading,
} from './model/selectors';
export { type AccountDescriptionState } from './model/types';
