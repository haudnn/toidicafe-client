import { Action, combineReducers, configureStore, ThunkAction } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './rootSaga';
import authReducer from '../features/auth/authSlice';
import searchReducer from '../features/search/searchSlice';
import reviewReducer from '../features/review/reviewSlice';
import placeReducer from '../features/place/placeSlice';
import commentReducer from '../features/comment/commentSlice';
const rootReducer = combineReducers({
  auth: authReducer,
  search: searchReducer,
  review: reviewReducer,
  place: placeReducer,
  comment: commentReducer
});

const sagaMiddleware = createSagaMiddleware();
export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

