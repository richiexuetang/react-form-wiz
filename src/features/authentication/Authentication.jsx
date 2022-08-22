import React from 'react';
import SignIn from '../../components/authentication/SignIn';
import SignUp from '../../components/authentication/SignUp';
import './sign-in-sign-up.scss';

const Authentication = () => (
  <div className='sign-in-sign-up'>
    <SignIn />
    <SignUp />
  </div>
);

export default Authentication;
