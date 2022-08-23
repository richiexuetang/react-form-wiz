import { useState, useEffect, Fragment } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import CollectionItem from './CollectionItem';
import Spinner from '../../components/with-spinner/WithSpinner';
import { CollectionContainer, CollectionTitle } from './index.styles';
import { CategoryMap, Category, CategoryItem } from '../../@types/global';
import { RootState } from '../../app/store';
import { loadedLog, log } from '../../utils/log';

type CategoryRouteParams = {
  category: string;
};

const Collection = () => {
  loadedLog('-Collection is loaded!');
  const { category } = useParams<
    keyof CategoryRouteParams
  >() as CategoryRouteParams;

  const categories: Category[] = useSelector(
    (state: RootState) => state.collection.categories
  );
  const isLoading = useSelector(
    (state: RootState) => state.collection.isFetchingCategory
  );
  log('category route param in Collection: ', category);
  log('categories in Collection is ', categories);
  const [categoryMap, setCategoryMap] = useState<CategoryMap | any>();

  useEffect(() => {
    const getCategoriesMap = (currCategories: Category[]): CategoryMap =>
      currCategories.reduce((acc, c) => {
        const { title, items } = c;
        acc[title.toLowerCase()] = items;
        return acc;
      }, {} as CategoryMap);

    log('getCategoriesMap', getCategoriesMap(categories));
    setCategoryMap(getCategoriesMap(categories));
    //}
  }, [categories]);

  log('categoryMap in Collection is:', categoryMap);

  const [products, setProducts] = useState<CategoryItem[]>(
    categoryMap[category]
  );

  return (
    <Fragment>
      <CollectionTitle>{category.toUpperCase()}</CollectionTitle>
      {isLoading ? (
        <Spinner />
      ) : (
        <CollectionContainer>
          {products &&
            products.map((product) => (
              <CollectionItem key={product.id} product={product} />
            ))}
        </CollectionContainer>
      )}
    </Fragment>
  );
};

export default Collection;
