import React from 'react';
import { AiFillCaretRight, AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { BiComment, BiDotsHorizontalRounded } from 'react-icons/bi';
import { BsCheckCircleFill, BsFlag, BsLink45Deg } from 'react-icons/bs';
import { FaStar } from 'react-icons/fa';
import { RiShareForwardLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import ReadMore from '../../../components/Common/ReadMore';
import { useToggle } from '../../../hooks';
import defaultavt from '../../../assets/img/default-avt.jpg';
import formatNumberStar from '../../../utils/formatNumberStar';
import formatDate from '../../../utils/formatDate';
import Stars from '../../../components/Common/Stars';

interface Props {
  avatar: string;
  displayName: string;
  name: string;
  slug: string;
  avgStar: number;
  date: Date;
  body: string;
  key: number
}
const ReviewItem = ({ key ,avatar, name, displayName, slug, avgStar, date, body }: Props) => {
  const { isToggle, handleToggle } = useToggle();
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
                <Stars number = {avgStar}/>
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
            <div className="gridphoto-images relative cursor-pointer border-b border-r border-solid border-r-[#fff] border-l-[#fff]">
              <div className="relative w-full h-full">
                <div className="absolute top-0 left-0 w-full h-full">
                  <img
                    src="https://toidicafe.vn/static/images/2022/06/18/882c305a-33e2-4af4-8bd7-92d1d7d9742c-287237482_1327099074480871_208.jpeg?w=640"
                    alt=""
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            </div>
            <div className="gridphoto-images relative cursor-pointer border-b border-r border-solid border-r-[#fff] border-l-[#fff]">
              <div className="relative w-full h-full">
                <div className="absolute top-0 left-0 w-full h-full">
                  <img
                    src="https://toidicafe.vn/static/images/2022/06/18/882c305a-33e2-4af4-8bd7-92d1d7d9742c-287237482_1327099074480871_208.jpeg?w=640"
                    alt=""
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            </div>
            <div className="gridphoto-images relative cursor-pointer border-b border-r border-solid border-r-[#fff] border-l-[#fff]">
              <div className="relative w-full h-full">
                <div className="absolute top-0 left-0 w-full h-full">
                  <img
                    src="https://toidicafe.vn/static/images/2022/06/18/882c305a-33e2-4af4-8bd7-92d1d7d9742c-287237482_1327099074480871_208.jpeg?w=640"
                    alt=""
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            </div>
            <div className="gridphoto-images relative cursor-pointer border-b border-r border-solid border-r-[#fff] border-l-[#fff]">
              <div className="relative w-full h-full">
                <div className="absolute top-0 left-0 w-full h-full">
                  <img
                    src="https://toidicafe.vn/static/images/2022/06/18/882c305a-33e2-4af4-8bd7-92d1d7d9742c-287237482_1327099074480871_208.jpeg?w=640"
                    alt=""
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            </div>
            <div className="gridphoto-images bg-overlay relative cursor-pointer border-b border-r border-solid border-r-[#fff] border-l-[#fff]">
              <div className="relative w-full h-full">
                <div className="absolute top-0 left-0 w-full h-full">
                  <img
                    src="https://toidicafe.vn/static/images/2022/06/18/882c305a-33e2-4af4-8bd7-92d1d7d9742c-287237482_1327099074480871_208.jpeg?w=640"
                    alt=""
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
              <span className="absolute text-4xl font-medium text-white z-[1] top-1/2 left-1/2 -translate-y-[50%] -translate-x-[50%]">
                +7
              </span>
            </div>
          </div>
        </div>
        <div className="mt-[10px] mb-[5px] flex items-center justify-between ">
          <div className="flex items-center justify-center">
            <AiFillHeart className="inline-block text-xl text-[#e03] mr-[6px]  " />
            <span className="text-sm cursor-default">494</span>
          </div>
          <div>
            <span className="inline-block mr-[6px] text-sm cursor-default">62 bình luận</span>
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
      <div className="flex pt-[10px] px-[6px] pb-[2px]">
        <div style={{ backgroundImage: `url(${defaultavt})` }} className="avt-comment-bg"></div>
        <div className="relative w-full">
          <textarea
            className="pt-[6px] h-[38px] min-h-[38px] max-h-[110px] resize-none text-ellipsis w-full outline-0 ml-[6px] px-3 rounded-[18px] bg-[#f5f5f7] border border-solid border-transparent"
            placeholder="Viết bình luận..."
          ></textarea>
        </div>
      </div>
      <div className="pt-4">
        <div className="flex">
          <div className="text-center mr-[6px]">
            <div className="shrink-0 grow-0 basis-auto cursor-pointer w-9 h-9 rounded-[50%] overflow-hidden border-0">
              <div className="relative w-full h-full">
                <div className="absolute top-0 left-0 w-full h-full">
                  <img
                    src="https://toidicafe.vn/static/images/2022/06/05/5023c036-af96-4709-9d41-7419d7995d3e-278116263_1530173187377565_476.jpeg"
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
                  to="/"
                  className="font-semibold tracking-[.4px] mr-[6px] text-black link-hover-black"
                >
                  Vân Thảo
                </Link>
                <span className="text-xs text-[#898c95]">1 ngày trước</span>
              </div>
              <div>
                <p>Lại sắp có ảnh đăng 🥰🥰</p>
              </div>
            </div>
            <div className="flex items-center justify-between px-[10px] mt-[6px]">
              <div className="flex items-center">
                <button className="flex items-center text-sm cursor-pointer gap-x-1 dot-after">
                  <AiOutlineHeart className="inline-block" />
                  <span>1 thích</span>
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
      </div>
    </div>
  );
};

export default ReviewItem;
