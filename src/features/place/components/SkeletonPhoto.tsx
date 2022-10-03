import React from 'react'

const SkeletonPhoto = () => {
  return (
    <div className="col l-3">
        <div role="status" className="w-full h-full animate-pulse pb-[10px]">
            <div className="bg-gray-200 w-full h-[285px] rounded-lg"></div>
        </div>
    </div>
  )
}

export default SkeletonPhoto