import React from 'react'
import { RiArrowDownSLine } from 'react-icons/ri'
import { AiOutlineClose, AiOutlineStar, AiFillStar } from 'react-icons/ai'
import { MdAttachMoney } from 'react-icons/md'
import { GoLocation } from 'react-icons/go'
import { BsClock, BsBookmark } from 'react-icons/bs'
import { FiChevronLeft,FiChevronRight } from 'react-icons/fi'

import { Link } from 'react-router-dom'

const Search = () => {
    return (
        <div className="search">
            <div className="w-full min-h-screen">
                <div className="pt-5 min-h-[70vh]">
                    <div className="grid wide">
                        <div className="row">
                            <div className="col l-3">
                                <div className="relative cursor-pointer w-full h-[152px] mb-5 rounded-lg shadow-md bg-cover bg-[url(https://static.tacdn.com/img2/maps/img_map.png)] bg-no-repeat">
                                    <button className="font-bold h-10 py-[2px] px-[10px] text-black bg-white border-2 border-solid border-black flex items-center justify-center rounded-[10px] cursor-pointer outline-0 absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%]">Xem bản đồ</button>
                                </div>
                                <div className="relative w-full py-[10px] px-[14px] rounded-[10px] bg-white shadow-md">
                                    <div className="py-4 border-b border-b-[#e0e0e0]">
                                        <h2 className="text-xl font-semibold text-[rgba(0,0,0,.85)]">Lọc kết quả</h2>
                                    </div>
                                    <div>
                                        <div>
                                            <div className="flex items-center justify-between py-3 pl-2">
                                                <h2 className="text-base font-semibold text-[rgba(0,0,0,.85)]">Giờ mở cửa</h2>
                                                <RiArrowDownSLine className="w-5 h-5 cursor-pointer" />
                                            </div>
                                            <div className="p-[10px]">
                                                <div className="max-h-[220px] overflow-y-auto">
                                                    <div className="mb-[10px]">
                                                        <input checked={true} type="radio" id="all" className="radio-input" name="all" />
                                                        <label htmlFor="all" className="radio-label"></label>
                                                        <label htmlFor="all">Tất cả</label>
                                                    </div>
                                                    <div className="mb-[10px]">
                                                        <input type="radio" id="openning" className="radio-input" name="openning" />
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
                                            <div className="max-h-[222px] overflow-y-auto">
                                                <div className="mb-[10px]">
                                                    <label htmlFor="hai-chau">
                                                        <input type="checkbox" className="" />
                                                        <span>Quận Hải Châu</span>
                                                    </label>
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
                                            <strong>440</strong> {" "}
                                            địa điểm khớp với tìm kiếm của bạn:
                                            <small className="cursor-pointer mx-2 font-bold">Xóa tất cả bộ lọc</small>
                                        </span>
                                        <div className="text-base flex items-center">
                                            <span>Sắp xếp theo:</span>
                                            <div className="ml-1 p-1 border border-solid border-[#e5e5e5] rounded-sm">
                                                <select name="" id="">
                                                    <option className="text-sm" value="">Đúng nhất</option>
                                                    <option className="text-sm" value="">Điểm đánh giá</option>
                                                    <option className="text-sm" value="">Gần tôi nhất</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mb-[10px]">
                                        <div className="cursor-pointer inline-block mb-1 mr-2">
                                            <div className="text-base font-semibold py-1 px-2 text-[#e03] bg-white border border-solid border-[#e03] rounded-lg">
                                                <span className="">Đọc sách</span>
                                                <AiOutlineClose className="inline-block text-sm ml-1 text-[rgba(0,0,0,0.25)] cursor-pointer" />
                                            </div>
                                        </div>
                                        <div className="cursor-pointer inline-block mb-1 mr-2">
                                            <div className="text-base font-semibold py-1 px-2 text-[#e03] bg-white border border-solid border-[#e03] rounded-lg">
                                                <span className="">Đọc sách</span>
                                                <AiOutlineClose className="inline-block text-sm ml-1 text-[rgba(0,0,0,0.25)] cursor-pointer" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="min-h-[50vh] relative">
                                        <div>
                                            <div className="mb-5">
                                                <div className="relative flex bg-white rounded-lg shadow-md">
                                                    <Link target="blank" to="/" className="py-2 pl-2">
                                                        <div className="w-[270px] h-full overflow-hidden rounded">
                                                            <div className="w-full h-full relative overflow-hidden">
                                                                <div className="absolute top-0 left-0 w-full h-full">
                                                                    <img src="https://toidicafe.vn/static/images/2022/06/18/73d995a3-96a0-4c84-b880-febaf69e1454-284476309_103880252358724_7819.jpeg" srcSet="https://toidicafe.vn/static/images/2022/06/18/73d995a3-96a0-4c84-b880-febaf69e1454-284476309_103880252358724_7819.jpeg 2x" alt="" className="w-full h-full object-cover " />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </Link>
                                                    <div className="flex-shrink flex-grow pt-[6px] px-6 pb-6 min-h-[200px]">
                                                        <Link target="blank" to="/">
                                                            <h4 className="text-xl font-bold pt-[6px] pb-1">EEBakery Coffee</h4>
                                                        </Link>
                                                        <div className="text-base pt-[2px]">
                                                            <span className="text-[#e03] mr-[6px]">
                                                                <AiOutlineStar className="inline-block text-2xl" />
                                                                <AiOutlineStar className="inline-block text-2xl" />
                                                                <AiOutlineStar className="inline-block text-2xl" />
                                                                <AiOutlineStar className="inline-block text-2xl" />
                                                                <AiOutlineStar className="inline-block text-2xl" />
                                                            </span>
                                                            {"- "}
                                                            chưa có đánh giá
                                                        </div>
                                                        <div className="text-base pt-[6px] flex items-center gap-x-[10px]">
                                                            <MdAttachMoney className="inline-block text-xl" />
                                                            30.000đ - 60.000đ
                                                        </div>
                                                        <div className="text-base pt-[6px] flex items-center gap-x-[10px]">
                                                            <GoLocation className="inline-block text-xl" />
                                                            8 Ngõ 24 Đào Tấn, Ba Đình
                                                        </div>
                                                        <div className="text-base pt-[6px] flex items-center gap-x-[10px]">
                                                            <BsClock className="inline-block text-xl" />
                                                            <span className="font-bold text-[#00b707]">Đang mở cửa</span>
                                                            - {""}
                                                            07:00 - 23:00
                                                        </div>
                                                    </div>
                                                    <div className="absolute top-2 right-[10px] bottom-auto left-auto">
                                                        <div className="hover:text-[#e03] flex items-center justify-center relative cursor-pointer w-9 h-9 font-lg text-black bg-white rounded-[50%] shadow-md">
                                                            <BsBookmark></BsBookmark>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="w-full p-[14px] rounded-[10px]">
                                            <ul className="flex justify-center">
                                                <li className="mx-[10px] text-base text-[#999] cursor-not-allowed opacity-50 transition-all delay-[0.2s] pagi-action pagi-prev ">
                                                    <FiChevronLeft/>
                                                </li>
                                                <li className="hover:text-[#e03] mx-[10px] text-base text-[#999] cursor-pointer transition-all delay-[0.2s]">1</li>
                                                <li className="hover:text-[#e03] mx-[10px] text-base text-[#999] cursor-pointer transition-all delay-[0.2s] is-active">2</li>
                                                <li className="hover:text-[#e03] mx-[10px] text-base text-[#999] cursor-pointer transition-all delay-[0.2s]">3</li>
                                                <li className="hover:text-[#e03] mx-[10px] text-base text-[#999] cursor-pointer transition-all delay-[0.2s]">4</li>
                                                <li className="hover:text-[#e03] mx-[10px] text-base text-[#999] cursor-pointer transition-all delay-[0.2s]">5</li>
                                                <li className="hover:text-[#e03] mx-[10px] text-base text-[#999] cursor-pointer transition-all delay-[0.2s] pagi-action pagi-next">
                                                    <FiChevronRight/>
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
    )
}

export default Search