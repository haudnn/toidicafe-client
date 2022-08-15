
import React from 'react'
import { Rating } from 'react-simple-star-rating'
import {FaStar} from 'react-icons/fa'

interface Props  {
  rating:number,
  handleRating: (a: number) => void;
}
const fillColorArray = [
  '#e03',
]
const RatingStar = ({handleRating, rating}:Props) => {
  return (
      <Rating
      onClick={handleRating} 
      initialValue={5}
      transition
      ratingValue={rating}
      fillColorArray={fillColorArray}
      fillColor="#e03"
      emptyIcon={<FaStar className="inline-block mr-2"/>} 
      fullIcon={<FaStar className="inline-block mr-2" />}
    />
  )
}

export default RatingStar