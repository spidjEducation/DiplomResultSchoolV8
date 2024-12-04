import { format } from "date-fns";
import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { CategoryType } from "shared/api/category";
import { DATETIME_FORMAT } from 'shared/constant';
import { getCategoryTypeName } from "shared/lib/category";
import { path } from "shared/lib/router";
import { Icons } from "shared/types";
import { Block } from "shared/ui/block";
import { Icon } from "shared/ui/icon";
import classes from './styles.module.scss';

interface CategoryViewPropts {
    category: CategoryType;
    deleteSlot: ReactNode;
}

export const CategoryView = ({ category, deleteSlot }: CategoryViewPropts) => {
    return (
        <Block className={classes.view}>
            <h4>Категория № {category.id}</h4>
            <dl>
                <div>
                    <dt>Дата:</dt>
                    <dd>{category.createdAt ? format(category.createdAt, DATETIME_FORMAT) : ''}</dd>
                </div>
                <div>
                    <dt>Название:</dt>
                    <dd>{category.name}</dd>
                </div>
                <div>
                    <dt>Тип:</dt>
                    <dd>{getCategoryTypeName(category.type)}</dd>
                </div>
            </dl>
            <div className={classes.actions}>
                <Link className={classes.edit_link} to={path.category.edit(category.id)}>
                    <Icon className={classes.edit_icon} name={Icons.edit} />
                </Link>
                {deleteSlot}
            </div>
        </Block>
    );
};
