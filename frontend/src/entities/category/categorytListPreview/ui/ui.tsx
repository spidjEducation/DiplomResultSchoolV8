import { Link, useLocation } from 'react-router-dom';
import { CategoryType } from 'shared/api/category';
import { getCategoryTypeName } from 'shared/lib/category';
import { path } from 'shared/lib/router';
import claases from './styles.module.scss';

interface CategoryItemPropts {
    category: CategoryType;
}


export const CategoryItem = ({ category }: CategoryItemPropts) => {
    const location = useLocation();

    return (
        <div className={claases.category}>
            <Link className={claases.main} to={path.category.id(category.id)} state={{ from: location }}>
                <div className={claases.info}>
                    <span className={claases.name}>{category.name}</span>
                    <span className={claases.type}>{getCategoryTypeName(category.type)}</span>
                </div>
            </Link>
        </div>
    );
};
