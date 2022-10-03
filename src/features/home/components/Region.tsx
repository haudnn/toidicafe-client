import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { Link } from 'react-router-dom';
import { useSlider, useFetch } from '../../../hooks';
const Region = () => {
  const { isLoading, response } = useFetch({
    url: 'regions',
    method: 'GET',
  });
  const sliderRef = useSlider("regions");
  return (
    <section className="pt-10 home-section">
      <div className="pb-10">
        <p className="relative text-3xl font-semibold text-center tilte-before">Khu vực gần đây</p>
      </div>
      <div className="relative ml-[10px] mr-[10px]">
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          <div ref={sliderRef} className="keen-slider">
            {response?.regions.map((region, index) => (
              <div key={index} className="keen-slider__slide">
                <Link to={`search?regions=${region.slug}`} className="touch-manipulation img-hover">
                  <div className="relative block mx-3 overflow-hidden bg-white rounded-lg shadow cursor-pointer">
                    <div className="scale-img w-full bg-[#eee] rounded-lg shadow overflow-hidden h-[330px] bg-img-slider-container">
                      <div className="relative w-full h-full overflow-hidden ">
                        <div className="absolute top-0 left-0 w-full h-full">
                          <img
                            src={region.thumbnail}
                            alt={region.name}
                            className="object-cover w-full h-full rounded-lg bg-img-slider"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="absolute bottom-0 left-0 top-auto right-auto w-full h-auto px-5 py-4 text-left text-white rounded-lg bg-img-location">
                      <h3 className="text-2xl font-bold text-white ">{region.name}</h3>
                      <span className="text-base font-normal">
                        {region.count} {''} quán cafe
                      </span>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        )}
        <div className="flex items-center left-[-10px] justify-center absolute top-[50%] translate-y-[-50%] cursor-pointer w-10 h-10 text-center rounded-[50%] bg-white shadow-lg z-1">
          <IoIosArrowBack className="w-7 h-7 text-[#2b2b2b]"></IoIosArrowBack>
        </div>
        <div className="flex items-center right-[-10px] justify-center absolute top-[50%] translate-y-[-50%] cursor-pointer w-10 h-10 text-center rounded-[50%] bg-white shadow-lg z-1">
          <IoIosArrowForward className="w-7 h-7 text-[#2b2b2b]"></IoIosArrowForward>
        </div>
      </div>
      <div className="flex items-center justify-center pt-7">
        <button className="cursor-pointer border-none w-[10px] h-[10px] bg-[#e03] rounded-[50%] p-[5px] mx-[5px]"></button>
        <button className="cursor-pointer border-none w-[10px] h-[10px] bg-[#dfdfdf] rounded-[50%] p-[5px] mx-[5px]"></button>
        <button className="cursor-pointer border-none w-[10px] h-[10px] bg-[#dfdfdf] rounded-[50%] p-[5px] mx-[5px]"></button>
        <button className="cursor-pointer border-none w-[10px] h-[10px] bg-[#dfdfdf] rounded-[50%] p-[5px] mx-[5px]"></button>
        <button className="cursor-pointer border-none w-[10px] h-[10px] bg-[#dfdfdf] rounded-[50%] p-[5px] mx-[5px]"></button>
      </div>
    </section>
  );
};

export default Region;
