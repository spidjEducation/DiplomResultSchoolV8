export type ID = string | number;

export interface UserType {
	id: ID;
	login: string;
	email?: string;
	name?: string;
	surname?: string;
	address?: string;
}

export interface UserResponse {
	readonly error?: string | null;
	readonly user?: UserType | null;
}
