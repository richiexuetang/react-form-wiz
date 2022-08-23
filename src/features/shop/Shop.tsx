import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import './shop.styles.scss';
import { useAppDispatch } from '../../app/store';
import { fetchCategoriesInitial } from '../collection/collection.slice';
import CollectionOverview from '../../components/collection/CollectionOverview';
import Collection from '../../components/collection/Collection';

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
