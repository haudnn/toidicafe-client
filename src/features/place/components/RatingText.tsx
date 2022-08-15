import React, { useState, useEffect } from 'react'

interface Props {
    rating: number
}

const RatingText = ({ rating }: Props) => {
    const [ratingText, setRatingText] = useState<string>("")
    useEffect(() =>{
        let ratingText = "Tuyệt vời"
        if(rating === 20) ratingText ="Quá tệ"
        if(rating === 40) ratingText ="Trung bình"
        if(rating === 60) ratingText ="Bình thường"
        if(rating === 80) ratingText ="Tốt"
        setRatingText(ratingText)
    },[rating])
    return (
        <span className="star-tooltip">{ratingText}</span>
    )
}

export default RatingText