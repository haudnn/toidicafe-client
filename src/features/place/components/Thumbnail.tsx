import React from 'react';
import { BsCardImage } from 'react-icons/bs';
import { Link } from 'react-router-dom';

interface Props {
  images: Array<string>;
  handleOpenLighbox: () => void;
  slug: string;
  imagesCount: number;
}

const Thumbnail = ({ images, handleOpenLighbox, slug, imagesCount }: Props) => {
  return (
    <>
      {
        images && (
          <div className="relative flex items-center justify-center mt-4 overflow-hidden bg-white rounded-md">
          <div
            className="bg-place-overlay mr-[5px] h-[355px] shrink grow bg-[#eee] relative cursor-pointer bg-no-repeat bg-cover"
            style={{ backgroundImage: `url(${images[0]})` }}
            onClick={handleOpenLighbox}
          ></div>
          <div
            className="bg-place-overlay mr-[5px] h-[355px] shrink grow bg-[#eee] relative cursor-pointer bg-no-repeat bg-cover"
            style={{ backgroundImage: `url(${images[1]})` }}
            onClick={handleOpenLighbox}
          ></div>
          <div className="flex flex-col items-center justify-center bg-white h-[355px] grow shrink ">
            <div
              style={{ backgroundImage: `url(${images[2]})` }}
              className="mb-[5px] grow-[4] relative w-full bg-[#eee] bg-place-overlay bg-no-repeat bg-cover"
              onClick={handleOpenLighbox}
            ></div>
            <div className="flex items-center justify-center grow-[3] bg-white w-full">
              <div
                className="bg-place-overlay mr-[4px] h-full shrink grow bg-[#eee] relative cursor-pointer bg-no-repeat bg-cover"
                style={{ backgroundImage: `url(${images[3]})` }}
                onClick={handleOpenLighbox}
              ></div>
              <Link
                to={`/place/${slug}/photo`}
                className={`${
                  imagesCount > 5 ? 'nohover' : ''
                } block bg-place-overlay h-full shrink grow bg-[#eee] relative cursor-pointer bg-no-repeat bg-cover`}
                style={{ backgroundImage: `url(${images[4]})` }}
              >
                {imagesCount > 5 ? (
                  <span className="absolute z-10 flex items-center justify-center w-full h-full text-xl font-medium text-white">
                    + {imagesCount - 5} ảnh
                  </span>
                ) : (
                  ''
                )}
              </Link>
            </div>
          </div>
        </div>
        )
      }
      <Link to={`/place/${slug}/photo`}>
        <span className="absolute z-2 top-auto right-auto bottom-5 left-5 cursor-pointer text-base py-1 px-[10px] text-white bg-[rgba(0,0,0,.6)] rounded-[10px] shadow-md transition-all delay-[0.15s]">
          <BsCardImage className="inline-block pr-1 text-xl" /> Xem tất cả ảnh ({imagesCount})
        </span>
      </Link>
    </>
  );
};

export default Thumbnail;
