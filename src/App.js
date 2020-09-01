import React from 'react';
import './App.scss';
import {Switch, Route} from 'react-router-dom';

import HomePage from './components/homepage/homepage';
import ShopPage from './components/pages/shop/shop';
import Header from './components/header/header';

function App() {
  return (
    <div>
    <Header />
    <Switch>
      <Route exact path='/' component={HomePage}/>
      <Route exact path='/shop' component={ShopPage}/>
    </Switch>
    </div>
  );
}

export default App;
