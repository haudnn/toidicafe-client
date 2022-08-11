import React from 'react'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import { Link } from 'react-router-dom'
import KeenSlider from '../utils/KeenSlider'

const Topic = () => {
    const sliderRef = KeenSlider(3)
    return (
        <section className="home-section pt-10">
            <div className="pb-10">
                <p className="font-semibold text-3xl text-center tilte-before relative">Mục đích bạn cần ?</p>
            </div>
            <div className="relative ml-[10px] mr-[10px]">
                <div ref={sliderRef} className="keen-slider">
                    <div className="keen-slider__slide">
                        <Link to="/" className="touch-manipulation img-hover">
                            <div className=" relative block cursor-pointer bg-white mx-3 overflow-hidden rounded-xl h-[220px] shadow bg-img-slider-container">
                                <div className=" w-full bg-[#eee] rounded-xl shadow overflow-hidden h-[220px]">
                                    <div className="h-full w-full relative overflow-hidden text-slider-after">
                                        <div className="absolute top-0 left-0 w-full h-full">
                                            <img src="https://toidicafe.vn/static/images/purpose/song-ao-1647441301274.jpeg?w=960" alt="Sống ảo" className="w-full h-full object-cover rounded-xl bg-img-slider" />
                                        </div>
                                    </div>
                                </div>
                                <h3 className="absolute top-[50%] right-auto bottom-auto left-[50%] w-auto h-auto text-3xl font-bold text-white text-center z-2 translate-y-[-50%] translate-x-[-50%]">Sống ảo</h3>
                            </div>
                        </Link>
                    </div>
                    <div className="keen-slider__slide">
                        <Link to="/" className="touch-manipulation img-hover">
                            <div className=" relative block cursor-pointer bg-white mx-3 overflow-hidden rounded-xl h-[220px] shadow bg-img-slider-container">
                                <div className=" w-full bg-[#eee] rounded-xl shadow overflow-hidden h-[220px]">
                                    <div className="h-full w-full relative overflow-hidden text-slider-after">
                                        <div className="absolute top-0 left-0 w-full h-full">
                                            <img src="https://toidicafe.vn/static/images/purpose/song-ao-1647441301274.jpeg?w=960" alt="Sống ảo" className="w-full h-full object-cover rounded-xl bg-img-slider" />
                                        </div>
                                    </div>
                                </div>
                                <h3 className="absolute top-[50%] right-auto bottom-auto left-[50%] w-auto h-auto text-3xl font-bold text-white text-center z-2 translate-y-[-50%] translate-x-[-50%]">Sống ảo</h3>
                            </div>
                        </Link>
                    </div>
                    <div className="keen-slider__slide">
                        <Link to="/" className="touch-manipulation img-hover">
                            <div className=" relative block cursor-pointer bg-white mx-3 overflow-hidden rounded-xl h-[220px] shadow bg-img-slider-container">
                                <div className=" w-full bg-[#eee] rounded-xl shadow overflow-hidden h-[220px]">
                                    <div className="h-full w-full relative overflow-hidden text-slider-after">
                                        <div className="absolute top-0 left-0 w-full h-full">
                                            <img src="https://toidicafe.vn/static/images/purpose/song-ao-1647441301274.jpeg?w=960" alt="Sống ảo" className="w-full h-full object-cover rounded-xl bg-img-slider" />
                                        </div>
                                    </div>
                                </div>
                                <h3 className="absolute top-[50%] right-auto bottom-auto left-[50%] w-auto h-auto text-3xl font-bold text-white text-center z-2 translate-y-[-50%] translate-x-[-50%]">Sống ảo</h3>
                            </div>
                        </Link>
                    </div>
                    <div className="keen-slider__slide">
                        <Link to="/" className="touch-manipulation img-hover">
                            <div className=" relative block cursor-pointer bg-white mx-3 overflow-hidden rounded-xl h-[220px] shadow bg-img-slider-container">
                                <div className=" w-full bg-[#eee] rounded-xl shadow overflow-hidden h-[220px]">
                                    <div className="h-full w-full relative overflow-hidden text-slider-after">
                                        <div className="absolute top-0 left-0 w-full h-full">
                                            <img src="https://toidicafe.vn/static/images/purpose/song-ao-1647441301274.jpeg?w=960" alt="Sống ảo" className="w-full h-full object-cover rounded-xl bg-img-slider" />
                                        </div>
                                    </div>
                                </div>
                                <h3 className="absolute top-[50%] right-auto bottom-auto left-[50%] w-auto h-auto text-3xl font-bold text-white text-center z-2 translate-y-[-50%] translate-x-[-50%]">Sống ảo</h3>
                            </div>
                        </Link>
                    </div>
                    <div className="keen-slider__slide">
                        <Link to="/" className="touch-manipulation img-hover">
                            <div className=" relative block cursor-pointer bg-white mx-3 overflow-hidden rounded-xl h-[220px] shadow bg-img-slider-container">
                                <div className=" w-full bg-[#eee] rounded-xl shadow overflow-hidden h-[220px]">
                                    <div className="h-full w-full relative overflow-hidden text-slider-after">
                                        <div className="absolute top-0 left-0 w-full h-full">
                                            <img src="https://toidicafe.vn/static/images/purpose/song-ao-1647441301274.jpeg?w=960" alt="Sống ảo" className="w-full h-full object-cover rounded-xl bg-img-slider" />
                                        </div>
                                    </div>
                                </div>
                                <h3 className="absolute top-[50%] right-auto bottom-auto left-[50%] w-auto h-auto text-3xl font-bold text-white text-center z-2 translate-y-[-50%] translate-x-[-50%]">Sống ảo</h3>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="flex items-center left-[-10px] justify-center absolute top-[50%] translate-y-[-50%] cursor-pointer w-10 h-10 text-center rounded-[50%] bg-white shadow-lg z-1">
                    <IoIosArrowBack className="w-7 h-7 text-[#2b2b2b]"></IoIosArrowBack>
                </div>
                <div className="flex items-center right-[-10px] justify-center absolute top-[50%] translate-y-[-50%] cursor-pointer w-10 h-10 text-center rounded-[50%] bg-white shadow-lg z-1">
                    <IoIosArrowForward className="w-7 h-7 text-[#2b2b2b]"></IoIosArrowForward>
                </div>
            </div>
            <div className="pt-7 flex items-center justify-center">
                <button className="cursor-pointer border-none w-[10px] h-[10px] bg-[#e03] rounded-[50%] p-[5px] mx-[5px]"></button>
                <button className="cursor-pointer border-none w-[10px] h-[10px] bg-[#dfdfdf] rounded-[50%] p-[5px] mx-[5px]"></button>
                <button className="cursor-pointer border-none w-[10px] h-[10px] bg-[#dfdfdf] rounded-[50%] p-[5px] mx-[5px]"></button>
                <button className="cursor-pointer border-none w-[10px] h-[10px] bg-[#dfdfdf] rounded-[50%] p-[5px] mx-[5px]"></button>
                <button className="cursor-pointer border-none w-[10px] h-[10px] bg-[#dfdfdf] rounded-[50%] p-[5px] mx-[5px]"></button>
            </div>
        </section>
    )
}

export default Topic