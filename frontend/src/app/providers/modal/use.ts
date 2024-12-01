import { useContext } from 'react';
import { ModalFunctionContext, ModalStateContext } from './context';
import { ModalFunctions, ModalState } from './types';

export const useModal = (): ModalFunctions => {
	const context = useContext(ModalFunctionContext);

	if (context === null) {
		throw new Error('useModal может использоваться только внутри ModalFunctions');
	}

	return context;
};

export const useModalState = (): ModalState => {
	const context = useContext(ModalStateContext);

	if (context === null) {
		throw new Error('useModalState может использоваться только внутри ModalState');
	}

	return context;
};
