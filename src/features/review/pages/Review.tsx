import React, {useRef} from 'react';
import { AiOutlineClose, AiFillStar } from 'react-icons/ai';
import { FaTimes } from 'react-icons/fa';
import { GoLocation } from 'react-icons/go';
import { Link, useNavigate } from 'react-router-dom';
import useOnClickOutside from '../../../hooks/useClickOutSide';
import Create from '../components/Create';
import SearchBar from '../components/SearchBar';
import ReviewItem from '../components/ReviewItem';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { reviewActions, selectIsSearch, selectPlace, selectReviews } from '../reviewSlice';
interface ReviewModel {
  anonymous: Boolean;
  author: any;
  avgStar: number;
  body: string;
  date: Date;
  title: string;
  _id: string;
}
const Review = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate()
  const isSearch = useAppSelector(selectIsSearch);

  const { reviews, reviewsCount, avgRate } = useAppSelector(selectReviews);
  const { name, image, address, slug } = useAppSelector(selectPlace);
  const ref = useRef<HTMLDivElement | null>(null);
  useOnClickOutside(ref, () => dispatch(reviewActions.hideSearch()));
  const handleShowSearch = () => {
    dispatch(reviewActions.showSearch());
  };
  const handleClose = () => {
    dispatch(reviewActions.unPickedPlace())
  }
  const handleNavigate  = () => {
    navigate(`/place/${slug}`)
  }
  return (
    <div className="review">
      <div className="layout-main">
        <div className="grid wide">
          <div className="p-2 my-5 bg-white rounded-lg shadow-lg ">
            <div className="text-center  border-b border-solid border-b-[#eee] ">
              <p className="py-2 text-xl font-semibold ">Viết Review</p>
            </div>
            <div className="mt-3">
              <div className="row">
                <div className="col l-6">
                  <Create 
                  handleNavigate={handleNavigate}
                  />
                </div>
                <div className="col l-6">
                  <div className="p-4">
                    <h3 className="text-lg text-[#898c95] font-medium">Địa điểm</h3>
                    {name ? (
                      <div className="flex relative my-4 border border-solid border-[#d9d9d9] rounded-lg overflow-hidden ">
                        <div className="shrink-0 w-[210px] max-w-[160px] max-h-[160px] ">
                          <img
                            src={image}
                            alt=""
                            className="object-cover w-full h-full"
                          />
                        </div>
                        <div className="flex-1 p-4 overflow-hidden">
                          <Link to="/" className="text-lg font-bold text-black">
                            {name}
                          </Link>
                          <div className="text-base text-black pt-[6px] pb-[8px] overflow-hidden whitespace-nowrap text-ellipsis">
                           {address}
                          </div>
                          <div className="flex items-center">
                            <b>{avgRate}</b>
                            {" "}
                            <AiFillStar className="inline-block text-xl text-[#e03]"/>
                            <AiFillStar className="inline-block text-xl text-[#e03]"/>
                            <AiFillStar className="inline-block text-xl text-[#e03]"/>
                            <AiFillStar className="inline-block text-xl text-[#e03]"/>
                            <AiFillStar className="inline-block text-xl text-[#e03]"/>
                            - {" "} {reviewsCount} {" "} đánh giá
                          </div>
                        </div>
                        <div onClick={handleClose} className="absolute top-[6px] right-[6px] bottom-auto left-auto flex items-center justify-center w-[24px] h-[24px] text-center cursor-pointer text-[#b5b4b4] bg-[#e4e6eb] rounded-[50%]  ">
                          <AiOutlineClose className="text-sm"></AiOutlineClose>
                        </div>
                      </div>
                    ) : (
                      <div
                        onClick={handleShowSearch}
                        className="p-[30px] cursor-pointer text-center my-4 border border-dashed border-[#d9d9d9] rounded-xl"
                      >
                        <div className="flex items-center justify-center">
                          <GoLocation className="inline-block text-sm text-[#898c95] mr-1 " />
                          <span className="text-base text-[#898c95] ">
                            Nhấn vào đây để chọn địa điểm
                          </span>
                        </div>
                      </div>
                    )}
                    <h3 className="text-lg text-[#898c95] font-medium">Đánh giá gần đây</h3>
                    <div className="py-[6px] ">
                      {reviews
                        ? reviews.map((review: ReviewModel) => (
                            <ReviewItem
                              anonymous={review.anonymous}
                              author={review.author}
                              avgStar={review.avgStar}
                              body={review.body}
                              date={review.date}
                              title={review.title}
                              _id={review._id}
                            />
                          ))
                        : ''}
                    </div>
                  </div>
                  {isSearch && (
                    <div className="search-place">
                      <div className="fixed top-0 bottom-0 left-0 right-0 w-full h-full bg-[rgba(0,0,0,0.65)] z-50">
                        <div className="absolute top-0 bottom-0 left-0 right-0 flex items-center justify-center ">
                          <div
                            ref={ref}
                            className="w-[680px] relative max-h-[96%] flex flex-col flex-nowrap text-black overflow-hidden bg-white shadow-lg rounded-lg"
                          >
                            <div className="h-[50px] px-10 w-full shrink-0 text-center border-b border-solid border-[rgba(0,0,0,0.1)]">
                              <div className="flex items-center justify-center h-full">
                                <h2 className="overflow-hidden text-lg font-bold text-black whitespace-nowrap text-ellipsis">
                                  Chọn địa điểm đánh giá
                                </h2>
                              </div>
                              <div
                                onClick={() => dispatch(reviewActions.hideSearch())}
                                className="w-[30px] h-[30px] text-lg absolute top-[10px] right-[10px] flex items-center justify-center bottom-auto left-auto cursor-pointer text-[#666] bg-[#e4e6eb] rounded-[50%]"
                              >
                                <FaTimes />
                              </div>
                            </div>
                            <SearchBar />
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
