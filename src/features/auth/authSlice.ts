import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthState, LoginPayload, RegisterPayload } from './interfaces';
import {User} from '../../models/user'

const initialState: AuthState = {
    isShowAuthForm: false,
    isLoggedIn: false,
    logging: false,
    currentUser: undefined,
    error: undefined
  };
  const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
      showAuthForm(state) {
        state.isShowAuthForm = true;
      },
      hideAuthForm(state) {
        state.isShowAuthForm = false;
      },
      login(state, action: PayloadAction<LoginPayload>) {
        state.logging = true;
      },
      loginSuccess(state, action: PayloadAction<User>) {
        state.isLoggedIn = true;
        state.logging = false;
        state.currentUser = action.payload;
        state.error = undefined;
      },
      loginFailed(state, action: PayloadAction<string>) {
        state.logging = false;
        state.error = action.payload
      },
      register(state, action: PayloadAction<RegisterPayload>) {
        state.logging = true;
      },
      registerSuccess(state, action: PayloadAction<User>) {
        state.isLoggedIn = true;
        state.logging = false;
        state.currentUser = action.payload;
      },
      registerFailed(state, action: PayloadAction<string>) {
        state.logging = false;
      },
      logout(state) {
        state.currentUser = undefined;
        state.isLoggedIn = false;
      }
   },
  });
  
  // Actions
  export const authActions = authSlice.actions;
  
  // Selectors
  export const selectIsShowAuthForm = (state: any) => state.auth.isShowAuthForm;
  export const selectIsLoggedIn = (state: any) => state.auth.isLoggedIn;
  export const selectIslogging = (state: any) => state.auth.logging;
  export const selectCurrentUser = (state: any) => state.auth.currentUser
  export const selectError = (state: any) => state.auth.error;
  
  // Reducer
  const authReducer = authSlice.reducer;
  export default authReducer