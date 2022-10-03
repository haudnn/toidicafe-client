import React, { useState} from 'react'
import { BiSearch } from 'react-icons/bi'
import { Link } from 'react-router-dom'
import useOnClickOutside from '../../../hooks/useClickOutSide'
import Search from './Search'

const Slider = () => {
  const [isSearch, setIsSearch] = useState<Boolean>(false)
  const ref = React.useRef<HTMLDivElement | null>(null);
  useOnClickOutside(ref, () => setIsSearch(false));
  const handleShowSearch = () => {
    setIsSearch(true)
  }
  return (
    <section className="slider slider-bg">
      <div className="m-auto xl:w-[1200px] px-4">
        <div className={`${isSearch ? "before:opacity-[0.92]" : "before:opacity-0"} w-full search-container`}>
        <div className="flex flex-col mt-5 mb-10 text-center z-2">
          <p className="font-semibold text-center text-[40px] z-2">Tìm góc cafe - Thỏa sức sống ảo</p>
          <p className="mt-2 text-base font-semibold text-center text-gray-300 z-2">Mang đến cho bạn những sự lựa chọn tốt nhất cho điểm hẹn cafe</p>
        </div>
        <div ref={ref} className="relative flex gap-x-[10px] mt-10">
          <div className="w-full mr-[10px] rounded-[10px] shadow-lg overflow-hidden">
            <input onClick={handleShowSearch} type="text" placeholder="Tên quán, khu vực, kiểu quán,..."className="mb-[2px] block w-full text-xl leading-[1.5] px-5 pr-[60px] pl-5 border-0 bg-white text-[#6d6f71] h-[65px] outline-0 overflow-visible" />
            <Search isSearch={isSearch} />
          </div>
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