import React from 'react'
import "keen-slider/keen-slider.min.css"
import Slider from '../components/Slider'
import Topic from '../components/Topic'
import Area from '../components/Area'
import Location from '../components/Location'
import suggest_img from '../assets/img/suggest-place.png';
import { Link } from 'react-router-dom'
import GoToTop from '../components/Common/GoToTop'

const Home = () => {
  return (
    <div className="home">
      <Slider />
      <div className="max-w-[1200px] mx-auto my-0">
        <Topic />
        <Area />
        <Location />
        <section className="home-section py-10">
          <div className="flex items-center justify-center">
            <div className="w-[220px]">
              <img src={suggest_img} alt="" className="w-full h-full object-cover" />
            </div>
            <div className="text-center p-5">
              <h3 className="text-2xl text-black font-bold mb-5">Chúng tôi có đang bỏ lỡ địa điểm nào bạn biết ?</h3>
              <Link to="/" className="uppercase text-white bg-[#e03] rounded-[10px] inline-flex items-center justify-center text-base font-semibold h-10 leading-10 px-5">
                Đóng góp địa điểm
              </Link>
            </div>
          </div>
        </section>
      </div>
      <GoToTop/>
    </div>
  )
}

export default Home