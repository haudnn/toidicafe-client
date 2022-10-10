import React from 'react';
import { Link } from 'react-router-dom';

const Related = () => {
  return (
    <div id="related" className="relative px-4 py-2 mb-5 bg-white rounded-[10px] shadow-lg">
      <div className="flex items-center justify-between mb-1">
        <h2 className="text-3xl font-medium">Địa điểm lân cận</h2>
        <Link
          to="/"
          className="leading-9 hover:decoration-solid hover:decoration-[#e03] hover:underline text-[#e03] text-lg"
        >
          Xem thêm
        </Link>
      </div>
      <div className="w-full bg-[#eee] overflow-hidden cursor-pointer h-[400px] mb-1 rounded-md shadow-lg">
        <div className="relative w-full h-full">
          <div className="absolute top-0 left-0 w-full h-full">
            <img
              src="https://api.mapbox.com/styles/v1/mapbox/outdoors-v11/static/pin-s-cafe+285A98(105.8521943,21.033235),pin-s-cafe+285A98(105.8519879,21.0329604),pin-s-cafe+285A98(105.8534812,21.0343596),pin-s-cafe+285A98(105.85178345,21.03211195),pin-s-cafe+285A98(105.8523434,21.0320098),pin-s-cafe+285A98(105.8528733,21.0354897),pin-l-cafe+EE0033(105.8519535,21.0337899)/105.8519535,21.0337899,14,0/1136x400?access_token=pk.eyJ1IjoiaG9haXBoYW4iLCJhIjoiY2s4NjRuNm40MGUweDNwcGZ4azZhMTA1MCJ9.rExJxHGtG7JXWJwEjJTTCg"
              alt=""
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
      <div
        style={{ scrollSnapType: 'x mandatory' }}
        className="flex items-center justify-start overflow-x-auto overflow-y-hidden whitespace-nowrap pr-[6px] pb-4 mt-3 mb-[-10px] ml-[-12px] mr-[-6px] snap-always"
      >
        <div className="w-1/4 shrink-0 mb-[-10px] snap-start">
          <Link to="/" className="img-hover">
            <div className="relative block mb-3 ml-3 bg-white rounded-md shadow-lg cursor-pointer">
              <div className="w-full overflow-hidden h-[200px] rounded-tl-md rounded-tr-md ">
                <div className="relative w-full h-full overflow-hidden bg-img-slider-container">
                  <div className="absolute top-0 left-0 w-full h-full">
                    <img
                      src="https://toidicafe.vn/static/images/place/skyline-hanoi/skyline-hanoi-avatar-1648268319055.png?w=960"
                      alt=""
                      className="object-cover w-full h-full rounded-tl-md rounded-tr-md bg-img-slider "
                    />
                  </div>
                </div>
              </div>
              <div className="py-[2px] px-[15px]">
                <h3 className="text-lg font-bold pt-[6px] pb-[2px] overflow-hidden whitespace-nowrap text-ellipsis">
                  The XX - Coffe bar
                </h3>
                <div className="text-back text-sm pb-[6px] overflow-hidden whitespace-nowrap text-ellipsis">
                  136 Hồ Tùng Mậu (332 Hoàng Công Chất), Bắc Từ Liêm
                </div>
              </div>
            </div>
          </Link>
        </div>
        <div className="w-1/4 shrink-0 mb-[-10px] snap-start">
          <Link to="/" className="img-hover">
            <div className="relative block mb-3 ml-3 bg-white rounded-md shadow-lg cursor-pointer">
              <div className="w-full overflow-hidden h-[200px] rounded-tl-md rounded-tr-md ">
                <div className="relative w-full h-full overflow-hidden bg-img-slider-container">
                  <div className="absolute top-0 left-0 w-full h-full">
                    <img
                      src="https://toidicafe.vn/static/images/place/skyline-hanoi/skyline-hanoi-avatar-1648268319055.png?w=960"
                      alt=""
                      className="object-cover w-full h-full rounded-tl-md rounded-tr-md bg-img-slider "
                    />
                  </div>
                </div>
              </div>
              <div className="py-[2px] px-[15px]">
                <h3 className="text-lg font-bold pt-[6px] pb-[2px] overflow-hidden whitespace-nowrap text-ellipsis">
                  The XX - Coffe bar
                </h3>
                <div className="text-back text-sm pb-[6px] overflow-hidden whitespace-nowrap text-ellipsis">
                  136 Hồ Tùng Mậu (332 Hoàng Công Chất), Bắc Từ Liêm
                </div>
              </div>
            </div>
          </Link>
        </div>
        <div className="w-1/4 shrink-0 mb-[-10px] snap-start">
          <Link to="/" className="img-hover">
            <div className="relative block mb-3 ml-3 bg-white rounded-md shadow-lg cursor-pointer">
              <div className="w-full overflow-hidden h-[200px] rounded-tl-md rounded-tr-md ">
                <div className="relative w-full h-full overflow-hidden bg-img-slider-container">
                  <div className="absolute top-0 left-0 w-full h-full">
                    <img
                      src="https://toidicafe.vn/static/images/place/skyline-hanoi/skyline-hanoi-avatar-1648268319055.png?w=960"
                      alt=""
                      className="object-cover w-full h-full rounded-tl-md rounded-tr-md bg-img-slider "
                    />
                  </div>
                </div>
              </div>
              <div className="py-[2px] px-[15px]">
                <h3 className="text-lg font-bold pt-[6px] pb-[2px] overflow-hidden whitespace-nowrap text-ellipsis">
                  The XX - Coffe bar
                </h3>
                <div className="text-back text-sm pb-[6px] overflow-hidden whitespace-nowrap text-ellipsis">
                  136 Hồ Tùng Mậu (332 Hoàng Công Chất), Bắc Từ Liêm
                </div>
              </div>
            </div>
          </Link>
        </div>
        <div className="w-1/4 shrink-0 mb-[-10px] snap-start">
          <Link to="/" className="img-hover">
            <div className="relative block mb-3 ml-3 bg-white rounded-md shadow-lg cursor-pointer">
              <div className="w-full overflow-hidden h-[200px] rounded-tl-md rounded-tr-md ">
                <div className="relative w-full h-full overflow-hidden bg-img-slider-container">
                  <div className="absolute top-0 left-0 w-full h-full">
                    <img
                      src="https://toidicafe.vn/static/images/place/skyline-hanoi/skyline-hanoi-avatar-1648268319055.png?w=960"
                      alt=""
                      className="object-cover w-full h-full rounded-tl-md rounded-tr-md bg-img-slider "
                    />
                  </div>
                </div>
              </div>
              <div className="py-[2px] px-[15px]">
                <h3 className="text-lg font-bold pt-[6px] pb-[2px] overflow-hidden whitespace-nowrap text-ellipsis">
                  The XX - Coffe bar
                </h3>
                <div className="text-back text-sm pb-[6px] overflow-hidden whitespace-nowrap text-ellipsis">
                  136 Hồ Tùng Mậu (332 Hoàng Công Chất), Bắc Từ Liêm
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Related;
