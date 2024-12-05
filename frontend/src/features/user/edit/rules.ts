import { yup } from 'shared/lib/yup';

const loginRules = yup.string().required().min(3).max(30);

const firstnameRules = yup
	.string()
	.nullable()
	.notRequired()
	.transform((value) => (!value ? undefined : value))
	.min(3)
	.max(30);

const lastnameRules = yup
	.string()
	.nullable()
	.notRequired()
	.transform((value) => (!value ? undefined : value))
	.min(3)
	.max(30);

const passwordRules = yup
	.string()
	.transform((value) => (!value ? undefined : value))
	.when('password', {
		is: (value: string) => value?.length,
		then: (schema) => schema.min(3).max(30),
		otherwise: (schema) => schema.notRequired(),
	});

const passcheckRules = yup
	.string()
	.transform((value) => (!value ? undefined : value))
	.when('password', {
		is: (value: string) => value?.length,
		then: (schema) => schema.required().oneOf([yup.ref('password')]),
		otherwise: (schema) => schema.notRequired(),
	});

export const editUserFormRules = yup.object().shape(
	{
		login: loginRules,
		firstname: firstnameRules,
		lastname: lastnameRules,
		password: passwordRules,
		passcheck: passcheckRules,
	},
	[['password', 'password']],
);
