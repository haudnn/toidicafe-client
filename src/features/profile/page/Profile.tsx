import React from 'react'

const Profile = () => {
    return (
        <div className="profile">
            <div className="layout-main">
                <div className="flex flex-col justify-center bg-white">
                    <div className="relative pb-[100px] w-[1200px] m-auto px-4">
                        <div className="flex items-center justify-center relative w-full h-[250px] py-5 px-10 rounded-b-[16px] bg-profile">
                            <div className="absolute flex items-center justify-center flex-col top-[34%]">
                                <div className="w-[200px] h-[200px] mr-[10px] rounded-[50%] overflow-hidden bg-white">
                                    <div className="relative w-full h-full">
                                        <div className="absolute top-0 left-0 w-full h-full">
                                            <img src="https://toidicafe.vn/static/images/user/6204bcbe2d1cda7b812ce7c5.jpeg?w=200&h=200" alt="" className="object-cover w-full h-full" />
                                        </div>
                                    </div>
                                </div>
                                <h1 className="flex items-center justify-center text-3xl font-bold">Nghiện Cafe</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="">

                </div>
            </div>
        </div>
    )
}

export default Profile