import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../app/store';
import './header.scss';
import { Outlet, Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import CartIcon from '../cart/cart-icon/CartIcon';
import { useAppDispatch } from '../../app/store';
import { signOutUserSession } from './user.slice';
import CartDropdown from '../cart/cart-dropdown/CartDropdown';

const Header = () => {
  const authenticated = useSelector(
    (state: RootState) => state.user.hasUserAuth
  );
  const isCartOpen = useSelector((state: RootState) => state.cart.isCartOpen);

  const appDispatch = useAppDispatch();

  return (
    <React.Fragment>
      <div className='header'>
        <Link className='logo-container' to='/'>
          <Logo className='logo'></Logo>
        </Link>
        <div className='options'>
          <Link className='option' to='/shop'>
            SHOP
          </Link>
          {authenticated ? (
            <div
              className='option'
              onClick={() => appDispatch(signOutUserSession())}
            >
              SIGN OUT
            </div>
          ) : (
            <Link className='option' to='/auth'>
              SIGN IN
            </Link>
          )}
          <CartIcon />
        </div>
        {isCartOpen && <CartDropdown />}
      </div>
      <Outlet />
    </React.Fragment>
  );
};

export default Header;
