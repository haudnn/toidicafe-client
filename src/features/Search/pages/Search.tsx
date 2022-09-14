import React, { useState, useEffect } from 'react';
import { RiArrowDownSLine } from 'react-icons/ri';
import { AiOutlineClose, AiOutlineStar, AiFillStar } from 'react-icons/ai';
import { MdAttachMoney } from 'react-icons/md';
import { GoLocation } from 'react-icons/go';
import { BsClock, BsBookmark } from 'react-icons/bs';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { useFetch, useDebounce } from '../../../hooks/';
import { Link } from 'react-router-dom';
import Skeleton from '../../../components/Common/Skeleton';
import axios from 'axios';
import { BASE_URI } from '../../../constants';
import {useSearchParams} from 'react-router-dom'
interface TagList {
  purposes: Array<any>;
  regions: Array<any>;
  benefits: Array<any>;
  tags: Array<any>;
}
interface ShopList{
  meta: {
    page: string,
    pagesize: number,
    total: number
  },
  shops: Array<any>;
}
const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [tagList, setTagList] = useState<TagList>({
    purposes: [],
    regions: [],
    benefits: [],
    tags: [],
  });
  const [value, setValue] = useState({
    ...tagList,
    page: 1,
  });
  const [isLoading, setIsLoading] = useState(false);
  const [shops, setShops] = useState<ShopList>({
    meta: {
      page: "1",
      pagesize: 10,
      total: 1,
    },
    shops : [],
  });
  // useEffect (() => {
  //   const search = searchParams.get("regions")
  //   setValue((prev:any) => {
  //     return {
  //       ...prev,
  //       regions: prev.regions.push(search)
  //     }
  //   })
  // },[searchParams]) 
  const debouncedValue = useDebounce(value, 500);
  const regions = useFetch({
    url: 'regions',
    method: 'GET',
  });
  const purposes = useFetch({
    url: 'purposes',
    method: 'GET',
  });
  const tags = useFetch({
    url: 'tags',
    method: 'GET',
  });
  const benefits = useFetch({
    url: 'benefits',
    method: 'GET',
  });
  const handelChangeTag = (name: string, label: string, e: any) => {
    setTagList((prev) => {
      if (prev[label as keyof TagList].includes(name)) {
        const tagActive = prev[label as keyof TagList].filter((item) => item !== name);
        return {
          ...prev,
          [label]: tagActive,
        };
      } else {
        return {
          ...prev,
          [label]: [...prev[label as keyof TagList], name],
        };
      }
    });
    setValue((prev) => {
      if (prev[label as keyof TagList].includes(e.target.name)) {
        const tagActive = prev[label as keyof TagList].filter((item) => item !== e.target.name);
        return {
          ...prev,
          [label]: tagActive,
        };
      } else {
        return {
          ...prev,
          [label]: [...prev[label as keyof TagList], e.target.name],
        };
      }
    });
  };
  const handelRemovedTag = (index: number, label: string) => {
    const newTagList = { ...tagList };
    const newValue = { ...value };
    newValue[label as keyof TagList].splice(index, 1);
    newTagList[label as keyof TagList].splice(index, 1);
    setTagList(newTagList);
    setValue(newValue);
  };
  const handelRemovedAllTag = () => {
    setTagList({
      purposes: [],
      regions: [],
      benefits: [],
      tags: [],
    });
    setValue({
      page: 1,
      purposes: [],
      regions: [],
      benefits: [],
      tags: [],
    });
  };
  useEffect(() => {
    async function fetching() {
      try {
        setIsLoading(true);
        const option = {
          method: 'POST',
          url: `${BASE_URI}/shops/search`,
          data: debouncedValue,
        };
        const response = await axios(option);
        setShops({
          meta : {
            page: response.data.meta.page,  
            total: response.data.meta.total,
            pagesize: response.data.meta.pagesize,
          },
          shops: response.data.shops,
        });
        setIsLoading(false);
      } catch (error) {
        console.error(error);
      }
    }
    fetching();
  }, [debouncedValue]); 
  return (
    <div className="search">
      <div className="w-full min-h-screen">
        <div className="pt-5 pb-20 min-h-[70vh]">
          <div className="grid wide">
            <div className="row">
              <div className="col l-3">
                <div className="relative cursor-pointer w-full h-[152px] mb-5 rounded-lg shadow-md bg-cover bg-[url(https://static.tacdn.com/img2/maps/img_map.png)] bg-no-repeat">
                  <button className="font-bold h-10 py-[2px] px-[10px] text-black bg-white border-2 border-solid border-black flex items-center justify-center rounded-[10px] cursor-pointer outline-0 absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%]">
                    Xem bản đồ
                  </button>
                </div>
                <div className="relative w-full py-[10px] px-[14px] rounded-[10px] bg-white shadow-md">
                  <div className="py-4 border-b border-b-[#e0e0e0]">
                    <h2 className="text-xl font-semibold text-[rgba(0,0,0,.85)]">Lọc kết quả</h2>
                  </div>
                  <div>
                    <div>
                      <div className="flex items-center justify-between py-3 pl-2">
                        <h2 className="text-base font-semibold text-[rgba(0,0,0,.85)]">
                          Giờ mở cửa
                        </h2>
                        <RiArrowDownSLine className="w-5 h-5 cursor-pointer" />
                      </div>
                      <div className="p-[10px]">
                        <div className="max-h-[220px] overflow-y-auto">
                          <div className="mb-[10px]">
                            <input
                              checked={true}
                              type="radio"
                              id="all"
                              className="radio-input"
                              name="all"
                            />
                            <label htmlFor="all" className="radio-label"></label>
                            <label htmlFor="all">Tất cả</label>
                          </div>
                          <div className="mb-[10px]">
                            <input
                              type="radio"
                              id="openning"
                              className="radio-input"
                              name="openning"
                            />
                            <label htmlFor="openning" className="radio-label"></label>
                            <label htmlFor="openning">Đang mở cửa</label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center justify-between py-3 pl-2">
                        <h2 className="text-base font-semibold text-[rgba(0,0,0,.85)]">Khu vực</h2>
                        <RiArrowDownSLine className="w-5 h-5 cursor-pointer" />
                      </div>
                      <div className="p-[10px]">
                        <div className="max-h-[160px] overflow-y-auto custom-scrollbar">
                          {regions.response?.regions.map((region, index) => (
                            <div key={index} className="mb-[10px]">
                              <input
                                id={region.slug}
                                type="checkbox"
                                onChange={(e) => handelChangeTag(region.name, 'regions', e)}
                                checked={tagList.regions.includes(region.name) ? true : false}
                                name={region.slug}
                              />
                              <label className="text-base" htmlFor={region.slug}>
                                Quận {region.name}
                              </label>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center justify-between py-3 pl-2">
                        <h2 className="text-base font-semibold text-[rgba(0,0,0,.85)]">Mục đích</h2>
                        <RiArrowDownSLine className="w-5 h-5 cursor-pointer" />
                      </div>
                      <div className="p-[10px]">
                        <div>
                          {purposes.response?.purposes.map((purpose, index) => (
                            <div key={index} className="mb-[10px]">
                              <input
                                name={purpose.slug}
                                id={purpose.slug}
                                type="checkbox"
                                onChange={(e) => handelChangeTag(purpose.name, 'purposes', e)}
                                checked={tagList.purposes.includes(purpose.name) ? true : false}
                              />
                              <label className="text-base" htmlFor={purpose.slug}>
                                {purpose.name}
                              </label>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center justify-between py-3 pl-2">
                        <h2 className="text-base font-semibold text-[rgba(0,0,0,.85)]">
                          Kiểu quán
                        </h2>
                        <RiArrowDownSLine className="w-5 h-5 cursor-pointer" />
                      </div>
                      <div className="p-[10px]">
                        <div className="max-h-[160px] overflow-y-auto custom-scrollbar">
                          {tags.response?.tags.map((tag, index) => (
                            <div key={index} className="mb-[10px]">
                              <input
                                id={tag.slug}
                                name={tag.slug}
                                type="checkbox"
                                onChange={(e) => handelChangeTag(tag.name, 'tags', e)}
                                checked={tagList.tags.includes(tag.name) ? true : false}
                              />
                              <label className="text-base" htmlFor={tag.slug}>
                                {tag.name}
                              </label>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center justify-between py-3 pl-2">
                        <h2 className="text-base font-semibold text-[rgba(0,0,0,.85)]">
                          Khoảng giá
                        </h2>
                        <RiArrowDownSLine className="w-5 h-5 cursor-pointer" />
                      </div>
                      <div className="p-[10px]">
                        <div className="mb-[10px]">
                          <span className="block text-center text-lg text-[#e03] font-semibold">
                            0 ~ 300.000 VNĐ
                          </span>
                          {/* range */}
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center justify-between py-3 pl-2">
                        <h2 className="text-base font-semibold text-[rgba(0,0,0,.85)]">Tiện ích</h2>
                        <RiArrowDownSLine className="w-5 h-5 cursor-pointer" />
                      </div>
                      <div className="p-[10px]">
                        <div className="max-h-[160px] overflow-y-auto custom-scrollbar">
                          {benefits.response?.benefits.map((benefit, index) => (
                            <div key={index} className="mb-[10px]">
                              <input
                                id={benefit.slug}
                                type="checkbox"
                                name={benefit.slug}
                                onChange={(e) => handelChangeTag(benefit.name, 'benefits', e)}
                                checked={tagList.benefits.includes(benefit.name) ? true : false}
                              />
                              <label className="text-base" htmlFor={benefit.slug}>
                                {benefit.name}
                              </label>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col l-9">
                <div>
                  <div className="flex items-center justify-between mb-[10px]">
                    <span className="text-lg">
                      <strong>{shops.meta.total}</strong> địa điểm khớp với tìm kiếm của bạn:
                      <small
                        onClick={handelRemovedAllTag}
                        className="mx-2 font-bold cursor-pointer"
                      >
                        Xóa tất cả bộ lọc
                      </small>
                    </span>
                    <div className="flex items-center text-base">
                      <span>Sắp xếp theo:</span>
                      <div className="ml-1 p-1 border border-solid border-[#e5e5e5] rounded-sm">
                        <select name="" id="">
                          <option className="text-sm" value="">
                            Đúng nhất
                          </option>
                          <option className="text-sm" value="">
                            Điểm đánh giá
                          </option>
                          <option className="text-sm" value="">
                            Gần tôi nhất
                          </option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="mb-[10px]">
                    {tagList.regions.map((tag, index) => (
                      <div key={index} className="inline-block mb-1 mr-2 cursor-pointer">
                        <div className="text-base font-semibold py-1 px-2 text-[#e03] bg-white border border-solid border-[#e03] rounded-lg">
                          <span className="">{tag}</span>
                          <AiOutlineClose
                            onClick={() => handelRemovedTag(index, 'regions')}
                            className="inline-block text-sm ml-1 text-[rgba(0,0,0,0.25)] cursor-pointer"
                          />
                        </div>
                      </div>
                    ))}
                    {tagList.purposes.map((tag, index) => (
                      <div key={index} className="inline-block mb-1 mr-2 cursor-pointer">
                        <div className="text-base font-semibold py-1 px-2 text-[#e03] bg-white border border-solid border-[#e03] rounded-lg">
                          <span className="">{tag}</span>
                          <AiOutlineClose
                            onClick={() => handelRemovedTag(index, 'purposes')}
                            className="inline-block text-sm ml-1 text-[rgba(0,0,0,0.25)] cursor-pointer"
                          />
                        </div>
                      </div>
                    ))}
                    {tagList.benefits.map((tag, index) => (
                      <div key={index} className="inline-block mb-1 mr-2 cursor-pointer">
                        <div className="text-base font-semibold py-1 px-2 text-[#e03] bg-white border border-solid border-[#e03] rounded-lg">
                          <span className="">{tag}</span>
                          <AiOutlineClose
                            onClick={() => handelRemovedTag(index, 'benefits')}
                            className="inline-block text-sm ml-1 text-[rgba(0,0,0,0.25)] cursor-pointer"
                          />
                        </div>
                      </div>
                    ))}
                    {tagList.tags.map((tag, index) => (
                      <div key={index} className="inline-block mb-1 mr-2 cursor-pointer">
                        <div className="text-base font-semibold py-1 px-2 text-[#e03] bg-white border border-solid border-[#e03] rounded-lg">
                          <span className="">{tag}</span>
                          <AiOutlineClose
                            onClick={() => handelRemovedTag(index, 'tags')}
                            className="inline-block text-sm ml-1 text-[rgba(0,0,0,0.25)] cursor-pointer"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="min-h-[50vh] relative">
                    {isLoading ? (
                      <Skeleton></Skeleton>
                    ) : (
                      <div>
                        {shops.shops.map((shop, index) => (
                          <div key={index} className="mb-5">
                            <div className="relative flex bg-white rounded-lg shadow-md">
                              <Link target="blank" to={`/place/${shop.slug}`} className="py-2 pl-2">
                                <div className="w-[270px] h-full overflow-hidden rounded">
                                  <div className="relative w-full h-full overflow-hidden">
                                    <div className="absolute top-0 left-0 w-full h-full">
                                      <img
                                        src={shop.images[0]}
                                        alt=""
                                        className="object-cover w-full h-full "
                                      />
                                    </div>
                                  </div>
                                </div>
                              </Link>
                              <div className="flex-shrink flex-grow pt-[6px] px-6 pb-6 min-h-[200px]">
                                <Link target="blank" to={`/place/${shop.slug}`}>
                                  <h4 className="text-xl font-bold pt-[6px] pb-1">{shop.name}</h4>
                                </Link>
                                <div className="text-base pt-[2px]">
                                  <span className="text-[#e03] mr-[6px]">
                                    <AiOutlineStar className="inline-block text-2xl" />
                                    <AiOutlineStar className="inline-block text-2xl" />
                                    <AiOutlineStar className="inline-block text-2xl" />
                                    <AiOutlineStar className="inline-block text-2xl" />
                                    <AiOutlineStar className="inline-block text-2xl" />
                                  </span>
                                  {'- '}
                                  chưa có đánh giá
                                </div>
                                <div className="text-base pt-[6px] flex items-center gap-x-[10px]">
                                  <MdAttachMoney className="inline-block text-xl" />
                                  {shop.price.min}đ - {shop.price.max}đ
                                </div>
                                <div className="text-base pt-[6px] flex items-center gap-x-[10px]">
                                  <GoLocation className="inline-block text-xl" />
                                  {shop.address.specific}
                                </div>
                                <div className="text-base pt-[6px] flex items-center gap-x-[10px]">
                                  <BsClock className="inline-block text-xl" />
                                  <span className="font-bold text-[#00b707]">
                                    Đang mở cửa
                                  </span>- {''}
                                  {shop.time.open} - {shop.time.close}
                                </div>
                              </div>
                              <div className="absolute top-2 right-[10px] bottom-auto left-auto">
                                <div className="hover:text-[#e03] flex items-center justify-center relative cursor-pointer w-9 h-9 font-lg text-black bg-white rounded-[50%] shadow-md">
                                  <BsBookmark></BsBookmark>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}

                    <div className="w-full p-[14px] rounded-[10px]">
                      <ul className="flex items-center justify-center">
                        <li className="mx-[10px] text-lg text-[#999] cursor-not-allowed opacity-50 transition-all delay-[0.2s] pagi-action pagi-prev ">
                          <FiChevronLeft />
                        </li>
                        <li className="hover:text-[#e03] mx-[10px] text-lg text-[#999] cursor-pointer transition-all delay-[0.2s]">
                          1
                        </li>
                        <li className="hover:text-[#e03] mx-[10px] text-lg text-[#999] cursor-pointer transition-all delay-[0.2s] is-active">
                          2
                        </li>
                        <li className="hover:text-[#e03] mx-[10px] text-lg text-[#999] cursor-pointer transition-all delay-[0.2s]">
                          3
                        </li>
                        <li className="hover:text-[#e03] mx-[10px] text-lg text-[#999] cursor-pointer transition-all delay-[0.2s]">
                          4
                        </li>
                        <li className="hover:text-[#e03] mx-[10px] text-lg text-[#999] cursor-pointer transition-all delay-[0.2s]">
                          5
                        </li>
                        <li className="hover:text-[#e03] mx-[10px] text-lg text-[#999] cursor-pointer transition-all delay-[0.2s] pagi-action pagi-next">
                          <FiChevronRight />
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
