import React from 'react'
import { RiArrowDownSLine } from 'react-icons/ri'
import { AiOutlineClose, AiOutlineStar, AiFillStar } from 'react-icons/ai'
import { MdAttachMoney } from 'react-icons/md'
import { GoLocation } from 'react-icons/go'
import { BsClock, BsBookmark } from 'react-icons/bs'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'

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
                                            <div className="p-[10px]">
                                                <div className="max-h-[160px] overflow-y-auto custom-scrollbar">
                                                    <div className="mb-[10px]">
                                                        <input id="hai-chau" type="checkbox" />
                                                        <label className="text-base" htmlFor="hai-chau">Quận Hải Châu</label>
                                                    </div>
                                                    <div className="mb-[10px]">
                                                        <input id="son-tra" type="checkbox" />
                                                        <label className="text-base" htmlFor="son-tra">Quận Sơn Trà</label>
                                                    </div>
                                                    <div className="mb-[10px]">
                                                        <input id="thanh-khe" type="checkbox" />
                                                        <label className="text-base" htmlFor="thanh-khe">Quận Thanh Khê</label>
                                                    </div>
                                                    <div className="mb-[10px]">
                                                        <input id="cam-le" type="checkbox" />
                                                        <label className="text-base" htmlFor="cam-le">Quận Cẩm Lệ</label>
                                                    </div>
                                                    <div className="mb-[10px]">
                                                        <input id="lien-chieu" type="checkbox" />
                                                        <label className="text-base" htmlFor="lien-chieu">Quận Liên Chiểu.</label>
                                                    </div>
                                                    <div className="mb-[10px]">
                                                        <input id="ngu-hanh-son" type="checkbox" />
                                                        <label className="text-base" htmlFor="ngu-hanh-son">Quận Ngũ Hành Sơn.</label>
                                                    </div>
                                                    <div className="mb-[10px]">
                                                        <input id="son-tra" type="checkbox" />
                                                        <label className="text-base" htmlFor="son-tra">Quận Sơn Trà</label>
                                                    </div>
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
                                                    <div className="mb-[10px]">
                                                        <input id="chill" type="checkbox" />
                                                        <label className="text-base" htmlFor="chill">Chill</label>
                                                    </div>
                                                    <div className="mb-[10px]">
                                                        <input id="reading" type="checkbox" />
                                                        <label className="text-base" htmlFor="reading">Đọc sách</label>
                                                    </div>
                                                    <div className="mb-[10px]">
                                                        <input id="date" type="checkbox" />
                                                        <label className="text-base" htmlFor="date">Hẹn hò</label>
                                                    </div>
                                                    <div className="mb-[10px]">
                                                        <input id="working" type="checkbox" />
                                                        <label className="text-base" htmlFor="working">Làm việc</label>
                                                    </div>
                                                    <div className="mb-[10px]">
                                                        <input id="checkin" type="checkbox" />
                                                        <label className="text-base" htmlFor="checkin">Sống ảo</label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="flex items-center justify-between py-3 pl-2">
                                                <h2 className="text-base font-semibold text-[rgba(0,0,0,.85)]">Kiểu quán</h2>
                                                <RiArrowDownSLine className="w-5 h-5 cursor-pointer" />
                                            </div>
                                            <div className="p-[10px]">
                                                <div className="max-h-[160px] overflow-y-auto custom-scrollbar">
                                                    <div className="mb-[10px]">
                                                        <input id="acoustic" type="checkbox" />
                                                        <label className="text-base" htmlFor="acoustic">Cafe Acoustic</label>
                                                    </div>
                                                    <div className="mb-[10px]">
                                                        <input id="cheap" type="checkbox" />
                                                        <label className="text-base" htmlFor="cheap">Cafe bình dân</label>
                                                    </div>
                                                    <div className="mb-[10px]">
                                                        <input id="vintage" type="checkbox" />
                                                        <label className="text-base" htmlFor="vintage">Cafe cổ điển</label>
                                                    </div>
                                                    <div className="mb-[10px]">
                                                        <input id="lounge" type="checkbox" />
                                                        <label className="text-base" htmlFor="lounge">Cafe Lounge</label>
                                                    </div>
                                                    <div className="mb-[10px]">
                                                        <input id="outside" type="checkbox" />
                                                        <label className="text-base" htmlFor="outside">Cafe ngoài trời</label>
                                                    </div>
                                                    <div className="mb-[10px]">
                                                        <input id="book" type="checkbox" />
                                                        <label className="text-base" htmlFor="book">Cafe sách</label>
                                                    </div>
                                                    <div className="mb-[10px]">
                                                        <input id="luxurious" type="checkbox" />
                                                        <label className="text-base" htmlFor="luxurious">Cafe sang trọng</label>
                                                    </div>
                                                    <div className="mb-[10px]">
                                                        <input id="animals" type="checkbox" />
                                                        <label className="text-base" htmlFor="animals">Cafe thú cưng</label>
                                                    </div>
                                                    <div className="mb-[10px]">
                                                        <input id="view" type="checkbox" />
                                                        <label className="text-base" htmlFor="view">Cafe view đẹp</label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="flex items-center justify-between py-3 pl-2">
                                                <h2 className="text-base font-semibold text-[rgba(0,0,0,.85)]">Khoảng giá</h2>
                                                <RiArrowDownSLine className="w-5 h-5 cursor-pointer" />
                                            </div>
                                            <div className="p-[10px]">
                                                <div className="mb-[10px]">
                                                    <span className="block text-center text-lg text-[#e03] font-semibold">
                                                        0 {" "} ~ {" "} 300.000 {" "} VNĐ
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
                                                    <div className="mb-[10px]">
                                                        <input id="door-outside" type="checkbox" />
                                                        <label className="text-base" htmlFor="door-outside">Bàn ngoài trời</label>
                                                    </div>
                                                    <div className="mb-[10px]">
                                                        <input id="cake" type="checkbox" />
                                                        <label className="text-base" htmlFor="cake">Bánh ngọt</label>
                                                    </div>
                                                    <div className="mb-[10px]">
                                                        <input id="football" type="checkbox" />
                                                        <label className="text-base" htmlFor="football">Chiếu bóng đá</label>
                                                    </div>
                                                    <div className="mb-[10px]">
                                                        <input id="kids" type="checkbox" />
                                                        <label className="text-base" htmlFor="kids">Chỗ chơi trẻ em</label>
                                                    </div>
                                                    <div className="mb-[10px]">
                                                        <input id="parking" type="checkbox" />
                                                        <label className="text-base" htmlFor="parking">Chỗ đầu ôtô</label>
                                                    </div>
                                                    <div className="mb-[10px]">
                                                        <input id="machine" type="checkbox" />
                                                        <label className="text-base" htmlFor="machine">Máy lạnh & điều hòa</label>
                                                    </div>
                                                    <div className="mb-[10px]">
                                                        <input id="payment-card" type="checkbox" />
                                                        <label className="text-base" htmlFor="payment-card">Thanh toán bằng thẻ</label>
                                                    </div>
                                                    <div className="mb-[10px]">
                                                        <input id="musics" type="checkbox" />
                                                        <label className="text-base" htmlFor="musics">Nhạc sống</label>
                                                    </div>
                                                    <div className="mb-[10px]">
                                                        <input id="eat" type="checkbox" />
                                                        <label className="text-base" htmlFor="eat">Mang đồ ăn ngoài</label>
                                                    </div>
                                                    <div className="mb-[10px]">
                                                        <input id="pet" type="checkbox" />
                                                        <label className="text-base" htmlFor="pet">Mang thú cưng</label>
                                                    </div>
                                                    <div className="mb-[10px]">
                                                        <input id="smoking-zone" type="checkbox" />
                                                        <label className="text-base" htmlFor="smoking-zone">Khu vực hút thuốc</label>
                                                    </div>
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
                                            <small className="mx-2 font-bold cursor-pointer">Xóa tất cả bộ lọc</small>
                                        </span>
                                        <div className="flex items-center text-base">
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
                                        <div className="inline-block mb-1 mr-2 cursor-pointer">
                                            <div className="text-base font-semibold py-1 px-2 text-[#e03] bg-white border border-solid border-[#e03] rounded-lg">
                                                <span className="">Đọc sách</span>
                                                <AiOutlineClose className="inline-block text-sm ml-1 text-[rgba(0,0,0,0.25)] cursor-pointer" />
                                            </div>
                                        </div>
                                        <div className="inline-block mb-1 mr-2 cursor-pointer">
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
                                                            <div className="relative w-full h-full overflow-hidden">
                                                                <div className="absolute top-0 left-0 w-full h-full">
                                                                    <img src="https://toidicafe.vn/static/images/2022/06/18/73d995a3-96a0-4c84-b880-febaf69e1454-284476309_103880252358724_7819.jpeg" srcSet="https://toidicafe.vn/static/images/2022/06/18/73d995a3-96a0-4c84-b880-febaf69e1454-284476309_103880252358724_7819.jpeg 2x" alt="" className="object-cover w-full h-full " />
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
                                            <div className="mb-5">
                                                <div className="relative flex bg-white rounded-lg shadow-md">
                                                    <Link target="blank" to="/" className="py-2 pl-2">
                                                        <div className="w-[270px] h-full overflow-hidden rounded">
                                                            <div className="relative w-full h-full overflow-hidden">
                                                                <div className="absolute top-0 left-0 w-full h-full">
                                                                    <img src="https://toidicafe.vn/static/images/2022/06/18/73d995a3-96a0-4c84-b880-febaf69e1454-284476309_103880252358724_7819.jpeg" srcSet="https://toidicafe.vn/static/images/2022/06/18/73d995a3-96a0-4c84-b880-febaf69e1454-284476309_103880252358724_7819.jpeg 2x" alt="" className="object-cover w-full h-full " />
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
                                            <div className="mb-5">
                                                <div className="relative flex bg-white rounded-lg shadow-md">
                                                    <Link target="blank" to="/" className="py-2 pl-2">
                                                        <div className="w-[270px] h-full overflow-hidden rounded">
                                                            <div className="relative w-full h-full overflow-hidden">
                                                                <div className="absolute top-0 left-0 w-full h-full">
                                                                    <img src="https://toidicafe.vn/static/images/2022/06/18/73d995a3-96a0-4c84-b880-febaf69e1454-284476309_103880252358724_7819.jpeg" srcSet="https://toidicafe.vn/static/images/2022/06/18/73d995a3-96a0-4c84-b880-febaf69e1454-284476309_103880252358724_7819.jpeg 2x" alt="" className="object-cover w-full h-full " />
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
                                            <div className="mb-5">
                                                <div className="relative flex bg-white rounded-lg shadow-md">
                                                    <Link target="blank" to="/" className="py-2 pl-2">
                                                        <div className="w-[270px] h-full overflow-hidden rounded">
                                                            <div className="relative w-full h-full overflow-hidden">
                                                                <div className="absolute top-0 left-0 w-full h-full">
                                                                    <img src="https://toidicafe.vn/static/images/2022/06/18/73d995a3-96a0-4c84-b880-febaf69e1454-284476309_103880252358724_7819.jpeg" srcSet="https://toidicafe.vn/static/images/2022/06/18/73d995a3-96a0-4c84-b880-febaf69e1454-284476309_103880252358724_7819.jpeg 2x" alt="" className="object-cover w-full h-full " />
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
                                            <div className="mb-5">
                                                <div className="relative flex bg-white rounded-lg shadow-md">
                                                    <Link target="blank" to="/" className="py-2 pl-2">
                                                        <div className="w-[270px] h-full overflow-hidden rounded">
                                                            <div className="relative w-full h-full overflow-hidden">
                                                                <div className="absolute top-0 left-0 w-full h-full">
                                                                    <img src="https://toidicafe.vn/static/images/2022/06/18/73d995a3-96a0-4c84-b880-febaf69e1454-284476309_103880252358724_7819.jpeg" srcSet="https://toidicafe.vn/static/images/2022/06/18/73d995a3-96a0-4c84-b880-febaf69e1454-284476309_103880252358724_7819.jpeg 2x" alt="" className="object-cover w-full h-full " />
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
                                            <div className="mb-5">
                                                <div className="relative flex bg-white rounded-lg shadow-md">
                                                    <Link target="blank" to="/" className="py-2 pl-2">
                                                        <div className="w-[270px] h-full overflow-hidden rounded">
                                                            <div className="relative w-full h-full overflow-hidden">
                                                                <div className="absolute top-0 left-0 w-full h-full">
                                                                    <img src="https://toidicafe.vn/static/images/2022/06/18/73d995a3-96a0-4c84-b880-febaf69e1454-284476309_103880252358724_7819.jpeg" srcSet="https://toidicafe.vn/static/images/2022/06/18/73d995a3-96a0-4c84-b880-febaf69e1454-284476309_103880252358724_7819.jpeg 2x" alt="" className="object-cover w-full h-full " />
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
                                            <div className="mb-5">
                                                <div className="relative flex bg-white rounded-lg shadow-md">
                                                    <Link target="blank" to="/" className="py-2 pl-2">
                                                        <div className="w-[270px] h-full overflow-hidden rounded">
                                                            <div className="relative w-full h-full overflow-hidden">
                                                                <div className="absolute top-0 left-0 w-full h-full">
                                                                    <img src="https://toidicafe.vn/static/images/2022/06/18/73d995a3-96a0-4c84-b880-febaf69e1454-284476309_103880252358724_7819.jpeg" srcSet="https://toidicafe.vn/static/images/2022/06/18/73d995a3-96a0-4c84-b880-febaf69e1454-284476309_103880252358724_7819.jpeg 2x" alt="" className="object-cover w-full h-full " />
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
                                            <div className="mb-5">
                                                <div className="relative flex bg-white rounded-lg shadow-md">
                                                    <Link target="blank" to="/" className="py-2 pl-2">
                                                        <div className="w-[270px] h-full overflow-hidden rounded">
                                                            <div className="relative w-full h-full overflow-hidden">
                                                                <div className="absolute top-0 left-0 w-full h-full">
                                                                    <img src="https://toidicafe.vn/static/images/2022/06/18/73d995a3-96a0-4c84-b880-febaf69e1454-284476309_103880252358724_7819.jpeg" srcSet="https://toidicafe.vn/static/images/2022/06/18/73d995a3-96a0-4c84-b880-febaf69e1454-284476309_103880252358724_7819.jpeg 2x" alt="" className="object-cover w-full h-full " />
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
                                            <div className="mb-5">
                                                <div className="relative flex bg-white rounded-lg shadow-md">
                                                    <Link target="blank" to="/" className="py-2 pl-2">
                                                        <div className="w-[270px] h-full overflow-hidden rounded">
                                                            <div className="relative w-full h-full overflow-hidden">
                                                                <div className="absolute top-0 left-0 w-full h-full">
                                                                    <img src="https://toidicafe.vn/static/images/2022/06/18/73d995a3-96a0-4c84-b880-febaf69e1454-284476309_103880252358724_7819.jpeg" srcSet="https://toidicafe.vn/static/images/2022/06/18/73d995a3-96a0-4c84-b880-febaf69e1454-284476309_103880252358724_7819.jpeg 2x" alt="" className="object-cover w-full h-full " />
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
                                            <div className="mb-5">
                                                <div className="relative flex bg-white rounded-lg shadow-md">
                                                    <Link target="blank" to="/" className="py-2 pl-2">
                                                        <div className="w-[270px] h-full overflow-hidden rounded">
                                                            <div className="relative w-full h-full overflow-hidden">
                                                                <div className="absolute top-0 left-0 w-full h-full">
                                                                    <img src="https://toidicafe.vn/static/images/2022/06/18/73d995a3-96a0-4c84-b880-febaf69e1454-284476309_103880252358724_7819.jpeg" srcSet="https://toidicafe.vn/static/images/2022/06/18/73d995a3-96a0-4c84-b880-febaf69e1454-284476309_103880252358724_7819.jpeg 2x" alt="" className="object-cover w-full h-full " />
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
                                            <ul className="flex items-center justify-center">
                                                <li className="mx-[10px] text-lg text-[#999] cursor-not-allowed opacity-50 transition-all delay-[0.2s] pagi-action pagi-prev ">
                                                    <FiChevronLeft />
                                                </li>
                                                <li className="hover:text-[#e03] mx-[10px] text-lg text-[#999] cursor-pointer transition-all delay-[0.2s]">1</li>
                                                <li className="hover:text-[#e03] mx-[10px] text-lg text-[#999] cursor-pointer transition-all delay-[0.2s] is-active">2</li>
                                                <li className="hover:text-[#e03] mx-[10px] text-lg text-[#999] cursor-pointer transition-all delay-[0.2s]">3</li>
                                                <li className="hover:text-[#e03] mx-[10px] text-lg text-[#999] cursor-pointer transition-all delay-[0.2s]">4</li>
                                                <li className="hover:text-[#e03] mx-[10px] text-lg text-[#999] cursor-pointer transition-all delay-[0.2s]">5</li>
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
    )
}

export default Search