import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/img/logo.png'
import contact from '../../assets/img/contact.png'
import { ImFacebook } from 'react-icons/im'
import { FiInstagram } from 'react-icons/fi'
import { SiTiktok } from 'react-icons/si'

const Footer = () => {
    return (
        <footer className="bg-img-footer">
            <div className="max-w-[1200px] mx-auto my-0 pb-10">
                <div className="relative pt-[30px] pb-5 px-5 border-b-2 border-b-solid border-b-white">
                    <div className="gird">
                        <div className="row">
                            <div className="col l-4">
                                <div>
                                    <Link to="/">
                                        <img src={logo} alt="Tôi đi cà phê" className="h-[60px]" />
                                    </Link>
                                </div>
                                <div className=" w-[230px] mt-5  border-2 border-solid border-white rounded-md">
                                    <Link to="/" className="flex items-center justify-center p-[6px]">
                                        <img src={contact} alt="Trở thành đối tác" className="mr-1" />
                                        <span className="text-white">Hợp tác với chúng tôi</span>
                                    </Link>
                                </div>
                            </div>
                            <div className="col l-4">
                                <h4 className="text-base font-bold uppercase mb-[14px] text-white">Về chúng tôi</h4>
                                <div className="text-base leading-6 mb-[6px]">
                                    <Link to="/" className="relative touch-manipulation line-hover-link text-white">
                                        Giới thiệu
                                    </Link>
                                </div>
                                <div className="text-base leading-6 mb-[6px]">
                                    <Link to="/" className="relative touch-manipulation line-hover-link text-white">
                                        Giải đáp thắc mắc
                                    </Link>
                                </div>
                                <div className="text-base leading-6 mb-[6px]">
                                    <Link to="/" className="relative touch-manipulation line-hover-link text-white">
                                        Liên hệ - góp ý
                                    </Link>
                                </div>
                                <div className="text-base leading-6 mb-[6px]">
                                    <Link to="/" className="relative touch-manipulation line-hover-link text-white">
                                        Điều khoản sử dụng
                                    </Link>
                                </div>
                            </div>
                            <div className="col l-4">
                                <h4 className="text-base font-bold uppercase mb-[14px] text-white">THEO DÕI CHÚNG TÔI TRÊN</h4>
                                <div className="text-base leading-6 mb-[6px]">
                                    <ImFacebook className="inline-block icon-link-hover w-[18px] text-xl text-center mb-[5px] mr-[5px] text-white" />
                                    <Link to="/" className="relative touch-manipulation line-hover-link text-white">
                                        Facebook
                                    </Link>
                                </div>
                                <div className="text-base leading-6 mb-[6px]">
                                    <FiInstagram className="inline-block icon-link-hover w-[18px] text-xl text-center mb-[5px] mr-[5px] text-white" />
                                    <Link to="/" className="relative touch-manipulation line-hover-link text-white">
                                        Instagram
                                    </Link>
                                </div>
                                <div className="text-base leading-6 mb-[6px]">
                                    <SiTiktok className="inline-block icon-link-hover w-[18px] text-xl text-center mb-[5px] mr-[5px] text-white" />
                                    <Link to="/" className="relative touch-manipulation line-hover-link text-white">
                                        Tiktok
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer