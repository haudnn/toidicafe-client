import axios from 'axios';
import { useRef, useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { BASE_URI } from '../../../constants';
import { writeActions } from '../writeSlice';
import ShopItem from './ShopItem';

interface Address {
  specific: string;
}
interface Shop {
  name: string;
  slug: string;
  address: Address;
  images: string;
  _id: string;
}
interface Data { 
  id: string;
  name: string;
  address: string;
  image: string;
  slug: string;
}
const SearchBar = () => {
  const dispatch = useAppDispatch()
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [shops, setShops] = useState([]);
  const typingTimeoutRef: any = useRef(null);
  const handleChangeValue = (e: any) => {
    const value = e.target.value;
    setSearchTerm(value);
    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current);
    }
    typingTimeoutRef.current = setTimeout(() => {
      async function fetching() {
        setIsLoading(true);
        try {
          const option = {
            method: 'GET',
            url: `${BASE_URI}/shops/search/select?q=${value}`,
          };
          const { data } = await axios(option);
          const { shops } = data;
          setShops(shops);
        } catch (error) {
          console.log(error);
        }
        setIsLoading(false);
      }
      fetching();
    }, 500);
  };
  const handleClickShop = (data:Data) => {
    const {id, name, address, image, slug} = data
    dispatch(writeActions.hideSearch())
    dispatch(writeActions.pickedPlace({name, address, image, slug}))
    dispatch(writeActions.getReview({shopId: id}))
  }
  return (
    <div>
      <div className="flex items-center w-full p-4">
        <div className="mr-3 basis-4/5 h-10 flex items-center justify-between w-full px-[6px] bg-[#f0f2f5] rounded-md">
          <BsSearch className="text-lg text-[#606770]" />
          <input
            type="text"
            onChange={handleChangeValue}
            value={searchTerm}
            placeholder="Tìm kiếm địa điểm"
            className="relative inline-block w-full outline-none border-none ml-[6px] mr-[16px] leading-[28px] h-[28px] text-[#606770] text-base bg-transparent "
          />
          {isLoading && (
            <svg
              className="w-5 h-5 mr-3 -ml-1 text-[#e03] animate-spin"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                stroke-width="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
          )}

        </div>
        <Link to="/" className="flex font-semibold text-base text-[#a0a0a0]">
          Thêm địa điểm
        </Link>
      </div>
      <div className="pb-4">
        <p className="ml-4 text-lg font-bold">Đã xem gần đây</p>
        <div className="flex flex-col flex-wrap">
          {shops.length > 0 ? (
            shops.map((shop: Shop) => (
              <ShopItem
                name={shop.name}
                slug={shop.slug}
                image={shop.images[0]}
                address={shop.address.specific}
                id={shop._id}
                handleClickShop={handleClickShop}
              />
            ))
          ) : (
            <>
              <div className="hover:bg-[#eee]">
                <Link
                  to="/"
                  className="flex items-center justify-start px-4 py-[10px] cursor-pointer relative text-black"
                >
                  <div className="w-10 h-10 mr-[10px] rounded overflow-hidden">
                    <img
                      src="https://toidicafe.vn/static/images/2022/06/13/bd944cc6-3a6a-41f0-b487-d303b7a6d6f4-IMG_0158.JPG?w=50&h=50"
                      alt=""
                      className="object-cover max-w-full max-h-full rounded"
                    />
                  </div>
                  <div>
                    <div className="text-lg font-medium">Sunny Garden Coffee</div>
                    <div className="text-sm text-[#6b6b6b]">3 Võ Quý Huân, Bắc Từ Liêm</div>
                  </div>
                </Link>
              </div>
              <div className="hover:bg-[#eee]">
                <Link
                  to="/"
                  className="flex items-center justify-start px-4 py-[10px] cursor-pointer relative text-black"
                >
                  <div className="w-10 h-10 mr-[10px] rounded overflow-hidden">
                    <img
                      src="https://toidicafe.vn/static/images/2022/06/13/bd944cc6-3a6a-41f0-b487-d303b7a6d6f4-IMG_0158.JPG?w=50&h=50"
                      alt=""
                      className="object-cover max-w-full max-h-full rounded"
                    />
                  </div>
                  <div>
                    <div className="text-lg font-medium">Sunny Garden Coffee</div>
                    <div className="text-sm text-[#6b6b6b]">3 Võ Quý Huân, Bắc Từ Liêm</div>
                  </div>
                </Link>
              </div>
              <div className="hover:bg-[#eee]">
                <Link
                  to="/"
                  className="flex items-center justify-start px-4 py-[10px] cursor-pointer relative text-black"
                >
                  <div className="w-10 h-10 mr-[10px] rounded overflow-hidden">
                    <img
                      src="https://toidicafe.vn/static/images/2022/06/13/bd944cc6-3a6a-41f0-b487-d303b7a6d6f4-IMG_0158.JPG?w=50&h=50"
                      alt=""
                      className="object-cover max-w-full max-h-full rounded"
                    />
                  </div>
                  <div>
                    <div className="text-lg font-medium">Sunny Garden Coffee</div>
                    <div className="text-sm text-[#6b6b6b]">3 Võ Quý Huân, Bắc Từ Liêm</div>
                  </div>
                </Link>
              </div>
              <div className="hover:bg-[#eee]">
                <Link
                  to="/"
                  className="flex items-center justify-start px-4 py-[10px] cursor-pointer relative text-black"
                >
                  <div className="w-10 h-10 mr-[10px] rounded overflow-hidden">
                    <img
                      src="https://toidicafe.vn/static/images/2022/06/13/bd944cc6-3a6a-41f0-b487-d303b7a6d6f4-IMG_0158.JPG?w=50&h=50"
                      alt=""
                      className="object-cover max-w-full max-h-full rounded"
                    />
                  </div>
                  <div>
                    <div className="text-lg font-medium">Sunny Garden Coffee</div>
                    <div className="text-sm text-[#6b6b6b]">3 Võ Quý Huân, Bắc Từ Liêm</div>
                  </div>
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
