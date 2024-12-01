import { PropsWithChildren, ReactNode, useCallback, useMemo, useState } from 'react';
import { Modal } from 'shared/ui/modal';
import { ModalFunctionContext, ModalStateContext } from './context';

export const ModalProvider = ({ children }: PropsWithChildren) => {
	const [isOpen, setIsOpen] = useState(false);
	const [content, setContent] = useState<ReactNode>(null);

	const openModal = useCallback((content: ReactNode) => {
		setContent(content);
		setIsOpen(true);
	}, []);

	const closeModal = useCallback(() => setIsOpen(false), []);

	const modalFunctions = useMemo(() => ({ openModal, closeModal }), [openModal, closeModal]);

	const modalState = useMemo(() => ({ isOpen, content }), [isOpen, content]);

	return (
		<ModalFunctionContext.Provider value={modalFunctions}>
			<ModalStateContext.Provider value={modalState}>
				{children}
				<Modal />
			</ModalStateContext.Provider>
		</ModalFunctionContext.Provider>
	);
};
