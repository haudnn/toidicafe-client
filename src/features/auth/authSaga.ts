import { PayloadAction } from '@reduxjs/toolkit';
// import { push } from 'connected-react-router';
import { call, fork, put, take, takeLatest } from 'redux-saga/effects';
import { authActions } from './authSlice';
import { LoginPayload, RegisterPayload } from './interfaces'
import authApi from '../../api/authApi';
import Cookies from 'js-cookie'
import { REFRESH_TOKEN, ACCESS_TOKEN } from '../../constants';
export interface ResponseGenerator{
    data?:any,
}
function* handleRegister(action: any) {
  try {
    console.log(action);
    const response:ResponseGenerator = yield call(authApi.register, action.payload)
    // localStorage.setItem(ACCESS_TOKEN, response.data.user.token)
    // Cookies.set(REFRESH_TOKEN, response.data.user.rftoken)
    yield put(authActions.registerSuccess(response.data.user))
  } catch (error:any) {
    // yield put(authActions.logout());
    yield put(authActions.registerFailed(error));
  }
}

function* handleLogin(payload: LoginPayload) {
  try {
    const response:ResponseGenerator = yield call(authApi.login, payload)
    localStorage.setItem(ACCESS_TOKEN, response.data.user.token)
    Cookies.set(REFRESH_TOKEN, response.data.user.rftoken)
    yield put(authActions.loginSuccess(response.data.user))
  } catch (error:any) {
    yield put(authActions.logout());
    yield put(authActions.loginFailed(error));
  }
}
function* handleLogout() {
  try{
    localStorage.removeItem(ACCESS_TOKEN)
    Cookies.remove(REFRESH_TOKEN)
    yield put(authActions.logout());
  }
  catch(error:any){
    console.log(error);
  }
}
function* watchLoginFlow() {
  while (true) {
    const isLoggedIn = Boolean(localStorage.getItem(ACCESS_TOKEN));
    if (!isLoggedIn) {
      const action: PayloadAction<LoginPayload> = yield take(authActions.login.type);
      yield fork(handleLogin, action.payload);
    }
    yield take(authActions.logout.type);
    yield call(handleLogout);
  }
}
export default function* authSaga() {
  yield fork(watchLoginFlow);
  yield takeLatest(authActions.register.type, handleRegister);
}