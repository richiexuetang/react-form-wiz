import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import './App.scss';
import HomePage from './components/homepage/HomePage';
// import ShopPage from './pages/shop/shop';
// import SignInAndSignUp from './pages/sign-in-sign-up/SignInAndSignUp';
// import CheckoutPage from './pages/checkout/checkout';
import Header from './components/header/Header';
import {
  auth,
  createUserProfileDocument,
  addCollectionAndDocuments,
} from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user.actions';

import { selectCurrentUser } from './redux/user/user.selectors';
import { selectCollectionsForPreview } from './redux/shop/shop.selectors';

const App = () => {
  return (
    <React.Fragment>
      <Header />
      <Routes>
        <Route exact path='/' component={HomePage} />
      </Routes>
    </React.Fragment>
  );
};
export default App;

// class App extends React.Component {
//   unsubscribeFromAuth = null;

//   componentDidMount() {
//     const { setCurrentUser, collectionsArray } = this.props;

//     this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
//       if (userAuth) {
//         const userRef = await createUserProfileDocument(userAuth);

//         userRef.onSnapshot((snapShot) => {
//           setCurrentUser({
//             id: snapShot.id,
//             ...snapShot.data(),
//           });
//         });
//       }
//       setCurrentUser(userAuth);
//       addCollectionAndDocuments(
//         'collections',
//         collectionsArray.map(({ title, items }) => ({ title, items }))
//       );
//     });
//   }

//   componentWillUnmount() {
//     this.unsubscribeFromAuth();
//   }

//   render() {
//     return (
//       <div>
//         <Header />
//         <Routes>
//           <Route exact path='/' component={HomePage} />
//           <Route path='/shop' component={ShopPage} />
//           <Route exact path='/checkout' component={CheckoutPage} />
//           <Route
//             exact
//             path='/signin'
//             render={() =>
//               this.props.currentUser ? <Navigate to='/' /> : <SignInAndSignUp />
//             }
//           />
//         </Routes>
//       </div>
//     );
//   }
// }

// const mapStateToProps = createStructuredSelector({
//   currentUser: selectCurrentUser,
//   collectionsArray: selectCollectionsForPreview,
// });

// const mapDispatchToProps = (dispatch) => ({
//   setCurrentUser: (user) => dispatch(setCurrentUser(user)),
// });

// //export default connect(mapStateToProps, mapDispatchToProps)(App);
// export default App;
