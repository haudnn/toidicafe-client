import React from 'react'
import { Link } from 'react-router-dom'
import { GrMapLocation } from 'react-icons/gr'
import { AiOutlineFire, AiOutlineClose } from 'react-icons/ai'

interface Props {
    isSearch: Boolean,
}
const Search = ({ isSearch }: Props) => {
    return (
        isSearch &&
        <div className="block w-full text-black bg-white py-[14px]">
            <Link to="/" className="flex items-center justify-start px-6 py-[10px] cursor-pointer">
                <GrMapLocation className="mr-[10px] text-[30px]"></GrMapLocation>
                <span className="text-lg font-semibold ">Tìm quanh đây</span>
            </Link>
            <div className="px-4 py-2 text-lg font-bold">Đề xuất</div>
            <div className="">
                <Link to="/" className="relative flex items-center justify-start px-6 py-2 text-black cursor-pointer">
                    <div className="w-10 h-10 mr-[10px] rounded overflow-hidden shrink-0">
                        <img src="https://ik.imagekit.io/reviewcafe/place/artemis-pastry-coffee-shop/avatar/image_7O5bfQWLJ/tr:w-50,h-50,fo-center" alt="" className="object-cover w-full h-full rounded" />
                    </div>
                    <div className="pr-3">
                        <div className="text-lg font-semibold">Artemis Pastry & Coffee Shop</div>
                        <div className="text-base text-[#6b6b6b]">20 Ngô Quyền, Tràng Tiền, Hoàn Kiếm, Hà Nội.</div>
                    </div>
                    <div className="absolute top-0 bottom-0 left-auto flex items-center justify-center right-3">
                        <AiOutlineFire className="w-6 h-6 leading-6 text-center text-[#5a5a5a]"></AiOutlineFire>
                    </div>
                </Link>
            </div>
            <div className="px-4 py-2 text-lg font-bold">Đã xem gần đây</div>
            <div className="">
                <Link to="/" className="relative flex items-center justify-start px-6 py-2 text-black cursor-pointer">
                    <div className="w-10 h-10 mr-[10px] rounded overflow-hidden shrink-0">
                        <img src="https://ik.imagekit.io/reviewcafe/place/artemis-pastry-coffee-shop/avatar/image_7O5bfQWLJ/tr:w-50,h-50,fo-center" alt="" className="object-cover w-full h-full rounded" />
                    </div>
                    <div className="pr-3">
                        <div className="text-lg font-semibold">Artemis Pastry & Coffee Shop</div>
                        <div className="text-base text-[#6b6b6b]">20 Ngô Quyền, Tràng Tiền, Hoàn Kiếm, Hà Nội.</div>
                    </div>
                    <div className="absolute top-0 bottom-0 left-auto flex items-center justify-center right-3">
                        <AiOutlineClose className="w-6 h-6 leading-6 text-center text-[#5a5a5a]"></AiOutlineClose>
                    </div>
                </Link>
                <Link to="/" className="relative flex items-center justify-start px-6 py-2 text-black cursor-pointer">
                    <div className="w-10 h-10 mr-[10px] rounded overflow-hidden shrink-0">
                        <img src="https://ik.imagekit.io/reviewcafe/place/artemis-pastry-coffee-shop/avatar/image_7O5bfQWLJ/tr:w-50,h-50,fo-center" alt="" className="object-cover w-full h-full rounded" />
                    </div>
                    <div className="pr-3">
                        <div className="text-lg font-semibold">Artemis Pastry & Coffee Shop</div>
                        <div className="text-base text-[#6b6b6b]">20 Ngô Quyền, Tràng Tiền, Hoàn Kiếm, Hà Nội.</div>
                    </div>
                    <div className="absolute top-0 bottom-0 left-auto flex items-center justify-center right-3">
                        <AiOutlineClose className="w-6 h-6 leading-6 text-center text-[#5a5a5a]"></AiOutlineClose>
                    </div>
                </Link>
                <Link to="/" className="relative flex items-center justify-start px-6 py-2 text-black cursor-pointer">
                    <div className="w-10 h-10 mr-[10px] rounded overflow-hidden shrink-0">
                        <img src="https://ik.imagekit.io/reviewcafe/place/artemis-pastry-coffee-shop/avatar/image_7O5bfQWLJ/tr:w-50,h-50,fo-center" alt="" className="object-cover w-full h-full rounded" />
                    </div>
                    <div className="pr-3">
                        <div className="text-lg font-semibold">Artemis Pastry & Coffee Shop</div>
                        <div className="text-base text-[#6b6b6b]">20 Ngô Quyền, Tràng Tiền, Hoàn Kiếm, Hà Nội.</div>
                    </div>
                    <div className="absolute top-0 bottom-0 left-auto flex items-center justify-center right-3">
                        <AiOutlineClose className="w-6 h-6 leading-6 text-center text-[#5a5a5a]"></AiOutlineClose>
                    </div>
                </Link>
                <Link to="/" className="relative flex items-center justify-start px-6 py-2 text-black cursor-pointer">
                    <div className="w-10 h-10 mr-[10px] rounded overflow-hidden shrink-0">
                        <img src="https://ik.imagekit.io/reviewcafe/place/artemis-pastry-coffee-shop/avatar/image_7O5bfQWLJ/tr:w-50,h-50,fo-center" alt="" className="object-cover w-full h-full rounded" />
                    </div>
                    <div className="pr-3">
                        <div className="text-lg font-semibold">Artemis Pastry & Coffee Shop</div>
                        <div className="text-base text-[#6b6b6b]">20 Ngô Quyền, Tràng Tiền, Hoàn Kiếm, Hà Nội.</div>
                    </div>
                    <div className="absolute top-0 bottom-0 left-auto flex items-center justify-center right-3">
                        <AiOutlineClose className="w-6 h-6 leading-6 text-center text-[#5a5a5a]"></AiOutlineClose>
                    </div>
                </Link>
                <Link to="/" className="relative flex items-center justify-start px-6 py-2 text-black cursor-pointer">
                    <div className="w-10 h-10 mr-[10px] rounded overflow-hidden shrink-0">
                        <img src="https://ik.imagekit.io/reviewcafe/place/artemis-pastry-coffee-shop/avatar/image_7O5bfQWLJ/tr:w-50,h-50,fo-center" alt="" className="object-cover w-full h-full rounded" />
                    </div>
                    <div className="pr-3">
                        <div className="text-lg font-semibold">Artemis Pastry & Coffee Shop</div>
                        <div className="text-base text-[#6b6b6b]">20 Ngô Quyền, Tràng Tiền, Hoàn Kiếm, Hà Nội.</div>
                    </div>
                    <div className="absolute top-0 bottom-0 left-auto flex items-center justify-center right-3">
                        <AiOutlineClose className="w-6 h-6 leading-6 text-center text-[#5a5a5a]"></AiOutlineClose>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Search