import { ButtonHTMLAttributes } from 'react';
import { useFormContext, UseFormReturn } from 'react-hook-form';
import { RequestData } from 'shared/api';
import { Button as ButtonComponent } from '../button';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	label?: string;
	isReset?: boolean;
	isTrigger?: boolean;
	loading?: boolean;
}

export const Button = ({
	className = '',
	type = 'button',
	children,
	label,
	isReset = false,
	isTrigger = false,
	loading,
	...rest
}: ButtonProps) => {

	const { reset, handleSubmit, onSubmit } = useFormContext() as UseFormReturn & {
		onSubmit: (submittedData: RequestData) => void;
	};

	const clickHandler = () => {
		if (isReset) reset();

		if (isTrigger) handleSubmit(() => onSubmit({}))();
	};

	return (
		<ButtonComponent className={className} type={type} loading={loading} onClick={clickHandler} {...rest}>
			{label || children}
		</ButtonComponent>
	);
};
