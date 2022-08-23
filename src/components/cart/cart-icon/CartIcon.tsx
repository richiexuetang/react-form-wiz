import React, { useRef, useEffect } from 'react';
import { ReactComponent as ShoppingIcon } from '../../../assets/shopping-bag.svg';
import './cart-icon.scss';
import { useDispatch, useSelector } from 'react-redux';
import { setIsCartOpen } from '../../../features/cart/cart.slice';
import { RootState } from '../../../app/store';

const CartIcon = () => {
  const dispatch = useDispatch();

  const numCartItems = useSelector((state: RootState) => state.cart.numItems);

  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.addEventListener('click', handleClickInside, false);
    return () => {
      document.removeEventListener('click', handleClickInside, false);
    };
  });

  const handleClickInside = (event: any) => {
    if (wrapperRef.current && wrapperRef.current.contains(event.target)) {
      dispatch(setIsCartOpen(true));
    }
  };

  return (
    <div className='cart-icon' ref={wrapperRef}>
      <ShoppingIcon className='shopping-icon' />
      <span className='item-count'>{numCartItems}</span>
    </div>
  );
};

export default CartIcon;
