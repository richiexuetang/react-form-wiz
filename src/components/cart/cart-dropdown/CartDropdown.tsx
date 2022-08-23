import './cart-dropdown.scss';
import CartItem from '../cart-item/CartItem';
import Button from '../../button/Button';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../app/store';
import { useEffect, useRef } from 'react';
import { setIsCartOpen } from '../../../features/cart/cart.slice';
import { useNavigate } from 'react-router-dom';

const CartDropdown = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const cartItems: CartItem[] = useSelector(
    (state: RootState) => state.cart.cartItems
  );

  //#region Wrapper to detect outside click
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, false);
    return () => {
      document.removeEventListener('click', handleClickOutside, false);
    };
  });

  const handleClickOutside = (event: any) => {
    if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
      dispatch(setIsCartOpen(false));
    }
  };
  //#endregion

  const goToCheckout = () => {
    navigate('/checkout');
  };

  return (
    <div className='cart-dropdown' ref={wrapperRef}>
      <div className='cart-items'>
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <span className='empty-message'>Your cart is empty</span>
        )}
      </div>
      <Button onClick={goToCheckout}>GO TO CHECKOUT</Button>
    </div>
  );
};

export default CartDropdown;
