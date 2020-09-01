import React from 'react';
import './App.scss';
import {Switch, Route} from 'react-router-dom';

import HomePage from './components/homepage/homepage';
import ShopPage from './pages/shop/shop';
import Header from './components/header/header';
import SignInAndSignUp from './pages/sign-in-sign-up/sign-in-sign-up';

import { auth } from './firebase/firebase.utils';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    auth.onAuthStateChanged(user => {
      this.setState({currentUser : user});
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
      <Header currentUser={this.state.currentUser}/>
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route exact path='/shop' component={ShopPage}/>
        <Route exact path='/signin' component={SignInAndSignUp} />
      </Switch>
      </div>
    );
  }
}

export default App;
