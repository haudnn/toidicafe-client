import { PayloadAction } from '@reduxjs/toolkit';
import { call, put, takeLatest } from 'redux-saga/effects';
import reviewApi from '../../api/reviewApi';
import { reviewActions } from './reviewSlice';
// import { ReviewPayLoad } from '../../interfaces';

const { getReviewsByShopId, createReview } = reviewApi;
interface ResponseGenerator {
  data?: any;
}
interface ReviewPayload {
  shopId?: string;
}
function* handleGetReviews(action: PayloadAction<ReviewPayload>) {
  try {
    const response: ResponseGenerator = yield call(getReviewsByShopId, action.payload);
    yield put(reviewActions.getReviewSuccess(response.data));
  } catch (err: any) {
    yield put(reviewActions.getReviewFailed(err.data.message));
  }
}

function* handleCreateReview(action: PayloadAction) {
  try {

    const response: ResponseGenerator = yield call(createReview, action.payload);
    console.log(response.data);
    yield put(reviewActions.createReviewSuccess(response.data)); 
  } catch (err: any) {
    yield put(reviewActions.getReviewFailed(err.data.message));
  }
}

export default function* reviewSaga() {
  yield takeLatest(reviewActions.getReview, handleGetReviews);
  yield takeLatest(reviewActions.createReview, handleCreateReview);
}
