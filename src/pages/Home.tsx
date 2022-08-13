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
        <section className="py-10 home-section">
          <div className="flex items-center justify-center">
            <div className="w-[220px]">
              <img src={suggest_img} alt="" className="object-cover w-full h-full" />
            </div>
            <div className="p-5 text-center">
              <h3 className="mb-5 text-2xl font-bold text-black">Chúng tôi có đang bỏ lỡ địa điểm nào bạn biết ?</h3>
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