import React from 'react';

import SignIn from '../../components/sign-in/SignIn';
import SignUp from '../../components/sign-up/SignUp';

import './sign-in-sign-up.scss';

const Authentication = () => (
  <div className='sign-in-sign-up'>
    <SignIn />
    <SignUp />
  </div>
);

export default Authentication;
