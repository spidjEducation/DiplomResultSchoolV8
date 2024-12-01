import { AccountType } from 'shared/api/account';

export interface AccountDescriptionState {
	readonly account: AccountType;
	readonly loading: boolean;
	readonly error: string | null;
}
