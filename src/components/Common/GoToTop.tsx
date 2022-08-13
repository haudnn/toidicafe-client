import React from 'react'
import useGoToTop from '../../hooks/useGoToTop'
import { BsArrowUp } from 'react-icons/bs'

const GoToTop = () => {
    const { visible, scrollToTop } = useGoToTop()
    return (
        <div className={`${!visible ? 'hidden' : ''} fixed flex items-center justify-center right-[100px] z-10 bottom-[50px] w-10 h-10 rounded-[50%] bg-[#e03] cursor-pointer`} onClick={scrollToTop}>
            <BsArrowUp className="w-10 h-5 text-white"></BsArrowUp>
        </div>
    )
}

export default GoToTop