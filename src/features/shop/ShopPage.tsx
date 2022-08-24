import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import './shop.styles.scss';
import { useAppDispatch } from '../../app/store';
import { fetchCategoriesInitial } from '../../app/collection.slice';
import CollectionOverview from '../collection/CollectionOverview';
import Collection from '../collection/Collection';

const ShopPage = () => {
  const appDispatch = useAppDispatch();

  useEffect(() => {
    appDispatch(fetchCategoriesInitial());
  }, [appDispatch]);

  return (
    <Routes>
      <Route index element={<CollectionOverview />} />
      <Route path=':category' element={<Collection />} />
    </Routes>
  );
};

export default ShopPage;
