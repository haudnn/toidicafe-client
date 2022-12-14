
import { all } from 'redux-saga/effects';
import authSaga from '../features/auth/authSaga';
import searchSaga from '../features/search/searchSaga';
import reviewSaga from '../features/review/reviewSaga';
import placeSaga from '../features/place/placeSaga';
import commentSaga from '../features/comment/commentSaga';
export default function* rootSaga() {
  yield all([authSaga(), searchSaga(), reviewSaga(), placeSaga(), commentSaga()]);
}