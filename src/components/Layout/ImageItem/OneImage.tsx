import React, { useState } from 'react';
import LightBox from '../../Common/LightBox';
interface Props {
  images: Array<string>;
}
const OneImage = ({ images }: Props) => {
  const [isOpen, setIsOpen] = useState<Boolean>(false);
  const handleOpenLighbox = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <div className="relative w-full h-full cursor-pointer">
      {isOpen && (
        <LightBox
          images={images}
          length={images.length}
          handleOpenLighbox={handleOpenLighbox}
        />
      )}
      <div className="absolute top-0 left-0 w-full h-full">
        <img
          src={images[0]}
          alt=""
          className="object-cover w-full h-full"
          onClick={handleOpenLighbox}
        />
      </div>
    </div>
  );
};

export default OneImage;
