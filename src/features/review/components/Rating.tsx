import React, { useState } from 'react';
import RatingStar from './RatingStar';
import RatingText from './RatingText';
interface Props {
  setData: any;
  position: number;
}

const Rating = ({ setData }: Props) => {
  const [ratingPosition, setRatingPosition] = useState(0);
  const [ratingSpace, setRatingSpace] = useState(0);
  const [ratingPrice, setRatingPrice] = useState(0);
  const [ratingDrinks, setRatingDrink] = useState(0);
  const [ratingService, setRatingService] = useState(0);

  const handleRatingPosition = (rate: number) => {
    setData((prev: any) => {
      return {
        ...prev,
        star: {
          ...prev.star,
          position: rate,
        },
      };
    });
    setRatingPosition(rate);
  };
  const handleRatingSpace = (rate: number) => {
    setData((prev: any) => {
      return {
        ...prev,
        star: {
          ...prev.star,
          space: rate,
        },
      };
    });
    setRatingSpace(rate)
  };
  const handleRatingDrink = (rate: number) => {
    setData((prev: any) => {
      return {
        ...prev,
        star: {
          ...prev.star,
          drink: rate,
        },
      };
    });
    setRatingDrink(rate)
  };
  const handleRatingService = (rate: number) => {
    setData((prev: any) => {
      return {
        ...prev,
        star: {
          ...prev.star,
          service: rate,
        },
      };
    });
    setRatingService(rate)
  };
  const handleRatingPrice = (rate: number) => {
    setData((prev: any) => {
      return {
        ...prev,
        star: {
          ...prev.star,
          price: rate,
        },
      };
    });
    setRatingPrice(rate)
  };

  return (
    <div className="rating">
      <div className="flex items-center justify-between pr-5 pl-[10px]">
        <span className="flex-1 text-base">Vị trí</span>
        <div className="flex-[2] text-3xl">
          <RatingStar handleRating={handleRatingPosition} rating={ratingPosition} />
        </div>
        <div className="flex-1">
          <div className="relative inline-block text-base font-medium h-8 leading-8 pr-3 pl-[6px] ml-5 mt-1 text-white bg-[#e03] rounded-t">
            <RatingText rating={ratingPosition} />
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between pr-5 pl-[10px]">
        <span className="flex-1 text-base">Không gian</span>
        <div className="flex-[2] text-3xl">
          <RatingStar handleRating={handleRatingSpace} rating={ratingSpace} />
        </div>
        <div className="flex-1">
          <div className="relative inline-block text-base font-medium h-8 leading-8 pr-3 pl-[6px] ml-5 mt-1 text-white bg-[#e03] rounded-t">
            <RatingText rating={ratingSpace} />
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between pr-5 pl-[10px]">
        <span className="flex-1 text-base">Đồ uống</span>
        <div className="flex-[2] text-3xl">
          <RatingStar handleRating={handleRatingDrink} rating={ratingDrinks} />
        </div>
        <div className="flex-1">
          <div className="relative inline-block text-base font-medium h-8 leading-8 pr-3 pl-[6px] ml-5 mt-1 text-white bg-[#e03] rounded-t">
            <RatingText rating={ratingDrinks} />
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between pr-5 pl-[10px]">
        <span className="flex-1 text-base">Phục vụ</span>
        <div className="flex-[2] text-3xl">
          <RatingStar handleRating={handleRatingService} rating={ratingService} />
        </div>
        <div className="flex-1">
          <div className="relative inline-block text-base font-medium h-8 leading-8 pr-3 pl-[6px] ml-5 mt-1 text-white bg-[#e03] rounded-t">
            <RatingText rating={ratingService} />
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between pr-5 pl-[10px]">
        <span className="flex-1 text-base">Giá cả</span>
        <div className="flex-[2] text-3xl">
          <RatingStar handleRating={handleRatingPrice} rating={ratingPrice} />
        </div>
        <div className="flex-1">
          <div className="relative inline-block text-base font-medium h-8 leading-8 pr-3 pl-[6px] ml-5 mt-1 text-white bg-[#e03] rounded-t">
            <RatingText rating={ratingPrice} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rating;
