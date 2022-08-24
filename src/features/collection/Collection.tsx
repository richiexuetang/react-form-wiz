import { useEffect, Fragment, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import CollectionItem from './CollectionItem';
import Spinner from '../../components/spinner/Spinner';
import { CollectionContainer, CollectionTitle } from './index.styles';
import { RootState } from '../../app/store';
import { setFetchingCategories } from '../../app/collection.slice';

type CategoryRouteParams = {
  category: string;
};

const Collection = () => {
  const dispatch = useDispatch();

  const { category } = useParams<
    keyof CategoryRouteParams
  >() as CategoryRouteParams;

  const isLoading = useSelector(
    (state: RootState) => state.collection.isFetchingCategory
  );
  const categoryMap = useSelector(
    (state: RootState) => state.collection.categoryMap
  );

  const [products, setProducts] = useState<CategoryItem[]>([]);

  useEffect(() => {
    if (category && categoryMap) {
      setProducts(categoryMap[category]);
      dispatch(setFetchingCategories(false));
    }
  }, [dispatch, category, categoryMap]);

  return (
    <Fragment>
      <CollectionTitle>{category.toUpperCase()}</CollectionTitle>
      {isLoading ? (
        <Spinner />
      ) : (
        <CollectionContainer>
          {products &&
            products.map((product) => (
              <CollectionItem key={product.id} product={product} />
            ))}
        </CollectionContainer>
      )}
    </Fragment>
  );
};

export default Collection;
