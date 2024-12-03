export type ID = string | number;

export interface UserType {
	id: ID;
	login: string;
	lastname?: string;
	firstname?: string;
}

export interface UserResponse {
	readonly error?: string | null;
	readonly user?: UserType | null;
}
