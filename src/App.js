import React, { useContext, Suspense, lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { UserContext } from './context/user.context';
import './App.scss';
import Spinner from './components/with-spinner/WithSpinner';
import { loadedLog } from './utils/log';

const Header = lazy(() => import('./components/header/Header'));
const HomePage = lazy(() => import('./components/homepage/HomePage'));
const Authentication = lazy(() =>
  import('./features/authentication/Authentication')
);
const ShopPage = lazy(() => import('./features/shop/Shop'));

const App = () => {
  loadedLog('App is loaded');
  const { currentUser } = useContext(UserContext);
  return (
    <Suspense fallback={<Spinner />}>
      <Routes>
        <Route path='/' element={<Header />}>
          <Route index element={<HomePage />} />
          <Route path='shop/*' element={<ShopPage />} />
          <Route
            path='auth'
            element={
              currentUser ? <Navigate to='/' replace /> : <Authentication />
            }
          />
        </Route>
      </Routes>
    </Suspense>
  );
};
export default App;
