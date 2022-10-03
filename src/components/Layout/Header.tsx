import React, { useState, useEffect } from 'react'
import logo from '../../assets/img/logo.png';
import { Link } from 'react-router-dom'
import { BsPen } from 'react-icons/bs'
import { AiOutlineUser, AiOutlinePoweroff, AiOutlineMail } from 'react-icons/ai'
import { BiCoinStack } from 'react-icons/bi'
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { authActions } from '../../features/auth/authSlice';
import bookmark from '../../assets/img/bookmark.jpg'
import bell from '../../assets/img/bell.jpg'
import { getUser } from '../../utils/localStorage';
import useToggle from '../../hooks/useToggle';
import { User } from '../../models/user'

const Header = () => {
    const dispatch = useAppDispatch();
    const [ currentUser, setCurrentUser] = useState<User>();
    const currentUserSelector = useAppSelector(state => state.auth.currentUser);
    useEffect(() => {
        setCurrentUser(currentUserSelector)
        if(currentUserSelector) {
            setCurrentUser(currentUserSelector)
        }
        setCurrentUser(getUser())
    }, [currentUserSelector])
    const { isToggle, handleToggle, ref } = useToggle()
    const handleShowAuthForm = () => {
        dispatch(authActions.showAuthForm());
    };
    const handleLogout = () => {
        dispatch(authActions.logout());
        window.location.reload();
    }
    return (
        <header className="h-[60px] shadow-lg">
            <div className="flex items-center justify-between px-8">
                <div className="flex items-center gap-x-[30px]">
                    <Link to="/">
                        <img src={logo} alt="Tôi đi cafe logo" />
                    </Link>
                    <div className="max-h-[60px] flex gap-x-[30px] items-center ">
                        <Link to="/" className="h-[60px] leading-[60px] font-semibold text-base block">
                            # Khám phá
                        </Link>
                        <Link to="/" className=" h-[60px] leading-[60px] font-semibold text-base block">
                            @ Khuyến mãi
                        </Link>
                    </div>
                </div>
                <div className="flex items-center">
                    <div className="mr-[14px] h-[40px] cursor-pointer" >
                        <Link to="/review" className=" bg-[#e03] leading-10 flex text-white text-base font-medium px-4 rounded-[26px]">
                            <BsPen className="h-[40px] mr-2" />
                            Viết Review
                        </Link>
                    </div>
                    {
                        currentUser ? (
                            <>
                                <div className="mr-[14px] cursor-pointer" >
                                    <div className="h-[40px] w-[40px] text-center bg-[#f0f2f5] rounded-[50%] flex items-center justify-center">
                                        <Link to="/save">
                                            <img className="w-[20px]" src={bookmark} alt="" />
                                        </Link>
                                    </div>
                                </div>
                                <div className="mr-[14px] cursor-pointer" >
                                    <div className="h-[40px] w-[40px] text-center bg-[#f0f2f5] rounded-[50%] flex items-center justify-center">
                                        <Link to="/">
                                            <img className="w-[20px]" src={bell} alt="" />
                                        </Link>
                                    </div>
                                </div>
                                <div ref={ref} className="mr-[14px] cursor-pointer relative" >
                                    <div onClick={handleToggle} className="h-[40px] w-[40px] overflow-hidden rounded-[50%]">
                                        <img className="" src={currentUser.avatar} alt="" />
                                        {isToggle && <div className="rounded-md absolute top-[50px] right-0 bottom-auto left-auto z-50 w-[200px] bg-white border-none overflow-hidden shadow-lg ">
                                            <div className="relative ">
                                                <Link to="/" className="hover:bg-[#f6f6f6] group flex item-center justify-start cursor-pointer py-2 px-[14px] text-black border-b border-solid border-b-[#eee]">
                                                    <img  src={currentUser.avatar} alt="" className="w-[40px] h-[40px] rounded-[50%]" />
                                                    <div className="pl-2 overflow-hidden">
                                                        <span className="block overflow-hidden text-base font-semibold text-black whitespace-nowrap text-ellipsis group-hover:text-[#e03]">
                                                            {currentUser.displayName}
                                                        </span>
                                                        <img src="https://static.riviu.co/image/2020/10/16/7bf2b81b8de744eeda94a9e6ac625b71.png" alt="" className="w-[40px] h-[16px]" />
                                                    </div>
                                                </Link>
                                                <div>
                                                    <Link to="/" className="hover:bg-[#f6f6f6] hover:text-[#e03] flex items-center justify-start px-4 py-2 text-base font-semibold text-black cursor-pointer">
                                                        <AiOutlineUser className="inline-block h-[28px] pr-[6px] w-[28px]"></AiOutlineUser>
                                                        {" "}  Chỉnh sửa hồ sơ
                                                    </Link>
                                                    <Link to="/" className="hover:bg-[#f6f6f6] hover:text-[#e03] flex items-center justify-start px-4 py-2 text-base font-semibold text-black cursor-pointer">
                                                        <BiCoinStack className="inline-block h-[28px] pr-[6px] w-[28px]"></BiCoinStack>
                                                        {" "}  Điểm thưởng
                                                    </Link>
                                                    <Link to="/" className="hover:bg-[#f6f6f6] hover:text-[#e03] flex items-center justify-start px-4 py-2 text-base font-semibold text-black cursor-pointer">
                                                        <AiOutlineMail className="inline-block h-[28px] pr-[6px] w-[28px]"></AiOutlineMail>
                                                        {" "} Liên hệ - góp ý
                                                    </Link>
                                                    <p onClick={handleLogout} className="hover:bg-[#f6f6f6] hover:text-[#e03] flex items-center justify-start px-4 py-2 text-base font-semibold text-black cursor-pointer">
                                                        <AiOutlinePoweroff className="inline-block h-[28px] pr-[6px] w-[28px]"></AiOutlinePoweroff>
                                                        {" "}   Đăng xuất
                                                    </p>
                                                </div>
                                            </div>
                                        </div>}
                                    </div>
                                </div>
                            </>
                        ) : (
                            <div onClick={handleShowAuthForm} className="cursor-pointer px-4 border border-[#e03] text-[#e03] text-base font-medium rounded-[26px] h-[40px]">
                                <span className="leading-10">Đăng nhập</span>
                            </div>
                        )
                    }
                </div>
            </div>
        </header>
    )
}
export default Header