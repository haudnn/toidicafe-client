
import { all } from 'redux-saga/effects';
import authSaga from '../features/auth/authSaga';
import searchSaga from '../features/search/searchSaga';
import reviewSaga from '../features/review/reviewSaga';
import placeSaga from '../features/place/placeSaga';
export default function* rootSaga() {
  yield all([authSaga(), searchSaga(), reviewSaga(), placeSaga()]);
}