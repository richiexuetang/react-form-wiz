import React, { useContext } from 'react';
import './header.scss';
import { Outlet, Link } from 'react-router-dom';
import { signOutUser } from '../../utils/firebase.utils';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import CartIcon from '../cart/cart-icon/CartIcon';
// import CartDropdown from '../cart-dropdown/CartDropdown';
import { UserContext } from '../../context/user.context';

const Header = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);

  const signOutHandler = async () => {
    await signOutUser();
    setCurrentUser(null);
  };

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
          <Link className='option' to='/shop'>
            CONTACT
          </Link>
          {currentUser ? (
            <div className='option' onClick={signOutHandler}>
              SIGN OUT
            </div>
          ) : (
            <Link className='option' to='/signin'>
              SIGN IN
            </Link>
          )}
          <CartIcon />
        </div>
        {/* {hidden ? null : <CartDropdown />} */}
      </div>
      <Outlet />
    </React.Fragment>
  );
};

export default Header;
