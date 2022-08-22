import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import CollectionsOverview from '../../components/collection/CollectionOverview';
import CollectionPage from '../collection/CollectionPage';

// import {
//   firestore,
//   convertCollectionsSnapshotToMap,
// } from '../../firebase/firebase.utils';
import { updateCollections } from '../../redux/shop/shop.actions';

import WithSpinner from '../../components/with-spinner/WithSpinner';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

const ShopPage = () => {
  const [loading, setLoading] = useState(true);
  return (
    <div className='shop-page'>
      <Routes>
        <Route
          index
          element={<CollectionsOverviewWithSpinner isLoading={loading} />}
        />
        {/* <Route
          path=':category'
          element={<CollectionPageWithSpinner isLoading={loading} />}
        /> */}
      </Routes>
    </div>
  );
};

// class ShopPage extends React.Component {
//   state = {
//     loading: true,
//   };

//   unsubscribeFromSnapshot = null;

//   componentDidMount() {
//     const { updateCollections } = this.props;
//     const collectionRef = firestore.collection('collections');

//     collectionRef.get().then((snapshot) => {
//       const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
//       updateCollections(collectionsMap);
//       this.setState({ loading: false });
//     });
//   }
//   render() {
//     const { match } = this.props;
//     const { loading } = this.state;
//     return (
//       <div className='shop-page'>
//         <Route
//           exact
//           path={`${match.path}`}
//           render={(props) => (
//             <CollectionsOverviewWithSpinner isLoading={loading} {...props} />
//           )}
//         />
//         <Route
//           path={`${match.path}/:collectionId`}
//           render={(props) => (
//             <CollectionPageWithSpinner isLoading={loading} {...props} />
//           )}
//         />
//       </div>
//     );
//   }
// }

export default ShopPage;
