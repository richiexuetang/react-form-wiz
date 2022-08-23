import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { RootState } from '../../app/store';
import { useDispatch, useSelector } from 'react-redux';
import './shop.styles.scss';
import { getCategoriesAndDocuments } from '../../firebase/firebase.utils';
import { Category } from '../../@types/global';
import {
  fetchCategoriesSuccess,
  setFetchingCategories,
} from '../collection/collection.slice';
import CollectionOverview from '../../components/collection/CollectionOverview';
import Collection from '../../components/collection/Collection';
import { loadedLog, log } from '../../utils/log';

const ShopPage = () => {
  loadedLog('ShopPage is loaded');
  const dispatch = useDispatch();

  const isFetchingCategories: boolean = useSelector(
    (state: RootState) => state.collection.isFetchingCategory
  );
  const categories: Category[] = useSelector(
    (state: RootState) => state.collection.categories
  );

  useEffect(() => {
    const fetchCategoriesAndDocuments = async () => {
      const categoriesAndDocuments: Category[] =
        await getCategoriesAndDocuments();

      dispatch(fetchCategoriesSuccess(categoriesAndDocuments));
      dispatch(setFetchingCategories(true));
      console.log('categoriesAndDocuments in Shop', categoriesAndDocuments);
    };

    fetchCategoriesAndDocuments().catch(console.error);
  }, [dispatch, isFetchingCategories, categories]);

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
