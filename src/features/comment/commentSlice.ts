import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Response } from '../../interfaces';
interface commentState {
  isLoading: boolean;
  comment: any,
  message?: string,
  comments?: Array<string>,
}; 
const initialState: commentState = {
  isLoading: false,
  comment: undefined,
  message: undefined,
  comments: [],
  
};
interface CommentPayload {
    slug: string;
}
const commentSlice = createSlice({
  name: 'comment',
  initialState,
  reducers: {
    getListComments(state, action) {
      state.isLoading = true;
    },
    getListCommentsSuccess(state, action: PayloadAction<any>) {
      state.isLoading = false;
      state.comments = action.payload;
    },
    updateListComments(state:any, action: PayloadAction<any>){
      state.comments = [...state.comments, action.payload];
    },
    createComment(state, action: any ) {
      state.isLoading = true;
    },
    createCommentSuccess(state, action: PayloadAction<Response>) {
      state.isLoading = false;
      state.comment = action.payload.comment
    },
    createCommentFailed(state, action: PayloadAction<Response>) {
      state.isLoading = false;
      state.message = action.payload.message
    },
  },
});
export const commentActions = commentSlice.actions;

export const selectIsLoading = (state: any) => state.comment.isLoading;
export const selectMessage = (state: any) => state.comment.message;
export const selectComment = (state: any) => state.comment.comment;
export const selectListComments = (state: any) => state.comment.comments

const commentReducer = commentSlice.reducer;
export default commentReducer;
