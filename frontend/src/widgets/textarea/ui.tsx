import { TextareaHTMLAttributes } from 'react';
import { useFormContext } from 'react-hook-form';
import classes from './styles.module.scss';

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
	label?: string;
	name: string;
}

export const Textarea = ({ name, label, ...rest }: TextareaProps) => {
	const { register } = useFormContext();


	return (
		<label className={classes.wraper}>
			{label && <span className={classes.label}>{label}</span>}
			<textarea className={classes.input} {...register(name)} {...rest} />
		</label>
	);
};
