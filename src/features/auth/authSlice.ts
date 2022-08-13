import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface AuthState {
    isShowAuthForm: boolean;
}
const initialState: AuthState = {
    isShowAuthForm: false,
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
   },
  });
  
  // Actions
  export const authActions = authSlice.actions;
  
  // Selectors
  export const selectIsShowAuthForm = (state: any) => state.auth.isShowAuthForm;

  
  // Reducer
  const authReducer = authSlice.reducer;
  export default authReducer