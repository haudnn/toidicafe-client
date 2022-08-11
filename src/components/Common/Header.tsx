import React from 'react'
import logo from '../../assets/img/logo.png';
import { Link } from 'react-router-dom'
import { BsPen } from 'react-icons/bs'
const Header = () => {
    return (
        <header className="font-poppins h-[60px]">
            <div className="bg-white fixed top-0 left-0 right-0 z-10 shadow-xl">
                <div className="px-8 flex items-center justify-between">
                    <div className="flex items-center gap-x-[30px]">
                        <div>
                            <img src={logo} alt="Tôi đi cafe logo" />
                        </div>
                        <div className="max-h-[60px] flex gap-x-[30px] items-center ">
                            <Link to="/" className="h-[60px] leading-[60px] font-semibold text-base block">
                                # Khám phá
                            </Link>
                            <Link to="/" className=" h-[60px] leading-[60px] font-semibold text-base block">
                                @ Khuyến mãi
                            </Link>
                        </div>
                    </div>
                    <div className="flex items-center gap-x-[30px]">
                        <div className="h-[40px] cursor-pointer" >
                            <Link to="/review" className=" bg-[#e03] leading-10 flex text-white text-base font-medium px-4 rounded-[26px]">
                                <BsPen className="h-[40px] mr-2" />
                                Viết Review
                            </Link>
                        </div>
                        <div className=" cursor-pointer px-4 border border-[#e03] text-[#e03] text-base font-medium rounded-[26px] h-[40px]">
                            <span className="leading-10">Đăng nhập</span>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}
export default Header