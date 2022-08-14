import React from 'react'
import { Link } from 'react-router-dom'
import ReadMore from '../components/ReadMore'

import { BsBookmark, BsCardImage, BsClock, BsInstagram, BsTags, BsCloudSun, BsCreditCard2Front, BsCheckCircleFill } from 'react-icons/bs'
import { GoLocation } from 'react-icons/go'
import { MdAttachMoney, MdOutlineDirections } from 'react-icons/md'
import { AiOutlineMail, AiOutlineWifi } from 'react-icons/ai'
import { FaFacebookSquare, FaCarAlt, FaShippingFast, FaPaw, FaBaby, FaHeart, FaEdit, FaRegHeart } from 'react-icons/fa'
import { GiCakeSlice, GiWindyStripes } from 'react-icons/gi'
import { BiDotsHorizontalRounded } from 'react-icons/bi'

import useSlider from '../../../hooks/useSlider'
import "keen-slider/keen-slider.min.css"

const Place = () => {
    const sliderRef = useSlider(6)
    return (
        <div className="place">
            <div className="w-full min-h-screen">
                <div className="pt-[10px]">
                    <div className="grid wide">
                        <div className="fixed top-0 left-0 bottom-auto right-auto z-10 visible w-full bg-white shadow-lg opacity-1">
                            <div className="flex items-center justify-between w-[1200px] m-auto">
                                <div className="whitespace-nowrap overflow-x-auto pl-[6px]">
                                    <nav>
                                        <ul className="flex">
                                            <li className="text-base cursor-pointer h-full leading-[1.143] pr-5">
                                                <Link to="/" className="p-3 border-b-2 border-solid block font-medium text-[#e03] border-[#e03]">
                                                    Hình ảnh
                                                </Link>
                                            </li>
                                            <li className="text-base cursor-pointer h-full leading-[1.143] pr-5">
                                                <Link to="/" className="block p-3 border-b-2 border-transparent border-solid">
                                                    Tổng quan
                                                </Link>
                                            </li>
                                            <li className="text-base cursor-pointer h-full leading-[1.143] pr-5">
                                                <Link to="/" className="block p-3 border-b-2 border-transparent border-solid">
                                                    Tiện ích
                                                </Link>
                                            </li>
                                            <li className="text-base cursor-pointer h-full leading-[1.143] pr-5">
                                                <Link to="/" className="block p-3 border-b-2 border-transparent border-solid">
                                                    Đánh giá
                                                </Link>
                                            </li>
                                            <li className="text-base cursor-pointer h-full leading-[1.143] pr-5">
                                                <Link to="/" className="block p-3 border-b-2 border-transparent border-solid">
                                                    Lân cận
                                                </Link>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                        <div className="p-2 mb-5 bg-white rounded-[10px] shadow-lg relative">
                            <div className="flex items-start justify-between pl-2">
                                <h2 className="text-3xl font-medium">EEBakery Coffee</h2>
                                <div className="flex items-center justify-center p-[6px]">
                                    <div className="relative flex items-center justify-center w-10 h-10 text-xl cursor-pointer mb-[-8px] bg-white rounded-[50%]">
                                        <BsBookmark />
                                    </div>
                                </div>
                            </div>
                            <div className="pl-2 text-base">
                                <p className="mb-1 mr-10">Có trà, có bánh, có những con cún dễ thương ❤️</p>
                                <p className="flex items-center">
                                    <GoLocation className="inline-block mr-1" />
                                    <span>
                                        8 Ngõ 24 Đào Tấn, Ba Đình
                                        {" "}
                                        <span> — </span>
                                        <Link to="/" className="hover:border-b hover:border-b-solid hover:border-b-[#e03] text-[#e03] font-medium">Hiển thị bản đồ</Link>
                                        {" "}
                                        <span> — </span>
                                        <Link to="/" className="hover:border-b hover:border-b-solid hover:border-b-[#e03] text-[#e03] font-medium">Xem bản đồ</Link>
                                        {" "}
                                        <span> — </span>
                                        <Link to="/" className="hover:border-b hover:border-b-solid hover:border-b-[#e03] text-[#e03] font-medium">Xem menu</Link>
                                    </span>
                                </p>
                            </div>
                            <div className="relative flex items-center justify-center mt-4 overflow-hidden bg-white rounded-md">
                                <div className="bg-place-overlay mr-[5px] h-[355px] shrink grow bg-[#eee] relative cursor-pointer bg-no-repeat bg-cover" style={{ backgroundImage: 'url(https://toidicafe.vn/static/images/2022/06/18/af241a9c-0da8-49c3-894e-f690e97d52e7-284476309_103880252358724_7819.jpeg?w=960)' }}>
                                </div>
                                <div className="bg-place-overlay mr-[5px] h-[355px] shrink grow bg-[#eee] relative cursor-pointer bg-no-repeat bg-cover" style={{ backgroundImage: 'url(https://toidicafe.vn/static/images/2022/06/18/af241a9c-0da8-49c3-894e-f690e97d52e7-284476309_103880252358724_7819.jpeg?w=960)' }}>
                                </div>
                                <div className="flex flex-col items-center justify-center bg-white h-[355px] grow shrink ">
                                    <div style={{ backgroundImage: 'url(https://toidicafe.vn/static/images/2022/06/18/af241a9c-0da8-49c3-894e-f690e97d52e7-284476309_103880252358724_7819.jpeg?w=960)' }} className="mb-[5px] grow-[4] relative w-full bg-[#eee] bg-place-overlay bg-no-repeat bg-cover"></div>
                                    <div className="flex items-center justify-center grow-[3] bg-white w-full">
                                        <div className="bg-place-overlay mr-[4px] h-full shrink grow bg-[#eee] relative cursor-pointer bg-no-repeat bg-cover" style={{ backgroundImage: 'url(https://toidicafe.vn/static/images/2022/06/18/af241a9c-0da8-49c3-894e-f690e97d52e7-284476309_103880252358724_7819.jpeg?w=960)' }}>
                                        </div>
                                        <div className="nohover bg-place-overlay h-full shrink grow bg-[#eee] relative cursor-pointer bg-no-repeat bg-cover" style={{ backgroundImage: 'url(https://toidicafe.vn/static/images/2022/06/18/af241a9c-0da8-49c3-894e-f690e97d52e7-284476309_103880252358724_7819.jpeg?w=960)' }}>
                                            <span className="absolute flex items-center justify-center w-full h-full text-xl font-medium text-white !z-1">
                                                + {" "} 3 {" "} ảnh
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <Link to="/">
                                <span className="absolute top-auto right-auto bottom-5 left-5 cursor-pointer text-base py-1 px-[10px] text-white bg-[rgba(0,0,0,.6)] rounded-[10px] shadow-md transition-all delay-[0.15s]">
                                    <BsCardImage className="inline-block pr-1 text-xl" />
                                    {" "}  Xem tất cả ảnh {" "} (8)
                                </span>
                            </Link>
                        </div>
                        <div className="relative mb-5">
                            <div className="grid">
                                <div className="row">
                                    <div className="col l-4">
                                        <div className="overflow-hidden pt-1 pb-[10px] px-[14px] bg-white rounded-[10px] shadow-lg">
                                            <h2 className="text-xl font-medium">Đánh giá</h2>
                                            <div className="flex items-center justify-center mb-2">
                                                <b className="block text-2xl text-center py-2 px-4 mr-1 text-white bg-[#e03] rounded-md">0</b>
                                                <div className="">
                                                    <h2 className="text-xl font-medium">Chưa có đánh giá</h2>
                                                    <span className="text-sm">
                                                        /5 {" "} (0{" "} đánh giá)
                                                    </span>
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
                                    <div className="col l-4">
                                        <div className="overflow-hidden pt-1 pb-[10px] h-full px-[14px] bg-white rounded-[10px] shadow-lg">
                                            <h2 className="text-xl font-medium">Thông tin chi tiết</h2>
                                            <div className="flex flex-col justify-between">
                                                <div className="mt-2">
                                                    <div className="flex items-center justify-start text-base mb-[6px]">
                                                        <MdAttachMoney className="inline-block text-xl text-center" />
                                                        <span className="inline-block pl-[14px]">35.000đ - 45.000đ</span>
                                                    </div>
                                                    <div className="flex items-center justify-start text-base mb-[6px]">
                                                        <BsClock className="inline-block text-xl text-center" />
                                                        <div className="pl-[14px]">
                                                            <span className="font-semibold text-[#00b707]">Đang mở cửa</span>
                                                            {" "}
                                                            - {" "}
                                                            <span className="cursor-pointer">
                                                                08:00 - 22:00
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="flex items-center justify-start text-base mb-[6px]">
                                                        <AiOutlineMail className="inline-block text-xl text-center" />
                                                        <a href="mailto:sunnygardencoffee@gmail.com" className="cursor-pointer inline-block pl-[14px]">sunnygardencoffee@gmail.com</a>
                                                    </div>
                                                    <div className="flex items-center justify-start text-base mb-[6px]">
                                                        <FaFacebookSquare className="inline-block text-xl text-center" />
                                                        <Link to="/" target="blank" className="hover:decoration-solid hover:decoration-[#0770cd] hover:underline inline-block pl-[14px] text-[#0770cd]">Sunny Garden Coffee Shop</Link>
                                                    </div>
                                                    <div className="flex items-center justify-start text-base mb-[6px]">
                                                        <BsInstagram className="inline-block text-xl text-center" />
                                                        <Link to="/" target="blank" className="hover:decoration-solid hover:decoration-[#0770cd] hover:underline inline-block pl-[14px] text-[#0770cd]">sunnygardencofffeehanoi</Link>
                                                    </div>
                                                    <div className="flex items-center justify-start text-base mb-[6px]" >
                                                        <BsTags className="inline-block text-xl text-center" />
                                                        <div className="flex flex-wrap pl-[14px]">
                                                            <Link to="/" className="tags-after flex items-center justify-center hover:decoration-solid hover:decoration-[#0770cd] hover:underline">
                                                                <span className="text-[#0770cd]">Cafe Vườn</span>
                                                            </Link>
                                                            <Link to="/" className="hover:decoration-solid hover:decoration-[#0770cd] hover:underline">
                                                                <span className="text-[#0770cd]">Cafe View Đẹp</span>
                                                            </Link>
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
                                                    <img src="https://api.mapbox.com/styles/v1/mapbox/outdoors-v11/static/pin-m-cafe+EE0033(105.7504738,21.0463162)/105.7504738,21.0463162,13,0/400x210?access_token=pk.eyJ1IjoiaG9haXBoYW4iLCJhIjoiY2s4NjRuNm40MGUweDNwcGZ4azZhMTA1MCJ9.rExJxHGtG7JXWJwEjJTTCg" alt="" className="object-cover w-full h-full cursor-pointer" />
                                                </div>
                                                <div className="flex items-center justify-center absolute top-auto right-4 bottom-4 left-4 text-base py-[6px] px-[10px] rounded-md bg-white shadow">
                                                    <MdOutlineDirections className="inline-block text-xl" />
                                                    <Link to="/" target="_blank" className="inline-block ml-3 hover:decoration-solid hover:decoration-black hover:underline">3 Võ Quý Huân, Bắc Từ Liêm</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="relative block py-2 mb-5 bg-white rounded-[10px] cursor-pointer shadow-lg">
                            <div ref={sliderRef} className="keen-slider">
                                <div className="keen-slider__slide">
                                    <div className="flex items-center text-center flex-col p-[6px] justify-center">
                                        <AiOutlineWifi className="inline-block font-bold mb-[6px] text-[#e03] text-2xl" />
                                        <span>Wi-Fi miễn phí</span>
                                    </div>
                                </div>
                                <div className="keen-slider__slide">
                                    <div className="flex items-center text-center flex-col p-[6px] justify-center">
                                        <BsCloudSun className="inline-block font-bold mb-[6px] text-[#e03] text-2xl" />
                                        <span>Bàn ngoài trời</span>
                                    </div>
                                </div>
                                <div className="keen-slider__slide">
                                    <div className="flex items-center text-center flex-col p-[6px] justify-center">
                                        <FaCarAlt className="inline-block font-bold mb-[6px] text-[#e03] text-2xl" />
                                        <span>Chỗ đậu ô tô</span>
                                    </div>
                                </div>
                                <div className="keen-slider__slide">
                                    <div className="flex items-center text-center flex-col p-[6px] justify-center">
                                        <GiCakeSlice className="inline-block font-bold mb-[6px] text-[#e03] text-2xl" />
                                        <span>Bánh ngọt</span>
                                    </div>
                                </div>
                                <div className="keen-slider__slide">
                                    <div className="flex items-center text-center flex-col p-[6px] justify-center">
                                        <BsCreditCard2Front className="inline-block font-bold mb-[6px] text-[#e03] text-2xl" />
                                        <span>Thanh toán bằng thẻ</span>
                                    </div>
                                </div>
                                <div className="keen-slider__slide">
                                    <div className="flex items-center text-center flex-col p-[6px] justify-center">
                                        <FaShippingFast className="inline-block font-bold mb-[6px] text-[#e03] text-2xl" />
                                        <span>Giao hàng</span>
                                    </div>
                                </div>
                                <div className="keen-slider__slide">
                                    <div className="flex items-center text-center flex-col p-[6px] justify-center">
                                        <GiWindyStripes className="inline-block font-bold mb-[6px] text-[#e03] text-2xl" />
                                        <span>Máy lạnh & điều hòa</span>
                                    </div>
                                </div>
                                <div className="keen-slider__slide">
                                    <div className="flex items-center text-center flex-col p-[6px] justify-center">
                                        <FaPaw className="inline-block font-bold mb-[6px] text-[#e03] text-2xl" />
                                        <span>Mang thú cưng</span>
                                    </div>
                                </div>
                                <div className="keen-slider__slide">
                                    <div className="flex items-center text-center flex-col p-[6px] justify-center">
                                        <FaBaby className="inline-block font-bold mb-[6px] text-[#e03] text-2xl" />
                                        <span>Chỗ chơi trẻ em</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="grid">
                            <div className="row">
                                <div className="col l-8">
                                    <div className="relative py-2 px-4 bg-white rounded-[10px] shadow-lg mb-5">
                                        <div className="flex items-center justify-between pb-[10px]">
                                            <h2 className="text-3xl font-medium">Đánh giá từ cộng đồng
                                                {" "}
                                                <span className="text-[#8a8a8a]">(1)</span>
                                            </h2>
                                            <button className="hover:bg-[#be0129] flex items-center justify-center rounded-md bg-[#e03] text-white font-medium text-base p-2">Viết đánh giá</button>
                                        </div>
                                        <div className="arrow-review flex items-center justify-between h-[180px] py-[10px] px-4 relative rounded-xl bg-[linear-gradient(90deg,#ffb8b8,#ffddd8)]">
                                            <div className="w-[30%] h-full text-center relative">
                                                <img src="https://ik.imagekit.io/reviewcafe/Online_Review-cuate_wG_WzURJF.svg" alt="" className="max-h-full align-middle" />
                                            </div>
                                            <div className="grow py-[10px] px-2">
                                                <h2 className="mb-3 text-2xl font-semibold">Bạn đã từng đến đây?</h2>
                                                <span className="block mb-[2px] text-sm leading-[1.7]">
                                                    Chia sẻ trải nghiệm và cảm nhận của bản thân cho mọi người cùng biết
                                                    {" "}
                                                    <FaHeart className="inline-block text-[#f44336]" />
                                                </span>
                                                <span className="block mb-[2px] text-sm leading-[1.7]">Những review chất lượng sẽ được xuất hiện ở bảng tin đấy!</span>
                                            </div>
                                        </div>
                                        <div className="py-5 mt-5 border-t border-solid border-[#ddd]">
                                            {/* commnets */}
                                            <div className="flex pb-1 mb-5">
                                                <div className="mr-5 text-center">
                                                    <Link to="/">
                                                        <div className="overflow-hidden border-0 rounded-[50%] w-[64px] h-[64px] cursor-pointer">
                                                            <div className="relative w-full h-full">
                                                                <div className="absolute top-0 left-0 w-full h-full">
                                                                    <img src="https://toidicafe.vn/static/images/user/622d8a7b5beae850b31efe4f.svg" alt="Nghiện Cafe" className="object-cover w-full h-ful" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </Link>
                                                    <div className="cursor-default leading-[1.2] mt-2 pb-[2px] text-[#aeaeae] border border-solid border-[#aeaeae] rounded">
                                                        <p className="flex items-center justify-center text-xs">
                                                            <FaEdit className="inline-block" />
                                                            <span className="inline-block ml-[2px]">27</span>
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="relative grow container-reviewer">
                                                    <div className="rounded-[10px] py-[5px] px-[15px] bg-[#f5f5f7]">
                                                        <div className="flex items-center justify-between py-1 border-b border-solid border-[#e0e0e0]">
                                                            <div className="flex justify-start item-start">
                                                                <div>
                                                                    <Link to="/" className="flex items-center justify-start text-lg font-semibold mr-[5px] text-black">
                                                                        Nghiện Cafe
                                                                        <BsCheckCircleFill className="mx-[5px] text-base inline-block text-[#00cbc6]" />
                                                                    </Link>
                                                                    <Link to="/" className="flex item-center justify-start text-lg font-semibold mr-[5px] text-black ">
                                                                        <span className="text-xs text-[#898c95] font-normal">
                                                                            Đã đánh giá {" "} 2 tháng trước
                                                                        </span>
                                                                    </Link>
                                                                </div>
                                                            </div>
                                                            <div className="flex flex-col items-end justify-center">
                                                                <span className="w-8 h-8 text-xs leading-8 overflow-hidden text-center text-white bg-[#e03] rounded-[50%]">
                                                                    <b>5.0</b>
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <div className="py-1 px-[2px]">
                                                            <div className="py-[5px] whitespace-pre-line text-base leading-6 break-words">
                                                                <ReadMore limit={240}>
                                                                    Mình nghĩ ai ở HN đủ lâu cũng đều ít nhất 1 lần từng nghe/ từng đi qua chiếc “ban công” siêu thơ này.
                                                                    Ban công cafe trong 1 căn biệt thự cổ, nằm ngay ngã 3 Đinh Liệt, Hàng Bạc, cùng với “giao diện” ko lẫn vào đâu được. Ko gian bên trong khá rộng, ấm cúng và gần gũi, đương nhiên ko thể thiếu những góc ban công signature của quán. Đặc biệt trên tầng 2 có 1 phòng hoa xinh ngất ngây,
                                                                    Ngoài đồ uống ra ở đây còn phục vụ đồ ăn, highly recommend cho các đôi đi hẹn hò, hoặc muốn tổ chức tiệc nhỏ buổi tối, từ vị trí, ko gian, đến menu đều rất hợp lý.
                                                                    Mn đến quán vào cuối tuần có phố đi bộ thì nên gửi xe trước ở 26 Lương Ngọc Quyến nha, hôm mình tới ko biết nên lúc sau phải dắt xe đi gửi nên cũng hơi vất vả.
                                                                    Cre: Chi Linh Hoàng
                                                                </ReadMore>
                                                            </div>
                                                            <div className="flex items-center justify-start w-full whitespace-nowrap overflow-x-auto overflow-y-hidden relative pb-[5px] mt-[6px]">
                                                                <div className="relative w-[116px] h-[116px] cursor-pointer overflow-hidden mr-2 rounded-md bg-place-overlay ">
                                                                    <div className="relative w-full h-full ">
                                                                        <div className="absolute top-0 left-0 w-full h-full">
                                                                            <img src="https://toidicafe.vn/static/images/2022/06/05/6916a657-902a-49bf-8f9a-279dcc87ba06-283993292_3680740732153027_274.jpeg?w=116&h=116" alt="" className="object-cover w-full h-full rounded" />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="relative w-[116px] h-[116px] cursor-pointer overflow-hidden mr-2 rounded-md bg-place-overlay ">
                                                                    <div className="relative w-full h-full ">
                                                                        <div className="absolute top-0 left-0 w-full h-full">
                                                                            <img src="https://toidicafe.vn/static/images/2022/06/05/6916a657-902a-49bf-8f9a-279dcc87ba06-283993292_3680740732153027_274.jpeg?w=116&h=116" alt="" className="object-cover w-full h-full rounded" />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="after:opacity-100 relative w-[116px] h-[116px] cursor-pointer overflow-hidden mr-2 rounded-md bg-place-overlay">
                                                                    <div className="relative w-full h-full ">
                                                                        <div className="absolute top-0 left-0 w-full h-full">
                                                                            <img src="https://toidicafe.vn/static/images/2022/06/05/6916a657-902a-49bf-8f9a-279dcc87ba06-283993292_3680740732153027_274.jpeg?w=116&h=116" alt="" className="object-cover w-full h-full rounded" />
                                                                        </div>
                                                                    </div>
                                                                    <span className=" absolute text-white text-base font-medium z-[1] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"> +3 ảnh</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="flex items-center justify-between px-[10px] mt-[6px]">
                                                        <div className="flex items-center">
                                                            <button className="flex items-center text-sm cursor-pointer gap-x-1 dot-after">
                                                                <FaRegHeart className="inline-block" />
                                                                <span>1 thích</span>
                                                            </button>
                                                            <button className="text-sm cursor-pointer">
                                                                <span>Trả lời</span>
                                                            </button>
                                                        </div>
                                                        <div>
                                                            <button className="cursor-pointer block text-lg mt-[-6px] mr-[2px]">
                                                                <BiDotsHorizontalRounded className="text-2xl" />
                                                            </button>
                                                        </div>
                                                    </div>
                                                    <div className="mt-4 pl-[10px] border-l border-solid border-[#f1f1f1] ">
                                                        {/* reply comments */}
                                                        <div className="flex pb-1 mb-5">
                                                            <div className="mr-5 text-center">
                                                                <Link to="/">
                                                                    <div className="w-[49px] h-[49px] rounded-[50%] overflow-hidden border-none">
                                                                        <div className="relative w-full h-full">
                                                                            <div className="absolute top-0 left-0 w-full h-full cursor-pointer">
                                                                                <img src="https://toidicafe.vn/static/images/2022/06/05/5023c036-af96-4709-9d41-7419d7995d3e-278116263_1530173187377565_476.jpeg" alt="" className="object-cover w-full h-full" />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </Link>
                                                            </div>
                                                            <div className="relative grow container-reply">
                                                                <div className="py-[5px] px-[15px] rounded-lg bg-[#f5f5f7]">
                                                                    <div className="flex items-center justify-between py-1 border-b border-solid border-[#e0e0e0]">
                                                                        <Link to="/" className="inline-block text-lg font-medium text-black hover:decoration-solid hover:decoration-black hover:underline">
                                                                            Vân Thảo
                                                                        </Link>
                                                                        <span className="text-xs font-normal text-[#898c95]">2 tháng trước</span>
                                                                    </div>
                                                                    <div className="py-1 px-[2px]">
                                                                        <div className="py-[5px] whitespace-pre-line text-base leading-6 break-words">
                                                                            <ReadMore limit={240}>
                                                                                Hi vọng mọi người chưa quên quán cafe cổ kính, nên thơ giữa lòng phố cổ này. Đúng như tên gọi Ban Công, quán cafe đầy thơ mộng như mùa thu Hà Nội. Nhân dịp tháng mới, cùng dịp nghỉ lễ 2/9 trời chớm sang thu mình post ảnh cũ mình đến quán từ hồi mới mở 🤣🤣🤣
                                                                            </ReadMore>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="flex items-center justify-between px-[10px] mt-[6px]">
                                                                    <div className="flex items-center">
                                                                        <button className="flex items-center text-sm cursor-pointer gap-x-1 dot-after">
                                                                            <FaRegHeart className="inline-block" />
                                                                            <span>1 thích</span>
                                                                        </button>
                                                                        <button className="text-sm cursor-pointer">
                                                                            <span>Trả lời</span>
                                                                        </button>
                                                                    </div>
                                                                    <div>
                                                                        <button className="cursor-pointer block text-lg mt-[-6px] mr-[2px]">
                                                                            <BiDotsHorizontalRounded className="text-2xl" />
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>                                                       
                                                    </div>
                                                </div>
                                            </div>                                            
                                        </div>
                                    </div>
                                </div>
                                <div className="col l-4">

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Place