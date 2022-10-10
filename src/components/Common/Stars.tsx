import React from 'react'
import { FaStar } from 'react-icons/fa'

interface Props{ 
    number: number
}
const Stars = ({number} : Props) => {
  return (
    <>
        {Array.from({ length: Math.round(number) }).map((_) => (
            <FaStar className="inline-block text-[#e03] text-sm" />
        ))}
    </>
  )
}

export default Stars