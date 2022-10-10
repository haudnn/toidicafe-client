import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Response} from '../../interfaces';
interface PlacePayload {
    name: string;
    image: string;
    address: string;
    slug: string;   
    id: string;
}
interface ReviewPayload {
    shopId: string;
}
interface sliceReview {
    message: string;
    reviews: Array<any>;
    reviewsCount: number;
    avgRate: number 
}
interface reviewState {
    isLoading: Boolean;
    isSearch: Boolean;
    message?: String;
    error?: string;
    place: {
        name?: String;
        image?: String;
        address?: String;
        slug?: String;
        id?: string;
    }
    reviews: sliceReview
}
const initialState: reviewState = {
    isLoading : false,
    isSearch : false,
    message :undefined,
    error : undefined,
    place : {
        name: undefined,
        image: undefined,
        address: undefined,
        slug: undefined,
        id: undefined,
    },
    reviews : { 
        message: "",
        reviews: [],
        reviewsCount: 0,
        avgRate: 0
    }
};

const reviewSlice = createSlice({
    name: 'review',
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
            state.place.id = undefined
            state.reviews = {
                message: "",
                reviews: [],
                reviewsCount: 0,
                avgRate: 0
            }
        },
        getReview(state, action: PayloadAction<ReviewPayload> ) {
            state.isLoading = true           
        },  
        getReviewSuccess(state, action: PayloadAction<sliceReview>) {
            state.isLoading = false  
            state.reviews = action.payload        
        },
        getReviewFailed(state, action: PayloadAction<string>) {
            state.isLoading = false  
        },
        showSearch(state){
            state.isSearch = true
        }, 
        hideSearch(state) {
            state.isSearch = false
        },
        createReview(state, action: any) {
            state.isLoading = true
        },
        createReviewSuccess(state, action: PayloadAction<Response>) { 
            state.isLoading = false
            state.message = action.payload.message
        },
        createReviewFailed(state, action: PayloadAction<Response>) {
            state.isLoading = false
            state.error = action.payload.error
        },
        setMessage(state) {
            state.message = undefined;   
        }
     }
 })
export const reviewActions = reviewSlice.actions;

export const selectIsLoading = (state: any) => state.review.isLoading;
export const selectPlace = (state: any) => state.review.place;
export const selectReviews = (state: any) => state.review.reviews;
export const selectIsSearch = (state: any) => state.review.isSearch
export const selectMessage = ( state: any) => state.review.message
export const selectError = ( state: any) => state.review.error

const reviewReducer = reviewSlice.reducer;
export default reviewReducer