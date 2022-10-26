import React, { useState } from 'react';
import LightBox from '../../Common/LightBox';
interface Props {
    images: Array<string>;
}
const BiggerImages = ({images}: Props) => {
  const [isOpen, setIsOpen] = useState<Boolean>(false);
  const handleOpenLighbox = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <>
       {isOpen && (
        <LightBox
          images={images}
          length={images.length}
          handleOpenLighbox={handleOpenLighbox}
        />)}
      <div className="gridphoto-images relative cursor-pointer border-b border-r border-solid border-r-[#fff] border-l-[#fff]">
        <div className="relative w-full h-full">
          <div className="absolute top-0 left-0 w-full h-full">
            <img
              src={images[0]}
              alt=""
              className="object-cover w-full h-full"
              onClick={handleOpenLighbox}
            />
          </div>
        </div>
      </div>
      <div className="gridphoto-images relative cursor-pointer border-b border-r border-solid border-r-[#fff] border-l-[#fff]">
        <div className="relative w-full h-full">
          <div className="absolute top-0 left-0 w-full h-full">
            <img
              src={images[1]}
              alt=""
              className="object-cover w-full h-full"
              onClick={handleOpenLighbox}
            />
          </div>
        </div>
      </div>
      <div className="gridphoto-images relative cursor-pointer border-b border-r border-solid border-r-[#fff] border-l-[#fff]">
        <div className="relative w-full h-full">
          <div className="absolute top-0 left-0 w-full h-full">
            <img
              src={images[2]}
              alt=""
              className="object-cover w-full h-full"
              onClick={handleOpenLighbox}
            />
          </div>
        </div>
      </div>
      <div className="gridphoto-images relative cursor-pointer border-b border-r border-solid border-r-[#fff] border-l-[#fff]">
        <div className="relative w-full h-full">
          <div className="absolute top-0 left-0 w-full h-full">
            <img
              src={images[3]}
              alt=""
              className="object-cover w-full h-full"
              onClick={handleOpenLighbox}
            />
          </div>
        </div>
      </div>
      <div className="gridphoto-images bg-overlay relative cursor-pointer border-b border-r border-solid border-r-[#fff] border-l-[#fff]">
        <div className="relative w-full h-full">
          <div className="absolute top-0 left-0 w-full h-full">
            <img
              src={images[4]}
              alt=""
              className="object-cover w-full h-full"
              onClick={handleOpenLighbox}
            />
          </div>
        </div>
        <span className="absolute text-4xl font-medium text-white z-[1] top-1/2 left-1/2 -translate-y-[50%] -translate-x-[50%]">
          +{images.length - 5}
        </span>
      </div>
    </>
  );
};

export default BiggerImages;
