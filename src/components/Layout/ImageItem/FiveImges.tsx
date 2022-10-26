import React, { useState } from 'react';
import LightBox from '../../Common/LightBox';
interface Props { 
    images : Array<string>;
}
const FiveImges = ({images} : Props) => {
  const [isOpen, setIsOpen] = useState<Boolean>(false);
  const handleOpenLighbox = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <div className="relative flex flex-wrap w-full h-full">
         {isOpen && (
        <LightBox
          images={images}
          length={images.length}
          handleOpenLighbox={handleOpenLighbox}
        />)}
      <div className="w-[50%] h-[60%] overflow-hidden cursor-pointer relative bg-[#eee] border-r border-solid border-r-[#fff] border-b border-b-[#fff]">
        <div className="relative w-full h-full">
          <div className="absolute top-0 left-0 w-full h-full">
            <img src={images[0]} alt="" className="object-cover w-full h-full" onClick={handleOpenLighbox} />
          </div>
        </div>
      </div>
      <div className="w-[50%] h-[60%] overflow-hidden cursor-pointer relative bg-[#eee] border-b border-solid border-b-[#fff]">
        <div className="relative w-full h-full">
          <div className="absolute top-0 left-0 w-full h-full">
            <img src={images[1]} alt="" className="object-cover w-full h-full" onClick={handleOpenLighbox} />
          </div>
        </div>
      </div>
      <div className="w-1/3 h-[40%] overflow-hidden cursor-pointer relative bg-[#eee] border-r border-solid border-r-[#fff]">
        <div className="relative w-full h-full">
          <div className="absolute top-0 left-0 w-full h-full">
            <img src={images[2]} alt="" className="object-cover w-full h-full" onClick={handleOpenLighbox} />
          </div>
        </div>
      </div>
      <div className="w-1/3 h-[40%] overflow-hidden cursor-pointer relative bg-[#eee] border-r border-solid border-r-[#fff]">
        <div className="relative w-full h-full">
          <div className="absolute top-0 left-0 w-full h-full">
            <img src={images[4]} alt="" className="object-cover w-full h-full" onClick={handleOpenLighbox}/>
          </div>
        </div>
      </div>
      <div className="w-1/3 h-[40%] overflow-hidden cursor-pointer relative bg-[#eee]">
        <div className="relative w-full h-full">
          <div className="absolute top-0 left-0 w-full h-full">
            <img src={images[5]} alt="" className="object-cover w-full h-full" onClick={handleOpenLighbox} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FiveImges;
