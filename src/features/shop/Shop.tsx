import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { RootState } from '../../app/store';
import { useSelector } from 'react-redux';
import './shop.styles.scss';
import { useAppDispatch } from '../../app/store';
import { fetchCategoriesInitial } from '../collection/collection.slice';
import CollectionOverview from '../../components/collection/CollectionOverview';
import Collection from '../../components/collection/Collection';
import { loadedLog, log } from '../../utils/log';

const ShopPage = () => {
  loadedLog('ShopPage is loaded');
  const appDispatch = useAppDispatch();

  const isFetchingCategories: boolean = useSelector(
    (state: RootState) => state.collection.isFetchingCategory
  );
  const categories: Category[] = useSelector(
    (state: RootState) => state.collection.categories
  );

  useEffect(() => {
    appDispatch(fetchCategoriesInitial());
  }, [appDispatch]);

  log(
    'isFetchingCategories in Shop',
    isFetchingCategories,
    'categories in Shop',
    categories
  );

  return (
    <Routes>
      <Route index element={<CollectionOverview />} />
      <Route path=':category' element={<Collection />} />
    </Routes>
  );
};

export default ShopPage;
