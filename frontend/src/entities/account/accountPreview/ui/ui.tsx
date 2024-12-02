import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { AccountType } from 'shared/api/account';
import { path } from 'shared/lib/router';
import { Icons } from 'shared/types';
import { Block } from 'shared/ui/block';
import { Icon } from 'shared/ui/icon';
import classes from './styles.module.scss';


interface AccountViewProps {
	account: AccountType;
	deleteSlot: ReactNode;
}

export const AccountView = ({ account, deleteSlot }: AccountViewProps) => {
	return (
		<Block className={classes.view}>
			<h4>Счет №{account.id}</h4>
			<dl>
				<div>
					<dt>Дата:</dt>
					<dd>{account.createdAt ? account.createdAt : ''}</dd>
				</div>
				<div>
					<dt>Название:</dt>
					<dd>{account.name}</dd>
				</div>
				<div>
					<dt>Сумма:</dt>
					<dd>{account.amount}</dd>
				</div>
				<div>
					<dt>Комментарий:</dt>
					<dd>{account.comment}</dd>
				</div>
			</dl>
			<div className={classes.actions}>
				<Link className={classes.edit_link} to={path.account.edit(account.id)}>
					<Icon className={classes.edit_icon} name={Icons.edit} />
				</Link>
				{deleteSlot}
			</div>
		</Block>
	);
};
