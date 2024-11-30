export const path = {
	root: '/',
	home() {
		return path.root;
	},
	login() {
		return path.root.concat('login');
	},
	account() {
		return path.root.concat('account');
	},
	operation() {
		return path.root.concat('operation');
	},
	category() {
		return path.root.concat('category');
	},

	logout() {
		return path.root.concat('logout');
	},
};
