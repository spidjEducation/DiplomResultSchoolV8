import { PropsWithChildren, useCallback, useMemo, useState } from 'react';
import { Toast } from 'shared/ui/toast';
import { ToastFunctionContext, ToastStateContext } from './context';
import { ToastOptions, ToastType } from './types';

export const ToastProvider = ({ children }: PropsWithChildren) => {
	const [isOpen, setIsOpen] = useState(false);
	const [message, setMessage] = useState('');
	const [type, setType] = useState<ToastType>(null);

	const showToast = useCallback(
		({ message: initMessage, type: initType = null, time = 5000 }: ToastOptions) => {
			setType(initType);
			setMessage(initMessage);
			setIsOpen(true);

			setTimeout(() => {
				setIsOpen(false);
			}, time);
		},
		[],
	);

	const closeToast = useCallback(() => setIsOpen(false), []);

	const toastFunctions = useMemo(() => ({ showToast, closeToast }), [showToast, closeToast]);

	const toastState = useMemo(() => ({ isOpen, message, type }), [isOpen, message, type]);

	return (
		<ToastFunctionContext.Provider value={toastFunctions}>
			<ToastStateContext.Provider value={toastState}>
				{children}
				<Toast />
			</ToastStateContext.Provider>
		</ToastFunctionContext.Provider>
	);
};
