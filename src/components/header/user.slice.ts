import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword,
  signOutUser,
} from '../../utils/firebase.utils';

interface UserState {
  currentUser: UserData | null;
  isLoading: boolean;
  hasUserAuth: boolean;
  error: Error | null;
}

const initialState: UserState = {
  currentUser: null,
  isLoading: false,
  hasUserAuth: false,
  error: null,
};

export const signInWithEmailPassword = createAsyncThunk(
  'user/signInWithEmailPassword',
  async (input: FormInputFields) => {
    const userCredentials = await signInAuthUserWithEmailAndPassword(
      input.email,
      input.password
    );
    const email = userCredentials?.user.email;
    const displayName = userCredentials?.user.displayName;
    const createdDate = new Date();

    let userData = {} as UserData;
    if (email && displayName) {
      userData = {
        createdDate: createdDate,
        displayName: displayName,
        email: email,
      };
    }

    return userData;
  }
);

export const createUserWithEmailPassword = createAsyncThunk(
  'user/createUserWithEmailPassword',
  async (input: FormInputFields) => {
    const userCredentials = await createAuthUserWithEmailAndPassword(
      input.email,
      input.password
    );

    if (userCredentials) {
      await createUserDocumentFromAuth(userCredentials?.user, {});
    }
  }
);

export const signOutUserSession = createAsyncThunk(
  'user/signOutUser',
  async () => {
    await signOutUser();
  }
);

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setCurrentUser(state, { payload: newUser }: PayloadAction<UserData>) {
      state.currentUser = newUser;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signInWithEmailPassword.fulfilled, (state, action) => {
        state.hasUserAuth = true;
        state.currentUser = action.payload;
      })
      .addCase(signOutUserSession.fulfilled, (state) => {
        state.hasUserAuth = false;
        state.currentUser = null;
      });
  },
});

export const { setCurrentUser } = userSlice.actions;

export default userSlice.reducer;
