import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Response} from '../../interfaces';
import { Shop } from '../../models/shop';
interface placeState {
    isLoading: Boolean;
    error?: string;
    shop: any
}
const initialState: placeState = {
    isLoading : false,
    error : undefined,
    shop: undefined
};
interface PlacePayload {
    slug: string;
  }
const placeSlice = createSlice({
    name: 'place',
    initialState,
    reducers: {
        getShop(state, action: PayloadAction<PlacePayload>) {
            state.isLoading = true;
        },
        getShopSuccess(state, action: PayloadAction<Shop>) {
            state.isLoading= false
            state.shop = action.payload
        }, 
        getShopFailed(state, action: PayloadAction<Response>) {
            state.isLoading= false
            state.error = action.payload.error;
        }, 

     }
 })
export const placeActions = placeSlice.actions;

export const selectIsLoading = (state: any) => state.place.isLoading;
export const selectError = ( state: any) => state.place.error
export const selectShop = ( state: any) => state.place.shop

const placeReducer = placeSlice.reducer;
export default placeReducer