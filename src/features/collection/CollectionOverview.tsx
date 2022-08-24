import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../app/store';
import CollectionPreview from './CollectionPreview';
import Spinner from '../../components/spinner/Spinner';
import { fetchCategoriesInitial } from '../../app/collection.slice';
import { useAppDispatch } from '../../app/store';

const CollectionOverview = () => {
  const dispatch = useAppDispatch();
  const categoryMap: CategoryMap = useSelector(
    (state: RootState) => state.collection.categoryMap
  );
  const isLoading: boolean = useSelector(
    (state: RootState) => state.collection.isFetchingCategory
  );
  useEffect(() => {
    if (!categoryMap) {
      dispatch(fetchCategoriesInitial());
    }
  }, [dispatch, categoryMap]);

  return (
    <React.Fragment>
      {isLoading ? (
        <Spinner />
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
