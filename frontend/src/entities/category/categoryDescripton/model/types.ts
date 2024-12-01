import { CategoryType } from 'shared/api/category';

export interface CategoryDescriptionState {
	category: CategoryType;
	loading: boolean;
	error: string | null;
}
