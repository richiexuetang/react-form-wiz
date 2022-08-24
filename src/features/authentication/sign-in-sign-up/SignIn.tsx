import React, { useState } from 'react';
import './index.scss';
import FormInput from '../../../components/form-input/FormInput';
import Button, { BUTTON_TYPE_CLASSES } from '../../../components/button/Button';
import { signInWithGooglePopup } from '../../../utils/firebase.utils';
import { useAppDispatch } from '../../../app/store';
import { signInWithEmailPassword } from '../../../app/user.slice';
import { useNavigate } from 'react-router-dom';
import { error } from '../../../utils/log';

const initialFormFields = {
  email: '',
  password: '',
};

const SignIn = () => {
  const [formFields, setFormFields] =
    useState<FormInputFields>(initialFormFields);
  const { email, password } = formFields;

  const navigate = useNavigate();

  const appDispatch = useAppDispatch();

  const signInWithGoogle = async () => {
    try {
      await signInWithGooglePopup();
    } catch (err) {
      // swallow error
      error('error in signInWithGoogle', err);
    } finally {
      navigate('/shop');
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      appDispatch(signInWithEmailPassword(formFields));

      setFormFields(initialFormFields);
    } catch (err) {
      error('error occured in submitting forms -CartDropdown', err);
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className='sign-in'>
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          name='email'
          type='email'
          onChange={handleChange}
          value={email}
          label='Email'
          required
        />

        <FormInput
          name='password'
          type='password'
          value={password}
          onChange={handleChange}
          label='Password'
          required
        />

        <div className='buttons'>
          <Button type='submit'> Sign in </Button>
          <Button
            buttonType={BUTTON_TYPE_CLASSES.inverted}
            onClick={signInWithGoogle}
          >
            {' '}
            Sign in with Google{' '}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
