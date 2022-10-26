import React, { useState } from 'react';
import { AiFillCaretRight, AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { BiComment, BiDotsHorizontalRounded } from 'react-icons/bi';
import { BsCheckCircleFill, BsFlag, BsLink45Deg } from 'react-icons/bs';
import { FaStar } from 'react-icons/fa';
import { RiShareForwardLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import ReadMore from '../../../components/Common/ReadMore';
import { useToggle } from '../../../hooks';
import formatNumberStar from '../../../utils/formatNumberStar';
import formatDate from '../../../utils/formatDate';
import Stars from '../../../components/Common/Stars';
import Images from '../../../components/Layout/Images';
import Comment from '../../comment/pages/Comment';
import CommentInput from '../../comment/components/CommentInput';
import { selectComment } from '../../comment/commentSlice';
import { useAppSelector } from '../../../app/hooks';
interface Props {
  id: string;
  avatar: string;
  displayName: string;
  name: string;
  slug: string;
  avgStar: number;
  date: Date;
  body: string;
  key: number;
  commentsCount: number;
  likesCount: number;
  images: Array<string>;
}
const ReviewItem = ({
  key,
  avatar,
  name,
  id,
  displayName,
  slug,
  avgStar,
  date,
  body,
  images,
  likesCount,
  commentsCount,
}: Props) => {
  const { isToggle, handleToggle } = useToggle();
  const [isViewComments, setIsViewComments] = useState<Boolean>(false);
  const handleViewComments = () => {
    setIsViewComments((prev) => !prev);
  };
  const isCommnent = useAppSelector(selectComment);
  return (
    <div key={key} className="py-[12px] px-4 mb-5 bg-white rounded-[10px] shadow-md">
      <div className="pb-1">
        <div className="relative flex items-center justify-start">
          <div className="bg-[#eee] flex-grow-0 flex-shrink-0 basis-[auto] cursor-pointer w-[46px] h-[46px] rounded-[50%] border-0 overflow-hidden">
            <div className="relative w-full h-full">
              <div className="absolute top-0 left-0 w-full h-full">
                <img src={avatar} alt="avatar" className="object-cover w-full h-full" />
              </div>
            </div>
          </div>
          <div className="mr-[30px] ml-2 grow">
            <Link
              to="/"
              className="link-hover-black inline-flex items-center justify-center text-lg font-semibold mr-[5px] text-black leading-[.4px]"
            >
              {displayName}
              {/* <BsCheckCircleFill className="ml-[5px] text-base inline-block text-[#00cbc6]" /> */}
            </Link>
            <AiFillCaretRight className="inline-block text-xs text-[#cbcbcb] fill-[#cbcbcb]" />
            <Link
              to={`/place/${slug}`}
              className="link-hover-black inline-flex items-center justify-center text-lg font-semibold mr-[5px] text-black leading-[.4px]"
            >
              {name}
            </Link>
            <div className="flex items-center justify-start">
              <span className="flex items-center justify-center">
                <b className="mr-1 text-sm">{formatNumberStar(avgStar)}</b>
                <Stars number={avgStar} />
              </span>
              <span className="inline-block w-1 h-1 rounded-[50%] bg-[#cbcbcb] mx-[6px]"></span>
              <Link to="/">
                <span className="text-[#898c95] text-sm">{formatDate(date)}</span>
              </Link>
            </div>
          </div>
          <button
            onClick={handleToggle}
            className="cursor-pointer relative top-0 right-[4px] bottom-auto left-auto w-[30px] h-[30px] text-center"
          >
            <BiDotsHorizontalRounded className="text-base inline-block leading-[30px] w-[30px] h-[30px] text-[#a5a5a5]" />
            {isToggle && (
              <div className="absolute right-0 top-full bottom-auto left-auto bg-white rounded-md p-[6px] shadow-lg">
                <Link
                  to="/"
                  className="hover:bg-[#f6f6f6] flex items-center justify-start text-base py-[6px] px-3 font-medium whitespace-nowrap rounded"
                >
                  <BsFlag className="inline-block w-[30px] text-xl pr-[10px]"></BsFlag>
                  <span>Báo cáo</span>
                </Link>
                <Link
                  to="/"
                  className="hover:bg-[#f6f6f6] flex items-center justify-start text-base py-[6px] px-3 font-medium whitespace-nowrap rounded"
                >
                  <BsLink45Deg className="inline-block w-[30px] text-xl pr-[10px]"></BsLink45Deg>
                  <span>Sao chép liên kết</span>
                </Link>
              </div>
            )}
          </button>
        </div>
      </div>
      <div className="py-1 px-[2px]">
        <div className="py-[5px] whitespace-pre-line text-base leading-6 break-words">
          {body.length > 100 ? (
            <ReadMore limit={240}>{body}</ReadMore>
          ) : (
            <p className="break-words text-ellipsis">{body}</p>
          )}
        </div>
        <div className="h-[640px] -mb-1">
          <div className="relative flex flex-wrap h-full w-full mt-[14px]">
            <Images images={images} length={images.length}></Images>
          </div>
        </div>
        <div className="mt-[10px] mb-[5px] flex items-center justify-between ">
          <div className="flex items-center justify-center">
            <AiOutlineHeart className="inline-block text-xl text-[#e03] mr-[6px]  " />
            <span className="text-sm cursor-default">{likesCount}</span>
          </div>
          <div>
            <span className="inline-block mr-[6px] text-sm cursor-default">
              {commentsCount} bình luận
            </span>
            <span className="text-sm cursor-default">33 lượt chia sẻ</span>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-around py-1 border-t border-b border-solid border-t-[#eee] border-b-[#eee]">
        <button className="flex items-center justify-center w-full py-1 text-base transition-all cursor-pointer outline-0">
          <AiOutlineHeart className="inline-block mr-[6px] text-xl" />
          <span>Thích</span>
        </button>
        <button className="flex items-center justify-center w-full py-1 text-base transition-all cursor-pointer outline-0">
          <BiComment className="inline-block mr-[6px] text-xl" />
          <span>Bình luận</span>
        </button>
        <button className="flex items-center justify-center w-full py-1 text-base transition-all cursor-pointer outline-0">
          <RiShareForwardLine className="inline-block mr-[6px] text-xl" />
          <span>Chia sẻ</span>
        </button>
      </div>
        <CommentInput
        avatar={avatar}
        reviewId={id}
        />
      {isViewComments ? (
        <>
          <div className="pt-4">
            <Comment reviewId={id} />
          </div>
          <div onClick={handleViewComments} className="pt-4 text-center">
            <p className="text-sm font-semibold cursor-pointer hover:underline">
              Ẩn tất cả bình luận
            </p>
          </div>
        </>
      ) : (
        commentsCount > 0 && (
          <div onClick={handleViewComments} className="text-center pt-[10px]">
            <p className="text-sm font-semibold cursor-pointer hover:underline">
              Xem tất cả {commentsCount} bình luận...
            </p>
          </div>
        )
      )}
    </div>
  );
};

export default ReviewItem;
