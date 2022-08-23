import React from 'react';
import SignIn from '../../components/authentication/SignIn';
import SignUp from '../../components/authentication/SignUp';
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
