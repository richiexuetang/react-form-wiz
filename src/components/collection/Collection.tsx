import { useEffect, Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import CollectionItem from './CollectionItem';
import Spinner from '../../components/with-spinner/WithSpinner';
import { CollectionContainer, CollectionTitle } from './index.styles';
import { RootState } from '../../app/store';
import { setCategoryItems } from '../../features/collection/collection.slice';

type CategoryRouteParams = {
  category: string;
};

const Collection = () => {
  const dispatch = useDispatch();

  const { category } = useParams<
    keyof CategoryRouteParams
  >() as CategoryRouteParams;

  const categories: Category[] = useSelector(
    (state: RootState) => state.collection.categories
  );
  const isLoading = useSelector(
    (state: RootState) => state.collection.isFetchingCategory
  );
  const categoryItems: CategoryItem[] = useSelector(
    (state: RootState) => state.collection.categoryItem
  );

  useEffect(() => {
    if (categories && category) {
      dispatch(setCategoryItems({ categories, category }));
    }
  }, [dispatch, categories, category]);

  return (
    <Fragment>
      <CollectionTitle>{category.toUpperCase()}</CollectionTitle>
      {isLoading ? (
        <Spinner />
      ) : (
        <CollectionContainer>
          {categoryItems &&
            categoryItems.map((product) => (
              <CollectionItem key={product.id} product={product} />
            ))}
        </CollectionContainer>
      )}
    </Fragment>
  );
};

export default Collection;
