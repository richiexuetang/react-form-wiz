import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './index.scss';
import { RootState } from '../../app/store';
import CollectionPreview from './CollectionPreview';
import WithSpinner from '../with-spinner/WithSpinner';
import { setFetchingCategories } from '../../features/collection/collection.slice';
import { loadedLog, log } from '../../utils/log';

const CollectionOverview = () => {
  loadedLog('CollectionOverview is loaded');
  const dispatch = useDispatch();

  const categories: Category[] = useSelector(
    (state: RootState) => state.collection.categories
  );
  // const isLoading = useSelector(
  //   (state: RootState) => state.collection.isFetchingCategory
  // );

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
      //dispatch(setFetchingCategories(true));
    }
  }, [isLoading, categories]);
  log('categoryMap in CollectionOverview', categoryMap);

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
