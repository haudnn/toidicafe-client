import React, { useState, useEffect } from 'react';
import { RiArrowDownSLine } from 'react-icons/ri';
import { AiOutlineClose } from 'react-icons/ai';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { useFetch, useDebounce } from '../../../hooks/';
import { useSearchParams } from 'react-router-dom';
import Skeleton from '../../../components/Common/Skeleton';
import axios from 'axios';
import covertSlug from '../../../utils/covertSlug';
import autoScrollTop from '../../../utils/autoScrollTop';
import { BASE_URI } from '../../../constants';
import ShopItem from '../components/ShopItem';
import useAuth from '../../../hooks/useAuth';
import RegionItem from '../components/RegionItem';
import PurposeItem from '../components/PurposeItem';
import TagItem from '../components/TagItem';
import BenefitItem from '../components/BenefitItem';


interface TagList {
  purposes: Array<any>;
  regions: Array<any>;
  benefits: Array<any>;
  tags: Array<any>;
}
interface ShopList {
  meta: {
    page: string;
    pagesize: number;
    total: number;
  };
  shops: Array<any>;
}
const Search = () => {
  const [searchParams] = useSearchParams();
  const [param, setParam] = useState({
    regions: '',
    purposes: '',
  });
  const [tagList, setTagList] = useState<TagList>({
    purposes: [],
    regions: [],
    benefits: [],
    tags: [],
  });
  const [value, setValue] = useState({
    ...tagList,
    regions: searchParams.get('regions') ? [searchParams.get('regions')] : [],
    purposes: searchParams.get('purposes') ? [searchParams.get('purposes')] : [],
    openning: false,
    page: 1,
  });
  const [isLoading, setIsLoading] = useState(false);
  const [shops, setShops] = useState<ShopList>({
    meta: {
      page: '1',
      pagesize: 10,
      total: 1,
    },
    shops: [],
  });
  useEffect(() => {
    if (searchParams.get('regions')) {
      setParam((prev: any) => {
        return {
          ...prev,
          regions: searchParams.get('regions'),
        };
      });
    }
    if (searchParams.get('purposes')) {
      setParam((prev: any) => {
        return {
          ...prev,
          purposes: searchParams.get('purposes'),
        };
      });
    }
    autoScrollTop();
  }, [searchParams]);

  useEffect(() => {
    if (param.regions) {
      const convert = covertSlug(param.regions);
      setTagList((prev) => {
        return {
          ...prev,
          regions: [...prev.regions, convert],
        };
      });
    }
    if (param.purposes) {
      const convert = covertSlug(param.purposes);
      setTagList((prev) => {
        return {
          ...prev,
          purposes: [...prev.purposes, convert],
        };
      });
    }
  }, [param]);
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
  const { user } = useAuth()

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
    autoScrollTop();
  };
  const handelRemovedTag = (index: number, label: string) => {
    const newTagList = { ...tagList };
    const newValue = { ...value };
    if (newValue.regions[index] === param.regions) {
      setParam((prev) => {
        return {
          ...prev,
          regions: '',
        };
      });
    }
    if (newValue.purposes[index] === param.purposes) {
      setParam((prev) => {
        return {
          ...prev,
          purposes: '',
        };
      });
    }
    newValue[label as keyof TagList].splice(index, 1);
    newTagList[label as keyof TagList].splice(index, 1);
    setTagList(newTagList);
    setValue(newValue);
    autoScrollTop();
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
      openning: false,
    });
    setParam({
      regions: '',
      purposes: '',
    });
    autoScrollTop();
  };
  const handelChangeRadio = () => {
    setValue((prev) => {
      return {
        ...prev,
        openning: !prev.openning,
      };
    });
  };
  const debouncedValue = useDebounce(value, 500);
  useEffect(() => {
    async function fetching() {
      try {
        setIsLoading(true);
        const option = {
          method: 'POST',
          url: `${BASE_URI}/shops/search`,
          data: debouncedValue,
        };
        const { data } = await axios(option);
        const { page, total, pagesize } = data.meta;
        const { shops } = data;
        setShops({
          meta: {
            page,
            total,
            pagesize,
          },
          shops,
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
                              checked={!value.openning}
                              type="radio"
                              id="all"
                              className="radio-input"
                              name="all"
                              onClick={handelChangeRadio}
                            />
                            <label htmlFor="all" className="radio-label"></label>
                            <label htmlFor="all">Tất cả</label>
                          </div>
                          <div className="mb-[10px]">
                            <input
                              checked={value.openning}
                              type="radio"
                              id="openning"
                              className="radio-input"
                              name="openning"
                              onClick={handelChangeRadio}
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
                            <RegionItem
                            index={index}
                            slug ={region.slug}
                            name={region.name}
                            isChecked={tagList.regions.includes(region.name)} 
                            handelChangeTag={handelChangeTag}                           
                            />
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
                            <PurposeItem
                            index={index}
                            slug ={purpose.slug}
                            name={purpose.name}
                            isChecked={tagList.purposes.includes(purpose.name)} 
                            handelChangeTag={handelChangeTag}     
                            />
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
                            <TagItem
                            index={index}
                            slug ={tag.slug}
                            name={tag.name}
                            isChecked={tagList.tags.includes(tag.name)} 
                            handelChangeTag={handelChangeTag}   
                            />
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
                            <BenefitItem
                            index={index}
                            slug ={benefit.slug}
                            name={benefit.name}
                            isChecked={tagList.benefits.includes(benefit.name)} 
                            handelChangeTag={handelChangeTag}   
                            />
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
                      <div
                        onClick={() => handelRemovedTag(index, 'regions')}
                        key={index}
                        className="inline-block mb-1 mr-2 cursor-pointer"
                      >
                        <div className="text-base font-semibold py-1 px-2 text-[#e03] bg-white border border-solid border-[#e03] rounded-lg">
                          <span className="">{tag}</span>
                          <AiOutlineClose className="inline-block text-sm ml-1 text-[rgba(0,0,0,0.25)] cursor-pointer" />
                        </div>
                      </div>
                    ))}
                    {tagList.purposes.map((tag, index) => (
                      <div
                        key={index}
                        onClick={() => handelRemovedTag(index, 'purposes')}
                        className="inline-block mb-1 mr-2 cursor-pointer"
                      >
                        <div className="text-base font-semibold py-1 px-2 text-[#e03] bg-white border border-solid border-[#e03] rounded-lg">
                          <span>{tag}</span>
                          <AiOutlineClose className="inline-block text-sm ml-1 text-[rgba(0,0,0,0.25)] cursor-pointer" />
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
                      <>
                        {Array.from({ length: 5 }).map((_) => (
                          <Skeleton></Skeleton>
                        ))}
                      </>
                    ) : (
                      <div>
                        {shops.shops.map((shop, index) => (
                          <ShopItem
                            index={index}
                            slug={shop.slug}
                            id={shop.id}
                            images={shop.images}
                            name={shop.name}
                            price={shop.price}
                            address={shop.address}
                            status={shop.status}
                            time={shop.time}
                            isBookmarked = {shop.bookmarks.includes(user?._id) }
                          />
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
