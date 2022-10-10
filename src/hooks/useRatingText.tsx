import React, { useState, useEffect } from 'react'

interface Props {
    rating: number
}

const useRatingText = (rating: number) => {
    const [ratingText, setRatingText] = useState<string>("")
    useEffect(() =>{
        let ratingText = "Tuyệt vời"
        if(rating === 20 || rating <= 1 ) ratingText ="Quá tệ"
        if(rating === 40 || rating <= 2) ratingText ="Trung bình"
        if(rating === 60 || rating <= 3) ratingText ="Bình thường"
        if(rating === 80 || rating <= 4) ratingText ="Tốt"
        setRatingText(ratingText)
    },[rating])
    return ratingText
}

export default useRatingText