
import { all } from 'redux-saga/effects';
import authSaga from '../features/auth/authSaga';
import searchSaga from '../features/search/searchSaga';
import writeSaga from '../features/write/writeSaga';
export default function* rootSaga() {
  yield all([authSaga(), searchSaga(), writeSaga()]);
}