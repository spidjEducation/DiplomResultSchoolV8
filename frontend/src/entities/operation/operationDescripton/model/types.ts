import { OperationType } from 'shared/api/operation';

export interface OperationDescriptionState {
	operation: OperationType;
	loading: boolean;
	creating: boolean;
	deleting: boolean;
	error: string | null;
}
