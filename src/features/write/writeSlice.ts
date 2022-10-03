
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
interface PlacePayload {
    name: string;
    image: string;
    address: string;
    slug: string;   
}
interface WritePayload {
    shopId: string;
  }
interface sliceReview {
    message: string;
    reviews: Array<any>;
    reviewsCount: number;
    avgRate: number 
}
interface writeState {
    isLoading: Boolean;
    isSearch: Boolean;
    message?: String;
    place: {
        name?: String;
        image?: String;
        address?: String;
        slug?: String;
    }
    reviews: sliceReview
}
const initialState: writeState = {
    isLoading : false,
    isSearch : false,
    message : undefined,
    place : {
        name: undefined,
        image: undefined,
        address: undefined,
        slug: undefined,
    },
    reviews : { 
        message: "",
        reviews: [],
        reviewsCount: 0,
        avgRate: 0
    }
};

const writeSlice = createSlice({
    name: 'write',
    initialState,
    reducers: {
        pickedPlace(state, action: PayloadAction<PlacePayload>) {
            state.place = action.payload
        },
        unPickedPlace(state) {
            state.place.address = undefined
            state.place.name= undefined
            state.place.image = undefined
            state.place.slug = undefined
            state.reviews = {
                message: "",
                reviews: [],
                reviewsCount: 0,
                avgRate: 0
            }
        },
        getReview(state, action: PayloadAction<WritePayload> ) {
            state.isLoading = true           
        },  
        getReviewSuccess(state, action: PayloadAction<sliceReview>) {
            state.isLoading = false  
            state.reviews = action.payload        
        },
        getReviewFailed(state, action: PayloadAction<string>) {
            state.isLoading = false  
            state.message = action.payload
        },
        showSearch(state){
            state.isSearch = true
        }, 
        hideSearch(state) {
            state.isSearch = false
        }
    }
})
export const writeActions = writeSlice.actions;

export const selectIsLoading = (state: any) => state.write.isLoading;
export const selectPlace = (state: any) => state.write.place;
export const selectReviews = (state: any) => state.write.reviews;
export const selectIsSearch = (state: any) => state.write.isSearch

const writeReducer = writeSlice.reducer;
export default writeReducer