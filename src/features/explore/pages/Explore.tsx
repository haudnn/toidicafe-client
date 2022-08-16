import React from 'react'
import { AiFillCaretRight, AiOutlineHeart, AiFillHeart } from 'react-icons/ai'
import { BsCheckCircleFill, BsFlag, BsLink45Deg } from 'react-icons/bs'
import { FaStar, FaRss } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { BiComment, BiDotsHorizontalRounded } from 'react-icons/bi'
import { FiUserCheck } from 'react-icons/fi'
import useToggle from '../../../hooks/useToggle'
import ReadMore from '../../../components/Common/ReadMore'
import { RiShareForwardLine } from 'react-icons/ri'
import defaultavt from '../../../assets/img/default-avt.jpg'
import { GiStarFormation } from 'react-icons/gi'

const Explore = () => {
    const { isToggle, handleToggle } = useToggle()
    return (
        <div className="explore">
            <div className="layout-main">
                <div className="pt-[10px]">
                    <div className="absolute top-[60px] right-auto bottom-auto left-0 w-full h-[220px] mb-6 bg-explore"></div>
                    <div className="grid wide">
                        <div className="row">
                            <div className="relative col l-8">
                                <div>
                                    <div className="py-[12px] px-4 mb-5 bg-white rounded-[10px] shadow-md">
                                        <div className="pb-1">
                                            <div className="relative flex items-center justify-start">
                                                <div className="bg-[#eee] flex-grow-0 flex-shrink-0 basis-[auto] cursor-pointer w-[46px] h-[46px] rounded-[50%] border-0 overflow-hidden">
                                                    <div className="relative w-full h-full">
                                                        <div className="absolute top-0 left-0 w-full h-full">
                                                            <img src="https://toidicafe.vn/static/images/user/6204bcbe2d1cda7b812ce7c5.jpeg" alt="" className="object-cover w-full h-full" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="mr-[30px] ml-2 grow">
                                                    <Link to="/" className="link-hover-black inline-flex items-center justify-center text-lg font-semibold mr-[5px] text-black leading-[.4px]">
                                                        Anh Quỳnh
                                                        <BsCheckCircleFill className="ml-[5px] text-base inline-block text-[#00cbc6]" />
                                                    </Link>
                                                    <AiFillCaretRight className="inline-block text-xs text-[#cbcbcb] fill-[#cbcbcb]" />
                                                    <Link to="/" className="link-hover-black inline-flex items-center justify-center text-lg font-semibold mr-[5px] text-black leading-[.4px]">
                                                        Noọng Coffee
                                                    </Link>
                                                    <div className="flex items-center justify-start">
                                                        <span className="flex items-center justify-center">
                                                            <b className="mr-1 text-sm">5.0</b>
                                                            <FaStar className="inline-block text-[#e03] text-sm" />
                                                            <FaStar className="inline-block text-[#e03] text-sm" />
                                                            <FaStar className="inline-block text-[#e03] text-sm" />
                                                            <FaStar className="inline-block text-[#e03] text-sm" />
                                                            <FaStar className="inline-block text-[#e03] text-sm" />
                                                        </span>
                                                        <span className="inline-block w-1 h-1 rounded-[50%] bg-[#cbcbcb] mx-[6px]"></span>
                                                        <Link to="/">
                                                            <span className="text-[#898c95] text-sm">2 tháng trước</span>
                                                        </Link>
                                                    </div>
                                                </div>
                                                <button onClick={handleToggle} className="cursor-pointer relative top-0 right-[4px] bottom-auto left-auto w-[30px]
                                                    h-[30px] text-center">
                                                    <BiDotsHorizontalRounded className="text-base inline-block leading-[30px] w-[30px]
                                                    h-[30px] text-[#a5a5a5]" />
                                                    {isToggle && <div className="absolute right-0 top-full bottom-auto left-auto bg-white rounded-md p-[6px] shadow-lg">
                                                        <Link to="/" className="hover:bg-[#f6f6f6] flex items-center justify-start text-base py-[6px] px-3 font-medium whitespace-nowrap rounded">
                                                            <BsFlag className="inline-block w-[30px] text-xl pr-[10px]"></BsFlag>
                                                            <span>Báo cáo</span>
                                                        </Link>
                                                        <Link to="/" className="hover:bg-[#f6f6f6] flex items-center justify-start text-base py-[6px] px-3 font-medium whitespace-nowrap rounded">
                                                            <BsLink45Deg className="inline-block w-[30px] text-xl pr-[10px]"></BsLink45Deg>
                                                            <span>Sao chép liên kết</span>
                                                        </Link>

                                                    </div>}
                                                </button>
                                            </div>
                                        </div>
                                        <div className="py-1 px-[2px]">
                                            <div className="py-[5px] whitespace-pre-line text-base leading-6 break-words">
                                                <ReadMore limit={300}>
                                                    CŨNG BÀY ĐẶT ĐI THEO REVIEW NHƯNG NÓ LẠ LẮM🆘⁉️
                                                    À thì gọi là đi cà phê để giải STRESS nhưng về bị STRESS hơn vì chỉnh ảnh dùng cả năm không hết🥲 Chuyện là mình có nhìn thấy một bài review về quán cà phê mang âm hưởng Tây Bắc mỹ miều nên cũng nhủ lòng phải đi cho bằng được vì nhìn đẹp lạ lắm.
                                                    Theo cái nhìn tổng quan của mình thì quán cũng bé thôi nhưng chia làm 2 gian, 1 gian tone trầm bởi sự bao bọc của gỗ và gạch đỏ nhìn vintage cực, gian sau cũng vậy nhưng là không gian mở với lối đi dọc kết hợp cùng bể cá, những hàng vạn liên thanh treo trên những cột gỗ đung đưa theo những cơn gió hè rất thoáng và chill. Khu chụp ảnh cửa sau cũng đẹp phải biết!!
                                                    Đồ uống ở mức trung bình nhé, khuyến khích mọi người gọi những món best seller và signature để uống cho thuận miệng. Nhân viên tươi không cần tưới luôn, có buổi mình đến gặp được bạn nhân viên đẹp trai cực mà quên không chụp lại, không biết khi nào mới có ca của bạn ý😘
                                                    Nếu bạn là người dễ tính thì đây là quán cà phê nhất định phải đến trải nghiệm một lần và biết đâu nó sẽ níu giữ bạn lại chốn thơ thiên cảnh này❗️
                                                </ReadMore>
                                            </div>
                                            <div className="h-[640px] -mb-1">
                                                <div className="relative flex flex-wrap h-full w-full mt-[14px]">
                                                    <div className="gridphoto-images relative cursor-pointer border-b border-r border-solid border-r-[#fff] border-l-[#fff]">
                                                        <div className="relative w-full h-full">
                                                            <div className="absolute top-0 left-0 w-full h-full">
                                                                <img src="https://toidicafe.vn/static/images/2022/06/18/882c305a-33e2-4af4-8bd7-92d1d7d9742c-287237482_1327099074480871_208.jpeg?w=640" alt="" className="object-cover w-full h-full" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="gridphoto-images relative cursor-pointer border-b border-r border-solid border-r-[#fff] border-l-[#fff]">
                                                        <div className="relative w-full h-full">
                                                            <div className="absolute top-0 left-0 w-full h-full">
                                                                <img src="https://toidicafe.vn/static/images/2022/06/18/882c305a-33e2-4af4-8bd7-92d1d7d9742c-287237482_1327099074480871_208.jpeg?w=640" alt="" className="object-cover w-full h-full" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="gridphoto-images relative cursor-pointer border-b border-r border-solid border-r-[#fff] border-l-[#fff]">
                                                        <div className="relative w-full h-full">
                                                            <div className="absolute top-0 left-0 w-full h-full">
                                                                <img src="https://toidicafe.vn/static/images/2022/06/18/882c305a-33e2-4af4-8bd7-92d1d7d9742c-287237482_1327099074480871_208.jpeg?w=640" alt="" className="object-cover w-full h-full" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="gridphoto-images relative cursor-pointer border-b border-r border-solid border-r-[#fff] border-l-[#fff]">
                                                        <div className="relative w-full h-full">
                                                            <div className="absolute top-0 left-0 w-full h-full">
                                                                <img src="https://toidicafe.vn/static/images/2022/06/18/882c305a-33e2-4af4-8bd7-92d1d7d9742c-287237482_1327099074480871_208.jpeg?w=640" alt="" className="object-cover w-full h-full" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="gridphoto-images bg-overlay relative cursor-pointer border-b border-r border-solid border-r-[#fff] border-l-[#fff]">
                                                        <div className="relative w-full h-full">
                                                            <div className="absolute top-0 left-0 w-full h-full">
                                                                <img src="https://toidicafe.vn/static/images/2022/06/18/882c305a-33e2-4af4-8bd7-92d1d7d9742c-287237482_1327099074480871_208.jpeg?w=640" alt="" className="object-cover w-full h-full" />
                                                            </div>
                                                        </div>
                                                        <span className="absolute text-4xl font-medium text-white z-[1] top-1/2 left-1/2 -translate-y-[50%] -translate-x-[50%]">
                                                            +7
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="mt-[10px] mb-[5px] flex items-center justify-between ">
                                                <div className="flex items-center justify-center">
                                                    <AiFillHeart className="inline-block text-xl text-[#e03] mr-[6px]  " />
                                                    <span className="text-sm cursor-default">494</span>
                                                </div>
                                                <div>
                                                    <span className="inline-block mr-[6px] text-sm cursor-default">62 bình luận</span>
                                                    <span className="text-sm cursor-default">33 lượt chia sẻ</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex items-center justify-around py-1 border-t border-b border-solid border-t-[#eee] border-b-[#eee]">
                                            <button className="flex items-center justify-center w-full py-1 text-base transition-all cursor-pointer outline-0">
                                                <AiOutlineHeart className="inline-block mr-[6px] text-xl" />
                                                <span>Thích</span>
                                            </button>
                                            <button className="flex items-center justify-center w-full py-1 text-base transition-all cursor-pointer outline-0">
                                                <BiComment className="inline-block mr-[6px] text-xl" />
                                                <span>Bình luận</span>
                                            </button>
                                            <button className="flex items-center justify-center w-full py-1 text-base transition-all cursor-pointer outline-0">
                                                <RiShareForwardLine className="inline-block mr-[6px] text-xl" />
                                                <span>Chia sẻ</span>
                                            </button>

                                        </div>
                                        <div className="flex pt-[10px] px-[6px] pb-[2px]">
                                            <div style={{ backgroundImage: `url(${defaultavt})` }} className="avt-comment-bg"></div>
                                            <div className="relative w-full">
                                                <textarea className="pt-[6px] h-[38px] min-h-[38px] max-h-[110px] resize-none text-ellipsis w-full outline-0 ml-[6px] px-3 rounded-[18px] bg-[#f5f5f7] border border-solid border-transparent" placeholder="Viết bình luận..."></textarea>
                                            </div>
                                        </div>
                                        <div className="pt-4">
                                            <div className="flex">
                                                <div className="text-center mr-[6px]">
                                                    <div className="shrink-0 grow-0 basis-auto cursor-pointer w-9 h-9 rounded-[50%] overflow-hidden border-0">
                                                        <div className="relative w-full h-full">
                                                            <div className="absolute top-0 left-0 w-full h-full">
                                                                <img src="https://toidicafe.vn/static/images/2022/06/05/5023c036-af96-4709-9d41-7419d7995d3e-278116263_1530173187377565_476.jpeg" alt="" className="object-cover w-full h-full" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="relative break-words grow">
                                                    <div className="py-2 px-4 rounded-[18px] bg-[#f5f5f7] text-sm">
                                                        <div className="flex items-center justify-start pb-[2px]">
                                                            <Link to="/" className="font-semibold tracking-[.4px] mr-[6px] text-black link-hover-black">Vân Thảo</Link>
                                                            <span className="text-xs text-[#898c95]">1 ngày trước</span>
                                                        </div>
                                                        <div>
                                                            <p>Lại sắp có ảnh đăng 🥰🥰</p>
                                                        </div>
                                                    </div>
                                                    <div className="flex items-center justify-between px-[10px] mt-[6px]">
                                                        <div className="flex items-center">
                                                            <button className="flex items-center text-sm cursor-pointer gap-x-1 dot-after">
                                                                <AiOutlineHeart className="inline-block" />
                                                                <span>1 thích</span>
                                                            </button>
                                                            <button className="text-sm cursor-pointer">
                                                                <span>Trả lời</span>
                                                            </button>
                                                        </div>
                                                        <div>
                                                            <button className="cursor-pointer block text-lg mt-[-6px] mr-[2px]">
                                                                <BiDotsHorizontalRounded className="text-sm" />
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col l-4">
                                <div className="relative">
                                    <div className="py-3 px-4 mb-5 bg-white rounded-[10px] shadow-md">
                                        <div className="flex">
                                            <Link to="/" className="text-[#e03] border-b-4 mr-[6px] border-solid border-[#e03] w-1/2 block font-medium text-lg p-2">
                                                <div className="flex items-center justify-center w-full">
                                                    <GiStarFormation className="inline-block mr-2" />
                                                    Bài nổi bật
                                                </div>
                                            </Link>
                                            <Link to="/" className="block w-1/2 p-2 text-lg font-medium">
                                                <div className="flex items-center justify-center w-full">
                                                    <FiUserCheck className="inline-block mr-2" />
                                                    Đang theo dõi
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="py-3 px-4 mb-5 bg-white rounded-[10px] shadow-md">
                                        <div>
                                            <h3 className="font-medium text-xl text-center pb-[14px] border-b border-solid borderb-[#eee]">Địa điểm nổi bật</h3>
                                            <div>
                                                <Link to="/" className="flex my-3 cursor-pointer">
                                                    <div className="w-[50px] h-[50px] mr-[10px] rounded-md overflow-hidden">
                                                        <div className="relative w-full h-full">
                                                            <div className="absolute top-0 left-0 w-full h-full">
                                                                <img src="https://toidicafe.vn/static/images/place/roji-cafe/roji-cafe-avatar-1648198460031.jpg?w=60&h=60" alt="" className="object-cover w-full h-full" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="flex flex-col flex-1 overflow-hidden">
                                                        <h4 className="hover:text-[#e03] transition-all overflow-hidden text-base font-medium whitespace-nowrap text-ellipsis">Roji Cafe</h4>
                                                        <div className="text-sm text-[#7a7a7a] overflow-hidden whitespace-nowrap text-ellipsis">
                                                            <span>38 Ngõ 36 Đào Tấn, Ba Đình</span>
                                                        </div>
                                                    </div>
                                                </Link>
                                                <Link to="/" className="flex my-3 cursor-pointer">
                                                    <div className="w-[50px] h-[50px] mr-[10px] rounded-md overflow-hidden">
                                                        <div className="relative w-full h-full">
                                                            <div className="absolute top-0 left-0 w-full h-full">
                                                                <img src="https://toidicafe.vn/static/images/place/roji-cafe/roji-cafe-avatar-1648198460031.jpg?w=60&h=60" alt="" className="object-cover w-full h-full" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="flex flex-col flex-1 overflow-hidden">
                                                        <h4 className="hover:text-[#e03] transition-all overflow-hidden text-base font-medium whitespace-nowrap text-ellipsis">Roji Cafe</h4>
                                                        <div className="text-sm text-[#7a7a7a] overflow-hidden whitespace-nowrap text-ellipsis">
                                                            <span>38 Ngõ 36 Đào Tấn, Ba Đình</span>
                                                        </div>
                                                    </div>
                                                </Link>
                                                <Link to="/" className="flex my-3 cursor-pointer">
                                                    <div className="w-[50px] h-[50px] mr-[10px] rounded-md overflow-hidden">
                                                        <div className="relative w-full h-full">
                                                            <div className="absolute top-0 left-0 w-full h-full">
                                                                <img src="https://toidicafe.vn/static/images/place/roji-cafe/roji-cafe-avatar-1648198460031.jpg?w=60&h=60" alt="" className="object-cover w-full h-full" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="flex flex-col flex-1 overflow-hidden">
                                                        <h4 className="hover:text-[#e03] transition-all overflow-hidden text-base font-medium whitespace-nowrap text-ellipsis">Roji Cafe</h4>
                                                        <div className="text-sm text-[#7a7a7a] overflow-hidden whitespace-nowrap text-ellipsis">
                                                            <span>38 Ngõ 36 Đào Tấn, Ba Đình</span>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="py-3 px-4 mb-5 bg-white rounded-[10px] shadow-md">
                                        <div>
                                            <h3 className="font-medium text-xl text-center pb-[14px] border-b border-solid borderb-[#eee]">Người dùng tích cực</h3>
                                            <div>
                                                <Link to="/" className="flex my-3 cursor-pointer">
                                                    <div className="w-[50px] h-[50px] mr-[10px] rounded-[50%] overflow-hidden">
                                                        <div className="relative w-full h-full">
                                                            <div className="absolute top-0 left-0 w-full h-full">
                                                                <img src="https://toidicafe.vn/static/images/user/6204bcbe2d1cda7b812ce7c5.jpeg?w=200&h=200" alt="" className="object-cover w-full h-full" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="flex flex-col flex-1 overflow-hidden">
                                                        <h4 className="hover:text-[#e03] transition-all overflow-hidden text-base font-medium whitespace-nowrap text-ellipsis">Roji Cafe</h4>
                                                        <div className="text-sm text-[#7a7a7a] overflow-hidden whitespace-nowrap text-ellipsis">
                                                            <span>
                                                                <b>27</b>
                                                                {" "} đánh giá
                                                                <button className="inline-flex items-center justify-center ml-[10px] rounded-md bg-[#efefef] transition-all cursor-pointer text-center py-[1px] px-[6px]">
                                                                    <FaRss className="inline-block mr-1"/>
                                                                    {" "} Theo dõi
                                                                </button>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </Link>
                                                <Link to="/" className="flex my-3 cursor-pointer">
                                                    <div className="w-[50px] h-[50px] mr-[10px] rounded-[50%] overflow-hidden">
                                                        <div className="relative w-full h-full">
                                                            <div className="absolute top-0 left-0 w-full h-full">
                                                                <img src="https://toidicafe.vn/static/images/user/6204bcbe2d1cda7b812ce7c5.jpeg?w=200&h=200" alt="" className="object-cover w-full h-full" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="flex flex-col flex-1 overflow-hidden">
                                                        <h4 className="hover:text-[#e03] transition-all overflow-hidden text-base font-medium whitespace-nowrap text-ellipsis">Roji Cafe</h4>
                                                        <div className="text-sm text-[#7a7a7a] overflow-hidden whitespace-nowrap text-ellipsis">
                                                            <span>
                                                                <b>27</b>
                                                                {" "} đánh giá
                                                                <button className="inline-flex items-center justify-center ml-[10px] rounded-md bg-[#efefef] transition-all cursor-pointer text-center py-[1px] px-[6px]">
                                                                    <FaRss className="inline-block mr-1"/>
                                                                    {" "} Theo dõi
                                                                </button>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </Link>
                                                <Link to="/" className="flex my-3 cursor-pointer">
                                                    <div className="w-[50px] h-[50px] mr-[10px] rounded-[50%] overflow-hidden">
                                                        <div className="relative w-full h-full">
                                                            <div className="absolute top-0 left-0 w-full h-full">
                                                                <img src="https://toidicafe.vn/static/images/user/6204bcbe2d1cda7b812ce7c5.jpeg?w=200&h=200" alt="" className="object-cover w-full h-full" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="flex flex-col flex-1 overflow-hidden">
                                                        <h4 className="hover:text-[#e03] transition-all overflow-hidden text-base font-medium whitespace-nowrap text-ellipsis">Roji Cafe</h4>
                                                        <div className="text-sm text-[#7a7a7a] overflow-hidden whitespace-nowrap text-ellipsis">
                                                            <span>
                                                                <b>27</b>
                                                                {" "} đánh giá
                                                                <button className="inline-flex items-center justify-center ml-[10px] rounded-md bg-[#efefef] transition-all cursor-pointer text-center py-[1px] px-[6px]">
                                                                    <FaRss className="inline-block mr-1"/>
                                                                    {" "} Theo dõi
                                                                </button>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </Link>
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
    )
}

export default Explore