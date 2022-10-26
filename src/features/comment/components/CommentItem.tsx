import React from 'react';
import { AiOutlineHeart } from 'react-icons/ai';
import { BiDotsHorizontalRounded } from 'react-icons/bi';
import { Link } from 'react-router-dom';

interface Props {
    key: number;
    avatar: string;
    body: string;
    displayName: string;
    likeCount: number;
    userName: string;
}
const CommentItem = ({avatar , body, displayName, likeCount , key , userName} : Props) => {
  return (
    <div className="flex" key={key}>
      <div className="text-center mr-[6px]">
        <div className="shrink-0 grow-0 basis-auto cursor-pointer w-9 h-9 rounded-[50%] overflow-hidden border-0">
          <div className="relative w-full h-full">
            <div className="absolute top-0 left-0 w-full h-full">
              <img
                src={avatar}
                alt=""
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="relative break-words grow">
        <div className="py-2 px-4 rounded-[18px] bg-[#f5f5f7] text-sm">
          <div className="flex items-center justify-start pb-[2px]">
            <Link
              to={`/profile/${displayName}`}
              className="font-semibold tracking-[.4px] mr-[6px] text-black link-hover-black"
            >
             {displayName ? displayName : userName}
            </Link>
            <span className="text-xs text-[#898c95]">1 ngày trước</span>
          </div>
          <div>
            <p>{body}</p>
          </div>
        </div>
        <div className="flex items-center justify-between px-[10px] mt-[6px]">
          <div className="flex items-center">
            <button className="flex items-center text-sm cursor-pointer gap-x-1 dot-after">
              <AiOutlineHeart className="inline-block" />
              <span>{likeCount}</span>
            </button>
            <button className="text-sm cursor-pointer">
              <span>Trả lời</span>
            </button>
          </div>
          <div>
            <button className="cursor-pointer block text-lg mt-[-6px] mr-[2px]">
              <BiDotsHorizontalRounded className="text-sm" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommentItem;
