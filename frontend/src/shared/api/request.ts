import { Methods, QueryData, RequestData } from './types';

interface requestProps {
	url: string;
	method?: Methods;
	data?: RequestData;
	query?: QueryData;
}

export const request = async <T>({
	url,
	method = 'GET',
	data = {},
	query = {},
}: requestProps): Promise<T> => {
	const endpoint = `/api/${url}`;
	const delay = 0;

	const queryString = Object.keys(query).length
		? `?${new URLSearchParams(query as Record<string, string>).toString()}`
		: '';
	const response = await fetch(endpoint + queryString, {
		method,
		body: method !== 'GET' && Object.keys(data).length ? JSON.stringify(data) : undefined,
		headers: {
			'Content-Type': 'application/json',
		},
	});

	if (!response.ok) {
		throw new Error(`HTTP error! Status: ${response.status}`);
	}

	const result = (await response.json()) as T;

	return await new Promise((resolve) => setTimeout(() => resolve(result), delay));
};
