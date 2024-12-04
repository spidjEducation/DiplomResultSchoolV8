import { InputHTMLAttributes } from 'react';
import { useFormContext } from 'react-hook-form';
import classes from './styles.module.scss';

interface RadioProps extends InputHTMLAttributes<HTMLInputElement> {
	label?: string;
	name: string;
}

export const Radio = ({ name, value, label, ...rest }: RadioProps) => {
	const { register } = useFormContext();

	return (
		<label className={classes.wrapper}>
			<input className={classes.input} {...register(name)} value={value} type="radio" {...rest} />
			<div className={classes.label}>{label}</div>
		</label>
	);
};
