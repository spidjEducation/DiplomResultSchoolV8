import { InputHTMLAttributes } from 'react';
import { useFormContext } from 'react-hook-form';
import classes from './styles.module.scss';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	label?: string;
	name: string;
}

export const Input = ({ name, label, type = 'text', ...rest }: InputProps) => {
	const {
		register,
		formState: { errors },
	} = useFormContext();

	return (
		<label className={classes.wraper}>
			{label && <span className={classes.label}>{label}</span>}
			<input className={classes.input} {...register(name)} type={type} {...rest} />
			{!!errors[name] && <p className={classes.error}>{String(errors[name]?.message)}</p>}
		</label>
	);
};
