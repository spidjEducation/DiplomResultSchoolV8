import { useContext } from 'react';
import { ToastFunctionContext, ToastStateContext } from './context';
import { ToastFunctions, ToastState } from './types';

export const useToast = (): ToastFunctions => {
	const context = useContext(ToastFunctionContext);

	if (context === null) {
		throw new Error('useToast может использоваться только внутри ToastFunctions');
	}

	return context;
};

export const useToastState = (): ToastState => {
	const context = useContext(ToastStateContext);

	if (context === null) {
		throw new Error('useToastState может использоваться только внутри ToastState');
	}

	return context;
};
