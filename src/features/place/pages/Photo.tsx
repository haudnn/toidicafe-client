import React from 'react';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { useParams, Link } from 'react-router-dom';
import { useFetch, useToggle } from '../../../hooks';
import LightBox from '../components/LightBox';
import SkeletonPhoto from '../components/SkeletonPhoto';
const Photo = () => {
  const { slug } = useParams();
  const { isLoading, response } = useFetch({
    method: 'GET',
    url: `shops/${slug}/photo`,
  });
  const { isToggle, handleToggle } = useToggle();
  return (
    <div className="place-photos">
        {
            isToggle && (
                <LightBox
                images={response?.shop.images}
                length={response?.shop.images.length}
                name={response?.shop.name}
                handleOpenLighbox={handleToggle}
                />
            )
        }
      <div className="py-[15px]">
        <div className="grid wide">
          <div className="p-3 bg-white rounded-lg shadow-xl">
            <div className="flex pb-5">
              <div className="flex items-center justify-center cursor-pointer">
                <AiOutlineArrowLeft className="inline-block text-lg text-black"></AiOutlineArrowLeft>
                <Link to={`/place/${slug}`} className="ml-1 text-lg font-medium text-black">Trở về</Link>
              </div>
              <div className="flex-1 text-center">
                <p className="text-2xl font-semibold">{response?.shop.name}</p>
                <p className="text-base font-medium">{response?.shop.address.specific}</p>
              </div>
            </div>
            <div className="row sm-gutter">
              {isLoading ? (
                 Array.from({ length: 8 }).map((_,) => (<SkeletonPhoto />))
              ) : (
                response?.shop.images.map((image: string) => (
                  <div className="col l-3">
                    <div className="pb-[10px] cursor-pointer">
                      <img
                        src={image}
                        alt=""
                        className="w-full h-[285px] object-cover rounded-lg"
                        onClick={handleToggle}
                      />
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Photo;
