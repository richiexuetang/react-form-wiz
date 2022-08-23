import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../app/store';
import { addCartItem } from '../../app/cart.slice';
import Button, { BUTTON_TYPE_CLASSES } from '../button/Button';
import { CollectionItemContainer, Footer, Name, Price } from './index.styles';

interface CollectionItemProps {
  product: CategoryItem;
}

const CollectionItem: React.FC<CollectionItemProps> = ({ product }) => {
  const { name, price, imageUrl } = product;
  const dispatch = useDispatch();

  const cartItems: CartItem[] = useSelector(
    (state: RootState) => state.cart.cartItems
  );

  const payload = {
    cartItems: cartItems,
    productToAdd: { ...product, quantity: 0 },
  };

  const addProductToCart = () => {
    dispatch(addCartItem(payload));
  };

  return (
    <CollectionItemContainer>
      <img src={imageUrl} alt={`${name}`} />
      <Footer>
        <Name>{name}</Name>
        <Price>{price}</Price>
      </Footer>
      <Button
        buttonType={BUTTON_TYPE_CLASSES.inverted}
        onClick={addProductToCart}
      >
        Add to cart
      </Button>
    </CollectionItemContainer>
  );
};

export default CollectionItem;
