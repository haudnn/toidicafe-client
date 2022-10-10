import React from 'react'
import { AiFillStar } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import ReadMore from '../../../components/Common/ReadMore'
import useFormatDate from '../../../hooks/useFormatDate';
interface Review {
  anonymous: Boolean;
  author : any;
  avgStar: number;
  body: string;
  date: Date;
  title: string;
  _id: string;
}
const ReviewItem = ({anonymous, author, avgStar, body, title, date, _id} : Review) => {
  const {avatar, displayName  } = author
  const dateFormat = useFormatDate(date)
  return (
    <div className="mb-6">
      <div className="flex items-center justify-between pb-1">
        <div className="flex items-center justify-start">
          <div className="flex-grow-0 flex-shrink-0 basis-auto cursor-pointer w-10 h-10 rounded-[50%] overflow-hidden">
              <div className="relative w-full h-full">
                <div className="absolute top-0 left-0 w-full h-full">
                  <img src={avatar} alt=""  className="object-cover w-full h-full"/>
                </div>
              </div>
          </div>
          <div className="ml-[10px]">
            <div>
              <Link to="/" className="inline-flex items-center justify-center text-base font-semibold mr-[5px] text-black">
                {displayName}
              </Link>
            </div>
            <div className="text-sm text-[#898c95]">
              <span>{dateFormat}</span>
            </div>
          </div>
        </div>
        <div> 
          <AiFillStar className="inline-block text-xl text-[#e03] mr-1"></AiFillStar>
          <b>{avgStar}</b>
          {" "} /5 điểm
        </div>
      </div>
      <div className="whitespace-pre-line text-base leading-[24px] break-words p-[2px]">
        <ReadMore
          children={`${body}`}
          limit={220}
        />
      </div>
    </div>
  )
}

export default ReviewItem