import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../app/store';
import {
  addCartItem,
  clearCartItem,
  removeCartItem,
} from '../../features/cart/cart.slice';
import './checkout-item.scss';

interface CheckoutItemProps {
  cartItem: CartItem;
}
const CheckoutItem: React.FC<CheckoutItemProps> = ({ cartItem }) => {
  const { name, price, imageUrl, quantity } = cartItem;

  const cartItems = useSelector((state: RootState) => state.cart.cartItems);

  const dispatch = useDispatch();

  return (
    <div className='checkout-item'>
      <div className='image-container'>
        <img src={imageUrl} alt='item' />
      </div>
      <span className='name'>{name}</span>
      <span className='quantity'>
        <div
          className='arrow'
          onClick={() =>
            dispatch(
              removeCartItem({
                cartItems: cartItems,
                cartItemToRemove: cartItem,
              })
            )
          }
        >
          {' '}
          &#10094;
        </div>
        <span className='value'>{quantity}</span>
        <div
          className='arrow'
          onClick={() =>
            dispatch(
              addCartItem({ cartItems: cartItems, productToAdd: cartItem })
            )
          }
        >
          {' '}
          &#10095;
        </div>
      </span>
      <span className='price'>{price}</span>
      <div
        className='remove-button'
        onClick={() =>
          dispatch(
            clearCartItem({ cartItems: cartItems, cartItemToClear: cartItem })
          )
        }
      >
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;
