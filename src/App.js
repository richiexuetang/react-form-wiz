import React, { useContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { UserContext } from './context/user.context';
import './App.scss';
import Header from './components/header/Header';
import HomePage from './components/homepage/HomePage';
import Authentication from './features/authentication/Authentication';
import ShopPage from './features/shop/Shop';

const App = () => {
  const { currentUser } = useContext(UserContext);
  return (
    <div>
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
    </div>
  );
};
export default App;
