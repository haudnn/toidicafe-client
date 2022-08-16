import React, { useState } from 'react'

interface Props {
    children: string,
    limit: number
}

const ReadMore = ({ children, limit }: Props) => {
    const text = children
    const [isReadMoreShow, setIsReadMoreShow] = useState<Boolean>(false)
    const handleShowReadMore = () => {
        setIsReadMoreShow(prev => !prev)
    }
    return (
        <p className="break-words text-ellipsis">
            {isReadMoreShow ? text : text.substring(0,limit)}
            {
                isReadMoreShow ? "" : "..."
            }
            <span onClick={handleShowReadMore} className="text-[#e03] cursor-pointer text-base"> {
                isReadMoreShow ? "Thu gọn" : "Xem thêm"
            }</span>
        </p>
    )
}

export default ReadMore