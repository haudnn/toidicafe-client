import React from 'react'

const Skeleton = () => {
    return (
        <div role="status" className="animate-pulse">
            <div className="mb-5">
                <div className="flex bg-white rounded-lg shadow-md">
                    <div className="py-2 pl-2">
                        <div className="w-[270px] bg-gray-200 h-full overflow-hidden rounded"></div>
                    </div>
                    <div className="pt-[6px] px-6">
                        <div className="pt-[6px] mb-4 bg-gray-200 w-80 h-4 rounded-full"></div>
                        <div className="pt-[6px] mb-4 bg-gray-200 w-80 h-4 rounded-full"></div>
                        <div className="pt-[6px] mb-4 bg-gray-200 w-80 h-4 rounded-full"></div>
                        <div className="pt-[6px] mb-4 bg-gray-200 w-80 h-4 rounded-full"></div>
                        <div className="pt-[6px] mb-4 bg-gray-200 w-80 h-4 rounded-full"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skeleton