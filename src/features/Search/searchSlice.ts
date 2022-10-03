import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface searchState {
    isLoading: boolean;
    message?: string;
}
export interface BookmarkPayload { 
    shopId: string;
}
const initialState: searchState = {
    isLoading : false,
    message : undefined
};

const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        bookmark(state, action: PayloadAction<BookmarkPayload>) {
            state.isLoading = true;
        },
        bookmarkSuccess(state, action: PayloadAction) {
            state.isLoading = false;
        },
        bookmarkFailed(state, action: PayloadAction<string>) {
            state.isLoading = false;
            state.message = action.payload
        },
        unBookmark(state, action: PayloadAction<BookmarkPayload>) {
            state.isLoading = true;
        },
        unBookmarkSuccess(state, action: PayloadAction) {
            state.isLoading = false;
        },
        unBookmarkFailed(state, action: PayloadAction<string>) {
            state.isLoading = false;
            state.message = action.payload
        },
    }
})
export const searchActions = searchSlice.actions;

export const selectIsLoading = (state: any) => state.search.isLoading;
export const selectMessages = (state: any) => state.search.messages;
const serachReducer = searchSlice.reducer;

export default serachReducer