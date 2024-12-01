export type ToastType = 'success' | 'error' | 'warning' | null;

export interface ToastOptions {
	readonly message: string;
	readonly type?: ToastType;
	readonly time?: number;
}

export interface ToastState {
	isOpen: boolean;
	message: string;
	type: ToastType;
}

export interface ToastFunctions {
	showToast: (options: ToastOptions) => void;
	closeToast: () => void;
}
