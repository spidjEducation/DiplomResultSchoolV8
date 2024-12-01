export type RequestData = Record<string, string | number | boolean>;

export type Methods = 'GET' | 'POST' | 'UPDATE' | 'PATCH' | 'PUT' | 'DELETE';

export type QueryData = Record<string, string | number | boolean>;

export interface PagingData<T> {
	items: T[];
	total: number;
	page: number;
	limit: number;
	totalPages: number;
}
