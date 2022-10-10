import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import 'keen-slider/keen-slider.min.css';
import { useSlider, useOnScroll, useToggle, useRatingText } from '../../../hooks/';
import { BsClock, BsInstagram, BsTags } from 'react-icons/bs';
import { GoLocation } from 'react-icons/go';
import { MdAttachMoney, MdOutlineDirections } from 'react-icons/md';
import { AiOutlineMail } from 'react-icons/ai';
import { FaFacebookSquare, FaHeart, FaTimes } from 'react-icons/fa';
import navPlace from '../../../constants/navPlace';
import '@fortawesome/fontawesome-free/css/all.min.css';
import LightBox from '../../../components/Common/LightBox';
import { useAppSelector, useAppDispatch } from '../../../app/hooks';
import { selectMessage } from '../../review/reviewSlice';
import { ToastContainer, toast } from 'react-toastify';
import ReviewItem from '../components/ReviewItem';
import Related from '../components/Related';
import Thumbnail from '../components/Thumbnail';
import BenefitItem from '../components/BenefitItem';
import Bookmark from '../../../components/Common/Bookmark'; 
import { placeActions, selectIsLoading, selectShop } from '../placeSlice';
import ReviewForm from '../components/ReviewForm';
import formatNumberStar from '../../../utils/formatNumberStar';
const Place = () => {
  const { slug }: any = useParams();
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(placeActions.getShop(slug));
  }, [slug, dispatch]);
  const isLoading = useAppSelector(selectIsLoading);
  const message = useAppSelector(selectMessage);
  const shop = useAppSelector(selectShop);
  const [isOpen, setIsOpen] = useState<Boolean>(false);
  const sliderRef = useSlider('places');
  const visible = useOnScroll(300);
  const [activeTab, setActiveTab] = useState<Number>(0);
  const { isToggle, handleToggle } = useToggle();
  const handleActiveTab = (i: number) => {
    setActiveTab(i);
  };
  const handleOpenLighbox = () => {
    setIsOpen((prev) => !prev);
  };
  useEffect(() => {
    toast.success(message, {
      position: 'top-center',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    // dispatch(reviewActions.setMessage())
  }, [message, dispatch]);

  const ratingText = useRatingText(shop?.avgRateShop);
  return (
    <div className="place">
      {isOpen && (
        <LightBox
          images={shop?.images}
          length={shop?.imagesCount}
          name={shop?.name}
          handleOpenLighbox={handleOpenLighbox}
        />
      )}
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover
      />
      <div className="layout-main">
        <div className="pt-[10px]">
          <div className="grid wide">
            <div
              className={`${
                visible ? 'visible opacity-100 ' : 'invisible opacity-0 '
              }fixed top-0 left-0 bottom-auto right-auto z-10  w-full bg-white shadow-lg custom-transition-header `}
            >
              <div className="flex items-center justify-between w-[1200px] m-auto">
                <div className="whitespace-nowrap overflow-x-auto pl-[6px]">
                  <nav>
                    <ul className="flex">
                      {navPlace.map(({ name, path }, i) => (
                        <li
                          key={i}
                          className="text-base cursor-pointer h-full leading-[1.143] pr-5"
                        >
                          <a
                            onClick={() => handleActiveTab(i)}
                            href={path}
                            className={`${
                              activeTab === i
                                ? 'text-[#e03] border-[#e03] border-b-2 border-solid '
                                : ' '
                            } p-3  block font-medium `}
                          >
                            {name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
            {isLoading ? (
              <div>Loading...</div>
            ) : (
              <>
                <div id="galery" className="p-2 mb-5 bg-white rounded-[10px] shadow-lg relative">
                  <div className="flex items-start justify-between pl-2">
                    <h2 className="text-3xl font-medium">{shop?.name}</h2>
                    <div className="flex items-center justify-center p-[6px]">
                      <Bookmark isBookmarked={shop?.isBookMark} id={shop?.id} name={shop?.name} />
                    </div>
                  </div>
                  <div className="pl-2 text-base">
                    <p className="mb-1 mr-10">{shop?.description}</p>
                    <p className="flex items-center">
                      <GoLocation className="inline-block mr-1" />
                      <span>
                        {shop?.address.specific} <span> — </span>
                        <Link
                          to="/"
                          className="hover:border-b hover:border-b-solid hover:border-b-[#e03] text-[#e03] font-medium"
                        >
                          Hiển thị bản đồ
                        </Link>{' '}
                        <span> — </span>
                        <Link
                          to="/"
                          className="hover:border-b hover:border-b-solid hover:border-b-[#e03] text-[#e03] font-medium"
                        >
                          Xem bản đồ
                        </Link>{' '}
                        <span> — </span>
                        <Link
                          to="/"
                          className="hover:border-b hover:border-b-solid hover:border-b-[#e03] text-[#e03] font-medium"
                        >
                          Xem menu
                        </Link>
                      </span>
                    </p>
                  </div>
                  <Thumbnail
                    images={shop?.images}
                    handleOpenLighbox={handleOpenLighbox}
                    slug={shop?.slug}
                    imagesCount={shop?.imagesCount}
                  />
                </div>
                <div id="detail" className="relative mb-5">
                  <div className="grid">
                    <div className="row">
                      <div className="col l-4">
                        <div className="overflow-hidden pt-1 pb-[10px] px-[14px] bg-white rounded-[10px] shadow-lg">
                          <h2 className="text-xl font-medium">Đánh giá</h2>
                          <div className="flex items-center justify-center mb-2">
                            <b className="block text-2xl text-center py-2 px-4 mr-1 text-white bg-[#e03] rounded-md">
                              {shop?.avgRateShop ? formatNumberStar(shop?.avgRateShop) : 0}
                            </b>
                            <div className="">
                              <h2 className="text-xl font-medium">
                                {shop?.avgRateShop ? ratingText : 'Chưa có đánh giá'}
                              </h2>
                              <span className="text-sm">
                                /5 ({shop?.reviewsCount ? shop?.reviewsCount : 0} đánh giá)
                              </span>
                            </div>
                          </div>
                          <div className="relative">
                            {shop?.reviews.length === 0 && (
                              <div className="absolute flex items-center justify-center top-0 left-0 right-0 bottom-0 z-1 bg-[hsla(0,0%,100%,.65)]">
                                <button className="button-review-animation text-[#e03] bg-transparent border-[#e03] border-4 border-solid cursor-pointer py-[10px] px-4 font-bold flex items-center justify-center rounded-md outline-0">
                                  Đánh giá ngay
                                </button>
                              </div>
                            )}
                            <div className="flex items-center justify-between text-base mb-[6px]">
                              <span className="basis-[30%]">Vị trí</span>
                              {shop?.reviews.length > 0 ? (
                                <>
                                  <div className="basis-[65%] w-full">
                                    <div className="relative inline-block w-full overflow-hidden align-middle bg-[#f5f5f5] rounded-[100px]">
                                      <div
                                        style={{
                                          width: `${(shop?.totalStar.position * 100) / 5}%`,
                                        }}
                                        className="h-2 bg-[#e03] rounded-[100px]"
                                      ></div>
                                    </div>
                                  </div>
                                  <span className="basis-[5%] ml-5 font-medium text-right">
                                    {formatNumberStar(shop?.totalStar.position)}
                                  </span>
                                </>
                              ) : (
                                <span className="basis-[5%] ml-5 font-medium text-right">0</span>
                              )}
                            </div>
                            <div className="flex items-center justify-between text-base mb-[6px]">
                              <span className="basis-[30%]">Không gian</span>
                              {shop?.reviews.length > 0 ? (
                                <>
                                  <div className="basis-[65%] w-full">
                                    <div className="relative inline-block w-full overflow-hidden align-middle bg-[#f5f5f5] rounded-[100px]">
                                      <div
                                        style={{
                                          width: `${(shop?.totalStar.space * 100) / 5}%`,
                                        }}
                                        className="h-2 bg-[#e03] rounded-[100px]"
                                      ></div>
                                    </div>
                                  </div>
                                  <span className="basis-[5%] ml-5 font-medium text-right">
                                    {formatNumberStar(shop?.totalStar.space)}
                                  </span>
                                </>
                              ) : (
                                <span className="basis-[5%] ml-5 font-medium text-right">0</span>
                              )}
                            </div>
                            <div className="flex items-center justify-between text-base mb-[6px]">
                              <span className="basis-[30%]">Đồ uống</span>
                              {shop?.reviews.length > 0 ? (
                                <>
                                  <div className="basis-[65%] w-full">
                                    <div className="relative inline-block w-full overflow-hidden align-middle bg-[#f5f5f5] rounded-[100px]">
                                      <div
                                        style={{
                                          width: `${(shop?.totalStar.drink * 100) / 5}%`,
                                        }}
                                        className="h-2 bg-[#e03] rounded-[100px]"
                                      ></div>
                                    </div>
                                  </div>
                                  <span className="basis-[5%] ml-5 font-medium text-right">
                                    {formatNumberStar(shop?.totalStar.drink)}
                                  </span>
                                </>
                              ) : (
                                <span className="basis-[5%] ml-5 font-medium text-right">0</span>
                              )}
                            </div>
                            <div className="flex items-center justify-between text-base mb-[6px]">
                              <span className="basis-[30%]">Phục vụ</span>
                              {shop?.reviews.length > 0 ? (
                                <>
                                  <div className="basis-[65%] w-full">
                                    <div className="relative inline-block w-full overflow-hidden align-middle bg-[#f5f5f5] rounded-[100px]">
                                      <div
                                        style={{
                                          width: `${(shop?.totalStar.service * 100) / 5}%`,
                                        }}
                                        className="h-2 bg-[#e03] rounded-[100px]"
                                      ></div>
                                    </div>
                                  </div>
                                  <span className="basis-[5%] ml-5 font-medium text-right">
                                    {formatNumberStar(shop?.totalStar.service)}
                                  </span>
                                </>
                              ) : (
                                <span className="basis-[5%] ml-5 font-medium text-right">0</span>
                              )}
                            </div>
                            <div className="flex items-center justify-between text-base mb-[6px]">
                              <span className="basis-[30%]">Giá cả</span>
                              {shop?.reviews.length > 0 ? (
                                <>
                                  <div className="basis-[65%] w-full">
                                    <div className="relative inline-block w-full overflow-hidden align-middle bg-[#f5f5f5] rounded-[100px]">
                                      <div
                                        style={{
                                          width: `${(shop?.totalStar.price * 100) / 5}%`,
                                        }}
                                        className="h-2 bg-[#e03] rounded-[100px]"
                                      ></div>
                                    </div>
                                  </div>
                                  <span className="basis-[5%] ml-5 font-medium text-right">
                                    {formatNumberStar(shop?.totalStar.price)}
                                  </span>
                                </>
                              ) : (
                                <span className="basis-[5%] ml-5 font-medium text-right">0</span>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col l-4">
                        <div className="overflow-hidden pt-1 pb-[10px] h-full px-[14px] bg-white rounded-[10px] shadow-lg">
                          <h2 className="text-xl font-medium">Thông tin chi tiết</h2>
                          <div className="flex flex-col justify-between">
                            <div className="mt-2">
                              <div className="flex items-center justify-start text-base mb-[6px]">
                                <MdAttachMoney className="inline-block text-xl text-center" />
                                <span className="inline-block pl-[14px]">
                                  {shop?.price.min}đ - {shop?.price.max}đ
                                </span>
                              </div>
                              <div className="flex items-center justify-start text-base mb-[6px]">
                                <BsClock className="inline-block text-xl text-center" />
                                <div className="pl-[14px]">
                                  {shop?.status === 'openning' ? (
                                    <span className="font-semibold text-[#00b707]">
                                      Đang mở cửa
                                    </span>
                                  ) : shop?.status === 'closed' ? (
                                    <span className="font-semibold text-[#e03]">Đang đóng cửa</span>
                                  ) : (
                                    <span className="font-semibold text-[#ff9800]">
                                      Sắp đóng cửa
                                    </span>
                                  )}{' '}
                                  -{' '}
                                  <span className="cursor-pointer">
                                    {shop?.time.open} - {shop?.time.close}
                                  </span>
                                </div>
                              </div>
                              <div className="flex items-center justify-start text-base mb-[6px]">
                                <AiOutlineMail className="inline-block text-xl text-center" />
                                <p className="cursor-pointer inline-block pl-[14px]">Updating...</p>
                              </div>
                              <div className="flex items-center justify-start text-base mb-[6px]">
                                <FaFacebookSquare className="inline-block text-xl text-center" />
                                <a
                                  href={shop?.social.facebook}
                                  className="hover:decoration-solid hover:decoration-[#0770cd] hover:underline inline-block pl-[14px] text-[#0770cd]"
                                >
                                  {shop?.name}
                                </a>
                              </div>
                              <div className="flex items-center justify-start text-base mb-[6px]">
                                <BsInstagram className="inline-block text-xl text-center" />
                                <a
                                  href={shop?.social.instagram}
                                  className="hover:decoration-solid hover:decoration-[#0770cd] hover:underline inline-block pl-[14px] text-[#0770cd]"
                                >
                                  {shop?.slug}
                                </a>
                              </div>
                              <div className="flex items-center justify-start text-base mb-[6px]">
                                <BsTags className="inline-block text-xl text-center" />
                                <div className="flex flex-wrap pl-[14px]">
                                  {shop?.tags.map((tag: any, index: number) => (
                                    <Link
                                      to="/"
                                      key={index}
                                      className="tags-after flex items-center justify-center hover:decoration-solid hover:decoration-[#0770cd] hover:underline"
                                    >
                                      <span className="text-[#0770cd]">{tag.name}</span>
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col l-4">
                        <div className="overflow-hidden h-full pt-1 pb-[10px] px-[14px] bg-white rounded-[10px] shadow-lg">
                          <h2 className="text-xl font-medium">Địa điểm cụ thể</h2>
                          <div className="relative flex flex-col flex-1 height-details">
                            <div className="pointer grow my-1 bg-[#eee] h-full w-full relative cursor-pointer">
                              <img
                                src="https://api.mapbox.com/styles/v1/mapbox/outdoors-v11/static/pin-m-cafe+EE0033(105.7504738,21.0463162)/105.7504738,21.0463162,13,0/400x210?access_token=pk.eyJ1IjoiaG9haXBoYW4iLCJhIjoiY2s4NjRuNm40MGUweDNwcGZ4azZhMTA1MCJ9.rExJxHGtG7JXWJwEjJTTCg"
                                alt=""
                                className="object-cover w-full h-full cursor-pointer"
                              />
                            </div>
                            <div className="flex items-center justify-center absolute top-auto right-4 bottom-4 left-4 text-base py-[6px] px-[10px] rounded-md bg-white shadow">
                              <MdOutlineDirections className="inline-block text-xl" />
                              <a
                                href={`https://www.google.com/maps/dir/?api=1&destination=${shop?.address.geo.lat},${shop?.address.geo.long}`}
                                className="inline-block ml-3 hover:decoration-solid hover:decoration-black hover:underline"
                                rel="noreferrer"
                              >
                                {shop?.address.specific}
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  id="benefit"
                  className="relative block py-2 mb-5 bg-white rounded-[10px] cursor-pointer shadow-lg"
                >
                  {/* <div ref={sliderRef} className="keen-slider">
                    {shop?.benefits.map((benefit: any, index: number) => (
                      <BenefitItem
                      key={index}
                      icon={benefit.icon}
                      name={benefit.name}
                      />
                    ))}
                  </div> */}
                </div>
                <div id="review" className="grid">
                  <div className="row">
                    <div className="col l-8">
                      <div className="relative py-2 px-4 bg-white rounded-[10px] shadow-lg mb-5">
                        <div className="flex items-center justify-between pb-[10px]">
                          <h2 className="text-3xl font-medium">
                            Đánh giá từ cộng đồng{' '}
                            <span className="text-[#8a8a8a]">{`(${shop?.reviews.length})`}</span>
                          </h2>
                          <button
                            onClick={handleToggle}
                            className="hover:bg-[#be0129] flex items-center justify-center rounded-md bg-[#e03] text-white font-medium text-base p-2"
                          >
                            Viết đánh giá
                          </button>
                        </div>
                        <div className="arrow-review flex items-center justify-between h-[180px] py-[10px] px-4 relative rounded-xl bg-[linear-gradient(90deg,#ffb8b8,#ffddd8)]">
                          <div className="w-[30%] h-full text-center relative">
                            <img
                              src="https://ik.imagekit.io/reviewcafe/Online_Review-cuate_wG_WzURJF.svg"
                              alt=""
                              className="max-h-full align-middle"
                            />
                          </div>
                          <div className="grow py-[10px] px-2">
                            <h2 className="mb-3 text-2xl font-semibold">Bạn đã từng đến đây?</h2>
                            <span className="block mb-[2px] text-sm leading-[1.7]">
                              Chia sẻ trải nghiệm và cảm nhận của bản thân cho mọi người cùng biết{' '}
                              <FaHeart className="inline-block text-[#f44336]" />
                            </span>
                            <span className="block mb-[2px] text-sm leading-[1.7]">
                              Những review chất lượng sẽ được xuất hiện ở bảng tin đấy!
                            </span>
                          </div>
                        </div>
                        <div className="py-5 mt-5 border-t border-solid border-[#ddd]">
                          {shop?.reviews.length > 0 ? (
                            shop?.reviews.map((review: any, index: number) => (
                              <ReviewItem
                                avatar={review.author.avatar}
                                userName={review.author.userName}
                                displayName={review.author.displayName}
                                avgStar={review.avgStar}
                                title={review.title}
                                body={review.body}
                                images={review.images}
                                date={review.date}
                                index={index}
                                shopName={shop?.name}
                              />
                            ))
                          ) : (
                            <div>Hãy là người đầu tiên làm điều đó~~</div>
                          )}
                        </div>
                        {isToggle && (
                          <div className="fixed top-0 bottom-0 left-0 right-0 w-full h-full bg-[rgba(0,0,0,0.65)] z-50">
                            <div className="absolute top-0 bottom-0 left-0 right-0 flex items-center justify-center ">
                              <div className="w-[610px] relative max-h-[96%] flex flex-col flex-nowrap text-black overflow-hidden bg-white shadow-lg rounded-lg">
                                <div className="h-[50px] px-10 w-full shrink-0 text-center border-b border-solid border-[rgba(0,0,0,0.1)]">
                                  <div className="flex items-center justify-center h-full">
                                    <h2 className="overflow-hidden text-lg font-bold text-black whitespace-nowrap text-ellipsis">
                                      Đánh giá {shop.name}
                                    </h2>
                                  </div>
                                  <div
                                    onClick={handleToggle}
                                    className="w-[30px] h-[30px] text-lg absolute top-[10px] right-[10px] flex items-center justify-center bottom-auto left-auto cursor-pointer text-[#666] bg-[#e4e6eb] rounded-[50%]"
                                  >
                                    <FaTimes />
                                  </div>
                                </div>
                                <ReviewForm
                                id={shop.id}
                                />
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="col l-4">
                      <div className="sticky top-[73px] mb-5">
                        <div className="mb-5 p-4 bg-white rounded-[10px] shadow-lg">
                          <div>
                            <div className="flex items-center justify-center mb-2">
                              <b className="block text-2xl text-center py-2 px-4 mr-1 text-white bg-[#e03] rounded-md">
                                0
                              </b>
                              <div className="">
                                <h2 className="text-xl font-medium">Chưa có đánh giá</h2>
                                <span className="text-sm">/5 (0 đánh giá)</span>
                              </div>
                            </div>
                            <div className="relative">
                              {/* <div className="absolute flex items-center justify-center top-0 left-0 right-0 bottom-0 z-1 bg-[hsla(0,0%,100%,.65)]">
                                    <button className="button-review-animation text-[#e03] bg-transparent border-[#e03] border-4 border-solid cursor-pointer py-[10px] px-4 font-bold flex items-center justify-center rounded-md outline-0">Đánh giá ngay</button>
                                  </div> */}
                              <div className="flex items-center justify-between text-base mb-[6px]">
                                <span className="basis-[30%]">Vị trí</span>
                                <div className="basis-[65%] w-full">
                                  <div className="w-full h-2 bg-[#e03] rounded-[2em]"></div>
                                </div>
                                <span className="basis-[5%] ml-5 font-medium text-right">5.0</span>
                              </div>
                              <div className="flex items-center justify-between text-base mb-[6px]">
                                <span className="basis-[30%]">Không gian</span>
                                <div className="basis-[65%] w-full">
                                  <div className="w-full h-2 bg-[#e03] rounded-[2em]"></div>
                                </div>
                                <span className="basis-[5%] ml-5 font-medium text-right">5.0</span>
                              </div>
                              <div className="flex items-center justify-between text-base mb-[6px]">
                                <span className="basis-[30%]">Đồ uống</span>
                                <div className="basis-[65%] w-full">
                                  <div className="w-full h-2 bg-[#e03] rounded-[2em]"></div>
                                </div>
                                <span className="basis-[5%] ml-5 font-medium text-right">5.0</span>
                              </div>
                              <div className="flex items-center justify-between text-base mb-[6px]">
                                <span className="basis-[30%]">Phục vụ</span>
                                <div className="basis-[65%] w-full">
                                  <div className="w-full h-2 bg-[#e03] rounded-[2em]"></div>
                                </div>
                                <span className="basis-[5%] ml-5 font-medium text-right">5.0</span>
                              </div>
                              <div className="flex items-center justify-between text-base mb-[6px]">
                                <span className="basis-[30%]">Giá cả</span>
                                <div className="basis-[65%] w-full">
                                  <div className="w-full h-2 bg-[#e03] rounded-[2em]"></div>
                                </div>
                                <span className="basis-[5%] ml-5 font-medium text-right">5.0</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}
            <Related />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Place;
