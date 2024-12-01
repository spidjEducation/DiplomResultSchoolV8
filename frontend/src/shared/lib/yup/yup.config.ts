import * as yup from 'yup';

yup.setLocale({
	string: {
		min: 'Минимум ${min} символов',
		max: 'Максимум ${max} символов',
	},
	mixed: {
		default: 'Недопустимое значение',
		required: 'Это поле обязательно для заполнения',
		oneOf: 'Пароли не совпадают',
	},
});

export { yup };
