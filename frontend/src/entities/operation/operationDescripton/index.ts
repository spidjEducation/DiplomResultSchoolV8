export { default as operationDescriptionReducer } from './model/slice';
export { fetchOperationDescription } from './model/thunk';

export {
	selectOperationDescription,
	selectOperationDescriptionError,
	selectOperationDescriptionId,
	selectOperationDescriptionLoading,
} from './model/selectors';
export { type OperationDescriptionState } from './model/types';
