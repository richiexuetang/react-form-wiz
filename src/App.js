import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.scss';
import Spinner from './components/with-spinner/WithSpinner';
import { loadedLog } from './utils/log';

const Header = lazy(() => import('./features/header/Header'));
const HomePage = lazy(() => import('./features/homepage/HomePage'));
const Authentication = lazy(() =>
  import('./features/authentication/Authentication')
);
const ShopPage = lazy(() => import('./features/shop/ShopPage'));
const CheckoutPage = lazy(() => import('./features/checkout/Checkout'));

const App = () => {
  loadedLog('-App has loaded');

  return (
    <Suspense fallback={<Spinner />}>
      <Routes>
        <Route path='/' element={<Header />}>
          <Route index element={<HomePage />} />
          <Route path='shop/*' element={<ShopPage />} />
          <Route path='auth' element={<Authentication />} />
          <Route path='checkout' element={<CheckoutPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
};
export default App;
