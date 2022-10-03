
import { PayloadAction } from '@reduxjs/toolkit';
import { call, fork, put, take, takeLatest } from 'redux-saga/effects';
import shopApi from '../../api/shopApi';
import { BookmarkPayload, searchActions } from './searchSlice';
const { bookmarkShop, unBookmarkShop } = shopApi;
interface ResponseGenerator {
    data?: any;
}
function* handleBookmarkShop (action: PayloadAction<BookmarkPayload> ) {
    try {
        yield call(bookmarkShop, action.payload );
        yield put(searchActions.bookmarkSuccess());
    }
    catch(err:any) {
        yield put(searchActions.bookmarkFailed(err.data.message));
    }
}
function* handleUnBookmarkShop (action: PayloadAction<BookmarkPayload> ) {
    try {
        yield call(unBookmarkShop, action.payload );
        yield put(searchActions.unBookmarkSuccess);
    }
    catch(err:any) {
        yield put(searchActions.unBookmarkFailed(err.data.message));
    }
}


export default function* searchSaga() {
    yield takeLatest(searchActions.bookmark ,handleBookmarkShop)
    yield takeLatest(searchActions.unBookmark ,handleUnBookmarkShop)
}
