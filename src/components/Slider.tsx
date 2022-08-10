import React from 'react'
import { BiSearch } from 'react-icons/bi'
import { Link } from 'react-router-dom'

const Slider = () => {
  return (
    <section className="slider slider-bg">
      <div className="m-auto lg:w-[1200px] h-full flex items-center justify-center">
        <div className="w-full">
        <p className="font-semibold text-center text-[40px]">Tìm góc cafe - Thỏa sức sống ảo</p>
        <p className="font-semibold text-center text-base text-gray-300 mt-2">Mang đến cho bạn những sự lựa chọn tốt nhất cho điểm hẹn cafe</p>
        <div className="flex items-center justify-center gap-x-[10px] mt-10">
          <input type="text" placeholder="Tên quán, khu vực, kiểu quán,..."  className="block w-full text-xl leading-[1.5] px-5 pr-[60px] pl-5 border-0 bg-white text-[#6d6f71] h-[65px] rounded-[10px] outline-0" />
          <Link to ="/" className="h-full touch-manipulation">
              <button className="text-xl font-semibold h-[65px] w-[200px] shadow flex items-center justify-center text-white bg-[#e03] border border-[#e03] rounded-[10px] transition-all cursor-pointer ">
              <BiSearch className="w-6 h-6 mr-2"></BiSearch>
                Tìm quán
              </button>
          </Link>
        </div>
        </div>
      </div>
    </section>
  )
}

export default Slider