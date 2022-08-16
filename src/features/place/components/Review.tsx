import React, { useState } from 'react'
import { FaTimes } from 'react-icons/fa'
import RatingStar from '../components/RatingStar'
import RatingText from '../components/RatingText'

interface Props {
    isOpenReview:Boolean
    handleOpenReview:any
}

const Review = ({isOpenReview, handleOpenReview} : Props) => {
    const [ratingPosition, setRatingPosition] = useState(0)
    const [ratingSpace, setRatingSpace] = useState(0)
    const [ratingPrice, setRatingPrice] = useState(0)
    const [ratingDrinks, setRatingDrinks] = useState(0)
    const [ratingService, setRatingService] = useState(0)

    const handleRatingPosition = (rate: number) => setRatingPosition(rate)
    const handleRatingSpace = (rate: number) => setRatingSpace(rate)
    const handleRatingDrinks = (rate: number) => setRatingDrinks(rate)
    const handleRatingService = (rate: number) => setRatingService(rate)
    const handleRatingPrice = (rate: number) => setRatingPrice(rate)
    return ( isOpenReview &&
        <div className="fixed top-0 bottom-0 left-0 right-0 w-full h-full bg-[rgba(0,0,0,0.65)] z-50">
            <div className="absolute top-0 bottom-0 left-0 right-0 flex items-center justify-center ">
                <div className="w-[610px] relative max-h-[96%] flex flex-col flex-nowrap text-black overflow-hidden bg-white shadow-lg rounded-lg">
                    <div className="h-[50px] px-10 w-full shrink-0 text-center border-b border-solid border-[rgba(0,0,0,0.1)]">
                        <div className="flex items-center justify-center h-full">
                            <h2 className="overflow-hidden text-lg font-bold text-black whitespace-nowrap text-ellipsis">Đánh giá EEBakery Coffee</h2>
                        </div>
                        <div onClick={handleOpenReview} className="w-[30px] h-[30px] text-lg absolute top-[10px] right-[10px] flex items-center justify-center bottom-auto left-auto cursor-pointer text-[#666] bg-[#e4e6eb] rounded-[50%]">
                            <FaTimes />
                        </div>
                    </div>
                    <div className="grow min-h-[200px] overflow-y-auto p-4">
                        <div className="mb-3">
                            <h3 className="text-base text-[#898c95] font-medium">Xếp hạng của bạn</h3>
                            <div className="flex items-center justify-between pr-5 pl-[10px]">
                                <span className="flex-1 text-base">Vị trí</span>
                                <div className="flex-[2] text-3xl">
                                    <RatingStar handleRating={handleRatingPosition} rating={ratingPosition} />
                                </div>
                                <div className="flex-1">
                                    <div className="relative inline-block text-base font-medium h-8 leading-8 pr-3 pl-[6px] ml-5 mt-1 text-white bg-[#e03] rounded-t">
                                        <RatingText rating={ratingPosition} />
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center justify-between pr-5 pl-[10px]">
                                <span className="flex-1 text-base">Không gian</span>
                                <div className="flex-[2] text-3xl">
                                    <RatingStar handleRating={handleRatingSpace} rating={ratingSpace} />
                                </div>
                                <div className="flex-1">
                                    <div className="relative inline-block text-base font-medium h-8 leading-8 pr-3 pl-[6px] ml-5 mt-1 text-white bg-[#e03] rounded-t">
                                        <RatingText rating={ratingSpace} />
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center justify-between pr-5 pl-[10px]">
                                <span className="flex-1 text-base">Đồ uống</span>
                                <div className="flex-[2] text-3xl">
                                    <RatingStar handleRating={handleRatingDrinks} rating={ratingDrinks} />
                                </div>
                                <div className="flex-1">
                                    <div className="relative inline-block text-base font-medium h-8 leading-8 pr-3 pl-[6px] ml-5 mt-1 text-white bg-[#e03] rounded-t">
                                        <RatingText rating={ratingDrinks} />
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center justify-between pr-5 pl-[10px]">
                                <span className="flex-1 text-base">Phục vụ</span>
                                <div className="flex-[2] text-3xl">
                                    <RatingStar handleRating={handleRatingService} rating={ratingService} />
                                </div>
                                <div className="flex-1">
                                    <div className="relative inline-block text-base font-medium h-8 leading-8 pr-3 pl-[6px] ml-5 mt-1 text-white bg-[#e03] rounded-t">
                                        <RatingText rating={ratingService} />
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center justify-between pr-5 pl-[10px]">
                                <span className="flex-1 text-base">Giá cả</span>
                                <div className="flex-[2] text-3xl">
                                    <RatingStar handleRating={handleRatingPrice} rating={ratingPrice} />
                                </div>
                                <div className="flex-1">
                                    <div className="relative inline-block text-base font-medium h-8 leading-8 pr-3 pl-[6px] ml-5 mt-1 text-white bg-[#e03] rounded-t">
                                        <RatingText rating={ratingPrice} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mb-2">
                            <h3 className="text-base text-[#898c95] mb-2 font-medium">Đánh giá của bạn</h3>
                            <div className="w-full mb-[10px]">
                                <div className="mb-[10px]">
                                    <input type="text" className="outline-0 w-full px-[11px] py-1 rounded-md text-base text-black border border-solid border-[#e5e5e5]" value="Đánh giá của Ke hoc viec cho EEBakery Coffee" />
                                </div>
                                <textarea className="focus:ring-[#fa284e] focus:border-[#fa284e] focus:shadow-md border border-solid border-[#e5e5e5] w-full h-[114px] min-h-[114px] overflow-y-hidden resize-none text-ellipsis text-base rounded-md outline-0 py-[6px] px-3" placeholder="Nhập nội dung đánh giá">
                                </textarea>
                                <div className="text-right text-xs italic text-[#666]">
                                    <span>0 ký tự (tối thiểu 10 ký tự)</span>
                                </div>
                            </div>
                        </div>
                        {/* add img */}
                        <div className="mb-2">
                        </div>
                        <div>
                            <div className="flex items-center justify-between">
                                <h3 className="text-lg text-[#898c95] font-medium">Đánh giá ẩn danh</h3>
                                <label htmlFor="checked-toggle" className="relative inline-flex items-center cursor-pointer">
                                    <input type="checkbox" value="" id="checked-toggle" className="sr-only peer" checked={true} />
                                    <div className="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#e03]"></div>
                                </label>
                            </div>
                            <small className="block text-[#a1a1a1] mr-[56px]">Tên của bạn sẽ hiển thị như h*****g và không hiển thị trên dòng thời gian của bạn</small>
                        </div>
                    </div>
                    <div className="flex items-center justify-end p-4 border-t border-solid border-[rgba(0,0,0,.1)]">
                        <button className="cursor-default text-[#bcc0c4] bg-[#e4e6eb] text-base font-medium py-[6px] px-[10px] rounded-md flex items-center justify-center">Gửi đánh giá</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Review