import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../app/store';
import CollectionPreview from './CollectionPreview';
import WithSpinner from '../../components/spinner/Spinner';

const CollectionOverview = () => {
  const categories: Category[] = useSelector(
    (state: RootState) => state.collection.categories
  );

  const [categoryMap, setCategoryMap] = useState<CategoryMap | any>();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const getCategoriesMap = (currCategories: Category[]): CategoryMap =>
      currCategories.reduce((acc, category) => {
        const { title, items } = category;
        acc[title.toLowerCase()] = items;
        return acc;
      }, {} as CategoryMap);

    if (isLoading && categories) {
      setCategoryMap(getCategoriesMap(categories));
      setIsLoading(false);
    }
  }, [isLoading, categories]);

  return (
    <React.Fragment>
      {isLoading ? (
        <WithSpinner />
      ) : (
        Object.keys(categoryMap).map((title) => {
          const products = categoryMap[title];
          return (
            <CollectionPreview key={title} title={title} products={products} />
          );
        })
      )}
    </React.Fragment>
  );
};

export default CollectionOverview;
