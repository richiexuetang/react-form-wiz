import React from 'react';
import SignIn from './sign-in-sign-up/SignIn';
import SignUp from './sign-in-sign-up/SignUp';
import { AuthenticationContainer } from './index.styles';

const Authentication = () => {
  return (
    <AuthenticationContainer>
      <SignIn />
      <SignUp />
    </AuthenticationContainer>
  );
};

export default Authentication;
