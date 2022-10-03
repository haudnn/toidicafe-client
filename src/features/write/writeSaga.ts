
import { PayloadAction } from '@reduxjs/toolkit';
import { call, put,  takeLatest } from 'redux-saga/effects';
import reviewApi from '../../api/reviewApi';
import {  writeActions } from './writeSlice';
const { getReviewsByShopId } = reviewApi ;
interface ResponseGenerator {
    data?: any;
}
interface WritePayload {
    shopId?: string;
  }
function* handleGetReviews (action: PayloadAction<WritePayload> ) {
    try {
        const response: ResponseGenerator = yield call(getReviewsByShopId, action.payload );
        yield put(writeActions.getReviewSuccess(response.data));
    }
    catch(err:any) {
        yield put(writeActions.getReviewFailed(err.data.message));
    }
}


export default function* writeSaga() {
    yield takeLatest(writeActions.getReview ,handleGetReviews)
}
