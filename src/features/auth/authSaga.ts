import { PayloadAction } from '@reduxjs/toolkit';
// import { push } from 'connected-react-router';
import { call, fork, put, take } from 'redux-saga/effects';
import { authActions } from './authSlice';
import { LoginPayload, RegisterPayload } from './interfaces';
import authApi from '../../api/authApi';
import Cookies from 'js-cookie';
import { REFRESH_TOKEN, ACCESS_TOKEN, USER } from '../../constants';
import { setUser, setToken, removeUser, removeToken } from '../../utils/localStorage';
import History from '../../utils/history';
export interface ResponseGenerator {
  data?: any;
  displayName: string;
  avatar: string;
  email: string;
  userName: string;
}
function* handleRegister(payload : RegisterPayload) {
  try {
    const response: ResponseGenerator = yield call(authApi.register, payload);
    const { displayName, avatar, userName } = response.data.user;
    setToken(response.data.user.token);
    setUser({ displayName, avatar });
    Cookies.set(REFRESH_TOKEN, response.data.user.rftoken);
    yield put(authActions.registerSuccess(response.data.user));
    yield put(authActions.hideAuthForm());
    History.push(`/profile/${userName}`);
  } catch (error: any) {
    yield put(authActions.registerFailed(error));
  }
}

function* handleLogin(payload: LoginPayload) {
  try {
    const response: ResponseGenerator = yield call(authApi.login, payload);
    const { displayName, avatar } = response.data.user;
    setToken(response.data.user.token);
    setUser({ displayName, avatar });
    Cookies.set(REFRESH_TOKEN, response.data.user.rftoken);
    yield put(authActions.loginSuccess(response.data.user));
    yield put(authActions.hideAuthForm());
  } catch (error: any) {
    console.log(error);
    yield put(authActions.loginFailed(error.response.message));
  }
}
function* handleLogout() {
  try {
    yield removeUser();
    yield removeToken();
    yield Cookies.remove(REFRESH_TOKEN);
    yield put(authActions.logout());
  } catch (error: any) {
    console.log(error);
  }
}
function* watchLoginFlow() {
  while (true) {
    const isLoggedIn = Boolean(localStorage.getItem(ACCESS_TOKEN));
    const user = Boolean(localStorage.getItem(USER));
    if (!isLoggedIn && !user) {
      const action: PayloadAction<LoginPayload> = yield take(authActions.login.type);
      yield fork(handleLogin, action.payload);
    }

    yield take([authActions.logout.type, authActions.loginFailed]);
    yield call(handleLogout);
  }
}
export default function* authSaga() {
  yield fork(watchLoginFlow);
  const action: PayloadAction<RegisterPayload> = yield take(authActions.register.type);
  yield fork(handleRegister, action.payload);
}
