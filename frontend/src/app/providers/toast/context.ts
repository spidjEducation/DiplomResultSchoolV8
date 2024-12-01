import { createContext } from 'react';
import { ToastFunctions, ToastState } from './types';

export const ToastFunctionContext = createContext<ToastFunctions | null>(null);

export const ToastStateContext = createContext<ToastState | null>(null);
