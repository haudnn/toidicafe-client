import React, { useState, useRef, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { getUser } from '../../../utils/localStorage';
import { commentActions, selectListComments, selectComment } from '../commentSlice';

import CommentItem from './CommentItem';
interface Props {
  reviewId: string;
  avatar: string;
}
const CommentInput = ({ reviewId, avatar }: Props) => {
  const [body, setBody] = useState<string>('');
  const dispatch = useAppDispatch();
  const isCommnent = useAppSelector(selectComment);
  const comments = useAppSelector(selectListComments);
  console.log(comments)
  const handleChangeBody = (e: any) => {
    setBody(e.target.value);
  };
  const keyDownHandler = (event: any) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      handleSubmit();
    }
  };
  const handleSubmit = async () => {
    const { userId } = getUser();
    dispatch(commentActions.createComment({ reviewId, body, author: userId }));
    setBody("")
  };
  return (
    <>
      <form className="flex pt-[10px] px-[6px] pb-[2px]">
        <div style={{ backgroundImage: `url(${avatar})` }} className="avt-comment-bg"></div>
        <div className="relative w-full">
          <textarea
            value={body}
            onKeyDown={keyDownHandler}
            onChange={handleChangeBody}
            className="pt-[6px] h-[38px] min-h-[38px] max-h-[110px] resize-none text-ellipsis w-full outline-0 ml-[6px] px-3 rounded-[18px] bg-[#f5f5f7] border border-solid border-transparent"
            placeholder="Viết bình luận..."
          ></textarea>
        </div>
      </form>
      {/* {
        isCommnent && (
          
        )
      } */}
    </>
  );
};

export default CommentInput;
