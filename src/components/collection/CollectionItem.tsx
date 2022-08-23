import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CartItem, CategoryItem } from '../../@types/global';
import { RootState } from '../../app/store';
import { addCartItem } from '../../features/cart/cart.slice';
import { addItem } from '../../redux/cart/cart.actions';
import CustomButton from '../custom-button/CustomButton';
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

  const addProductToCart = () => {};

  return (
    <CollectionItemContainer>
      <img src={imageUrl} alt={`${name}`} />
      <Footer>
        <Name>{name}</Name>
        <Price>{price}</Price>
      </Footer>
      <button onClick={addProductToCart}>Add to cart</button>
    </CollectionItemContainer>
  );
};

export default CollectionItem;
