import { createAsyncThunk } from '@reduxjs/toolkit';
import { getOperation, OperationType } from 'shared/api/operation';
import { ErrorType, ID } from 'shared/types';

export const fetchOperationDescription = createAsyncThunk<OperationType, ID, { rejectValue: ErrorType }>(
	'operation/fetchOperationDescription',
	async (id, { rejectWithValue }) => {
		try {
			const { operation, error } = await getOperation(id);

			if (!operation) {
				throw new Error(error as string);
			}

			return operation;
		} catch (error: unknown) {
			const knownError = error as ErrorType;

			return rejectWithValue(knownError);
		}
	},
);
