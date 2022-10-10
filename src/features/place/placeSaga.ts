
import { PayloadAction } from '@reduxjs/toolkit';
import { call, put, takeLatest } from 'redux-saga/effects';
import shopApi from '../../api/shopApi'
import { placeActions } from './placeSlice';

const { getShopBySlug } = shopApi;
interface ResponseGenerator {
  data?: any;
}
interface PlacePayload {
  slug: string;
}
function* handleGetShop(action: PayloadAction<PlacePayload>) {
  try {
    const response: ResponseGenerator = yield call(getShopBySlug, action.payload);
    yield put(placeActions.getShopSuccess(response.data.shop));
  } catch (err: any) {
    console.log(err) 
    // yield put(placeActions.getShopFailed(err.data.message));
  }
}


export default function* placeSaga() {
  yield takeLatest(placeActions.getShop, handleGetShop);
}
