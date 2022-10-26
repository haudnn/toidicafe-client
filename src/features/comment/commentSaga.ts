import { PayloadAction } from '@reduxjs/toolkit';
import { call, put, takeLatest } from 'redux-saga/effects';
import commentApi from '../../api/commentApi';
import { commentActions } from './commentSlice';

const { createComment, getCommentsByReviewId } = commentApi;
interface ResponseGenerator {
  data?: any;
}
function* handleCreateReview(action: PayloadAction) {
  try {
    const response: ResponseGenerator =  yield call(createComment, action.payload);
    yield put(commentActions.createCommentSuccess(response.data));
    yield put(commentActions.getListCommentsSuccess(response.data.comment));
  } catch (err: any) {
    yield put(commentActions.createCommentFailed(err.data.message));
  }
}
function* handleGetListComments(action: PayloadAction) {
  try {
    const response: ResponseGenerator =  yield call(getCommentsByReviewId, action.payload);
    yield put(commentActions.getListCommentsSuccess(response.data.comments));
  } catch (err: any) {
    console.log(err.data)
    // yield put(commentActions.createCommentFailed(err.data.message));
  }
}
export default function* commentSaga() {
  yield takeLatest(commentActions.createComment, handleCreateReview);
  yield takeLatest(commentActions.getListComments,  handleGetListComments)
}
