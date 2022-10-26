import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { useFetch } from '../../../hooks';
import { selectListComments, commentActions } from '../commentSlice';
import CommentItem from '../components/CommentItem'
interface Props {
    reviewId: string;
}
const Comment = ({reviewId} : Props) => {
  const dispatch = useAppDispatch();
  const comments  = useAppSelector(selectListComments);
  useEffect(() => {
    dispatch(commentActions.getListComments(reviewId))
  }, [dispatch, reviewId, comments])
  return (
    <>
        {
          comments && comments.map((comment:any, index:number) => (
                <CommentItem
                key={index}
                avatar={comment.author.avatar}
                userName={comment.author.userName}
                body={comment.body}
                displayName={comment.author.displayName}
                likeCount={comment.likes.length}
                /> 
          ))
        }    
  </>
  )
}

export default Comment