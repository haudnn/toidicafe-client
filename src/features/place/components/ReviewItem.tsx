import React, { useState } from 'react';
import { BiDotsHorizontalRounded } from 'react-icons/bi';
import { BsCheckCircleFill } from 'react-icons/bs';
import { FaEdit, FaRegHeart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import ReadMore from '../../../components/Common/ReadMore';
import useFormatDate from '../../../hooks/useFormatDate';
import LightBox from '../../../components/Common/LightBox';
import formatNumberStar from '../../../utils/formatNumberStar';
interface Props {
  avatar: string;
  userName: string;
  displayName: string;
  avgStar: number;
  title: string;
  body: string;
  shopName: string;
  images: Array<string>;
  date: Date;
  index: number;
}
const ReviewItem = ({
  avatar,
  userName,
  displayName,
  avgStar,
  title,
  body,
  images,
  date,
  index,
  shopName,
}: Props) => {
  const dateFormat = useFormatDate(date);
  const [isOpen, setIsOpen] = useState<Boolean>(false);
  const handleOpenLighbox = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <div key={index} className="flex pb-1 mb-5">
      {isOpen && (
        <LightBox
          images={images}
          length={images.length}
          name={`${shopName} - Toidicafe.vn`}
          handleOpenLighbox={handleOpenLighbox}
        />
      )}
      <div className="mr-5 text-center">
        <Link to="/">
          <div className="overflow-hidden border-0 rounded-[50%] w-[64px] h-[64px] cursor-pointer">
            <div className="relative w-full h-full">
              <div className="absolute top-0 left-0 w-full h-full">
                <img src={avatar} alt="Nghiện Cafe" className="object-cover w-full h-ful" />
              </div>
            </div>
          </div>
        </Link>
        <div className="cursor-default leading-[1.2] mt-2 pb-[2px] text-[#aeaeae] border border-solid border-[#aeaeae] rounded">
          <p className="flex items-center justify-center text-xs">
            <FaEdit className="inline-block" />
            <span className="inline-block ml-[2px]">27</span>
          </p>
        </div>
      </div>
      <div className="relative grow container-reviewer">
        <div className="rounded-[10px] py-[5px] px-[15px] bg-[#f5f5f7]">
          <div className="flex items-center justify-between py-1 border-b border-solid border-[#e0e0e0]">
            <div className="flex justify-start item-start">
              <div>
                <Link
                  to="/"
                  className="flex items-center justify-start text-lg font-semibold mr-[5px] text-black"
                >
                  {displayName}
                  <BsCheckCircleFill className="mx-[5px] text-base inline-block text-[#00cbc6]" />
                </Link>
                <Link
                  to="/"
                  className="flex item-center justify-start text-lg font-semibold mr-[5px] text-black "
                >
                  <span className="text-xs text-[#898c95] font-normal">
                    Đã đánh giá {dateFormat}
                  </span>
                </Link>
              </div>
            </div>
            <div className="flex flex-col items-end justify-center">
              <span className="w-8 h-8 text-xs leading-8 overflow-hidden text-center text-white bg-[#e03] rounded-[50%]">
                <b>{formatNumberStar(avgStar)}</b>
              </span>
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
            <div className="flex items-center justify-start w-full whitespace-nowrap overflow-x-auto overflow-y-hidden relative pb-[5px] mt-[6px]">
              {images.slice(0,2).map((image, index) => (
                <div
                  onClick={handleOpenLighbox}
                  key={index}
                  className="relative w-[116px] h-[116px] cursor-pointer overflow-hidden mr-2 rounded-md bg-place-overlay "
                >
                  <div className="relative w-full h-full ">
                    <div className="absolute top-0 left-0 w-full h-full">
                      <img src={image} alt="" className="object-cover w-full h-full rounded" />
                    </div>
                  </div>
                </div>
              ))}
              {images.length > 2 && (
                <div  onClick={handleOpenLighbox} className="after:opacity-100 relative w-[116px] h-[116px] cursor-pointer overflow-hidden mr-2 rounded-md bg-place-overlay">
                  <div className="relative w-full h-full ">
                    <div className="absolute top-0 left-0 w-full h-full">
                      <img
                        src={images[2]}
                        alt=""
                        className="object-cover w-full h-full rounded"
                      />
                    </div>
                  </div>
                  <span className=" absolute text-white text-base font-medium z-50 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                    {' '}
                    +{images.length - 2} ảnh
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between px-[10px] mt-[6px]">
          <div className="flex items-center">
            <button className="flex items-center text-sm cursor-pointer gap-x-1 dot-after">
              <FaRegHeart className="inline-block" />
              <span>1 thích</span>
            </button>
            <button className="text-sm cursor-pointer">
              <span>Trả lời</span>
            </button>
          </div>
          <div>
            <button className="cursor-pointer block text-lg mt-[-6px] mr-[2px]">
              <BiDotsHorizontalRounded className="text-2xl" />
            </button>
          </div>
        </div>
        <div className="mt-4 pl-[10px] border-l border-solid border-[#f1f1f1] ">
          {/* reply comments */}
          <div className="flex pb-1 mb-5">
            <div className="mr-5 text-center">
              <Link to="/">
                <div className="w-[49px] h-[49px] rounded-[50%] overflow-hidden border-none">
                  <div className="relative w-full h-full">
                    <div className="absolute top-0 left-0 w-full h-full cursor-pointer">
                      <img
                        src="https://toidicafe.vn/static/images/2022/06/05/5023c036-af96-4709-9d41-7419d7995d3e-278116263_1530173187377565_476.jpeg"
                        alt=""
                        className="object-cover w-full h-full"
                      />
                    </div>
                  </div>
                </div>
              </Link>
            </div>
            <div className="relative grow container-reply">
              <div className="py-[5px] px-[15px] rounded-lg bg-[#f5f5f7]">
                <div className="flex items-center justify-between py-1 border-b border-solid border-[#e0e0e0]">
                  <Link
                    to="/"
                    className="inline-block text-lg font-medium text-black hover:decoration-solid hover:decoration-black hover:underline"
                  >
                    Vân Thảo
                  </Link>
                  <span className="text-xs font-normal text-[#898c95]">2 tháng trước</span>
                </div>
                <div className="py-1 px-[2px]">
                  <div className="py-[5px] whitespace-pre-line text-base leading-6 break-words">
                    <ReadMore limit={240}>
                      Hi vọng mọi người chưa quên quán cafe cổ kính, nên thơ giữa lòng phố cổ này.
                      Đúng như tên gọi Ban Công, quán cafe đầy thơ mộng như mùa thu Hà Nội. Nhân dịp
                      tháng mới, cùng dịp nghỉ lễ 2/9 trời chớm sang thu mình post ảnh cũ mình đến
                      quán từ hồi mới mở 🤣🤣🤣
                    </ReadMore>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between px-[10px] mt-[6px]">
                <div className="flex items-center">
                  <button className="flex items-center text-sm cursor-pointer gap-x-1 dot-after">
                    <FaRegHeart className="inline-block" />
                    <span>1 thích</span>
                  </button>
                  <button className="text-sm cursor-pointer">
                    <span>Trả lời</span>
                  </button>
                </div>
                <div>
                  <button className="cursor-pointer block text-lg mt-[-6px] mr-[2px]">
                    <BiDotsHorizontalRounded className="text-2xl" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewItem;
