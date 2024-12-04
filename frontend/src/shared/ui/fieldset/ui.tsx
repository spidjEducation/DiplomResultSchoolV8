import { FieldsetHTMLAttributes } from 'react';
import classes from './styles.module.scss';

interface FieldsetProps extends FieldsetHTMLAttributes<HTMLFieldSetElement> {
	label: string;
}

export const Fieldset = ({ label, children }: FieldsetProps) => {
	return (
		<fieldset className={classes.fieldset}>
			<legend className={classes.legend}>{label}</legend>
			{children}
		</fieldset>
	);
};
