import axios from 'axios';
import React, { useEffect, useState } from 'react';
import shopApi from '../../../api/shopApi';
import book from '../../../assets/img/book.png';
import Skeleton from '../../../components/Common/Skeleton';
import { BASE_URI } from '../../../constants';
import { useFetch } from '../../../hooks';
import { getAccessToken } from '../../../utils/localStorage';
import ShopItem from '../../search/components/ShopItem';

interface Data {
  region: string;
  openning: boolean;
}

const Save = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [shops, setShops] = useState([]);
  const regions = useFetch({
    url: 'regions',
    method: 'GET',
  });
  const [data, setData] = useState<Data>({
    region: "all",
    openning: false,
  });
  useEffect(() => {
    const token:any = getAccessToken();
    const { region, openning } = data;
    async function fetching() {
      setIsLoading(true);
      try {
        const {data} = await shopApi.getBookmarks(`${BASE_URI}/shops/bookmark/saved?region=${region}&openning=${openning}`) 
        setShops(data.shops);
      } catch (err) {
        console.log(err);
      }
      setIsLoading(false);
    }
    if (token) {
      fetching();
    }
  }, [data]);
  const handelChangeData= ( e:any , label: string) => { 
    setData((prev) => {
      return {
        ...prev,
        [label] : label === "region" ? e.target.name : !prev.openning
      }
    })
  }
  console.log(shops)
  return (
    <div className="save">
      <div className="layout-main">
        <div className="pt-[10px] pb-[50px]">
          <div className="absolute top-[60px] right-auto bottom-auto left-0 w-full h-[220px] mb-6 bg-explore"></div>
          <div className="relative">
            <div className="grid wide">
              <div className="row">
                <div className="col l-8">
                  <div className="flex flex-col justify-center h-full">
                    <p className="pb-5 text-3xl font-semibold text-back">Danh sách đã lưu</p>
                    <p className="pb-2 text-xl font-semibold text-back">
                      Lập danh sách những quán cafe yêu thích để dễ dàng so sánh và theo dõi!
                    </p>
                    <p className="text-xl font-semibold text-back">
                      Chúng tôi sẽ giúp bạn luôn theo dấu những địa điểm này.
                    </p>
                  </div>
                </div>
                <div className="col l-4">
                  <div className="p-[30px]">
                    <img src={book} alt="bookmark" className="object-cover w-full h-full" />
                  </div>
                </div>
              </div>
            
                  <div className="row">
                <div className="col l-3">
                  <div className="w-full py-[10px] px-[14px] rounded-[10px] bg-white shadow-md">
                    <div className="py-4 border-b border-b-[#e0e0e0]">
                      <h2 className="text-xl font-semibold text-[rgba(0,0,0,.85)]">
                        Bộ lọc địa điểm
                      </h2>
                      <p className="text-sm">Hiển thị kết quả theo ưu tiên của bạn</p>
                    </div>
                    <div>
                      <div>
                        <div className="flex items-center justify-between py-3 pl-2">
                          <h2 className="text-base font-semibold text-[rgba(0,0,0,.85)]">
                            Giờ mở cửa
                          </h2>
                        </div>
                        <div>
                          <div className="max-h-[220px] overflow-y-auto">
                            <div className="mb-[5px]">
                              <input
                                checked={!data.openning}
                                type="radio"
                                id="default"
                                className="radio-input"
                                name="default"
                                onChange={(e) => handelChangeData(e, "openning")}
                              />
                              <label htmlFor="default" className="radio-label"></label>
                              <label htmlFor="default" className="text-sm">
                                Tất cả
                              </label>
                            </div>
                            <div className="mb-[5px]">
                              <input
                                checked={data.openning}
                                type="radio"
                                id="openning"
                                className="radio-input"
                                name="openning"
                                onChange={(e) => handelChangeData(e, "openning")}
                              />
                              <label htmlFor="openning" className="radio-label"></label>
                              <label htmlFor="openning" className="text-sm">
                                Đang mở cửa
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div>
                        <div className="flex items-center justify-between py-3 pl-2">
                          <h2 className="text-base font-semibold text-[rgba(0,0,0,.85)]">
                            Khu vực
                          </h2>
                        </div>
                        <div>
                          <div className="max-h-[220px] overflow-y-auto">
                          <div className="mb-[5px]">
                              <input
                                checked={data.region === "all"}
                                onChange={(e) => handelChangeData(e, "region")}
                                type="radio"
                                id="all"
                                className="radio-input"
                                name="all"
                              />
                              <label htmlFor="all" className="radio-label"></label>
                              <label htmlFor="all" className="text-sm">
                                Tất cả
                              </label>
                            </div>
                            {regions.response?.regions.map((region, index) => (
                              <div key={index} className="mb-[5px]">
                                <input
                                 checked={data.region === region.slug}
                                 onChange={(e) => handelChangeData(e , "region")}
                                  type="radio"
                                  id={region.slug}
                                  className="radio-input"
                                  name={region.slug}
                                />
                                <label htmlFor={region.slug} className="radio-label"></label>
                                <label htmlFor={region.slug} className="text-sm">
                                Quận {region.name}
                                </label>
                              </div>
                            ))}

                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {
                shops.length > 0 ? (
                <div className="col l-9">
                  <div>
                    <div className="min-h-[50vh] relative">
                      {isLoading ? (
                        <>
                          {Array.from({ length: 5 }).map((_) => (
                            <Skeleton></Skeleton>
                          ))}
                        </>
                      ) : (
                        <div>
                          {shops?.map((shop: any, index: number) => (
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
                              isBookmarked={true} 
                            />
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
        
                ) : (
                  <div className="text-lg font-semibold text-center">Bạn chưa lưu địa điểm nào</div>
                )
              }
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Save;
