import { ID } from 'shared/types';

export enum CategoryType {
	expense = 1,
	income = 2,
}

export const CATEGORY_TYPES = [
	{ id: 1, name: 'Расход' },
	{ id: 2, name: 'Доход' },
];

export const getCategoryTypeName = (id: ID) => CATEGORY_TYPES.find((type) => type.id === id)?.name;

export const getCategoryType = (id: ID) => CATEGORY_TYPES.find((type) => type.id === id);
