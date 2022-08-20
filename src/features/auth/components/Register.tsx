import React from 'react'
import { AiOutlineMail, AiOutlineEye, AiOutlineEyeInvisible, AiOutlineUser } from 'react-icons/ai'
import { BsFacebook, BsGoogle } from 'react-icons/bs'
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { REGISTER_SCHEMA } from '../../../constants/validate';
import useValidator from '../../../hooks/useValidator';
import { authActions, selectCurrentUser } from '../authSlice';
interface Props {
    isShowRegister: Boolean,
}

const Register = ({ isShowRegister }: Props) => {
    const dispatch = useAppDispatch()
    const currentUser = useAppSelector(selectCurrentUser)
    const { register, handleSubmit, errors } = useValidator(REGISTER_SCHEMA)
    const onSubmit = handleSubmit((data) => {
        console.log(data);
        dispatch(authActions.register(data))
    });
    console.log(currentUser)
    return (
        isShowRegister && <div className="mb-[10px] grow-1">
            <h2 className="mb-[10px] text-xl font-semibold text-[rgba(0,0,0,.85)]">Tạo tài khoản</h2>
            <form action="" onSubmit={onSubmit}>
                <div className="py-[6px]">
                    <label htmlFor="email" className="block mb-1 text-base">Email</label>
                    <div className="relative">
                        <input {...register("email")} type="text" name="email" className="w-full text-base leading-[0.4px] outline-0 py-[6px] pr-[30px] pl-[10px] bg-white rounded border border-solid border-[#717171]" id="email" />
                        <AiOutlineMail className="top-[50%] absolute right-2 bottom-auto left-auto text-xl text-[#c3c3c3] translate-y-[-50%]"></AiOutlineMail>
                    </div>
                </div>
                <div className="py-[6px]">
                    <label htmlFor="displayName" className="block mb-1 text-base">Tên hiển thị</label>
                    <div className="relative">
                        <input {...register("displayName")} type="text" name="displayName" className="w-full text-base leading-[0.4px] outline-0 py-[6px] pr-[30px] pl-[10px] bg-white rounded border border-solid border-[#717171]" id="displayName" />
                        <AiOutlineUser className="top-[50%] absolute right-2 bottom-auto left-auto text-xl text-[#c3c3c3] translate-y-[-50%]"></AiOutlineUser>
                    </div>
                </div>
                <div className="py-[6px]">
                    <label htmlFor="password" className="block mb-1 text-base">Mật khẩu</label>
                    <div className="relative">
                        <input {...register("password")} type="password" name="password" className="w-full text-base leading-[0.4px] outline-0 py-[6px] pr-[30px] pl-[10px] bg-white rounded border border-solid border-[#717171]" id="password" />
                        <AiOutlineEye title="Hiện mật khấu" className="top-[50%] absolute cursor-pointer right-2 bottom-auto left-auto text-xl text-[#c3c3c3] translate-y-[-50%]"></AiOutlineEye>
                    </div>
                </div>
                <span className="block text-sm font-semibold text-red-500 transition-all delay-[.15s]">{errors.email?.message}</span>
                <span className="block text-sm font-semibold text-red-500 transition-all delay-[.15s]">{errors.displayName?.message}</span>
                <span className="block text-sm font-semibold text-red-500 transition-all delay-[.15s]">{errors.password?.message}</span>
                <button className="cursor-pointer w-full p-5 bg-linear-button text-lg font-semibold leading-[0.4px] my-[14px] border-none rounded text-white outline-0">Tạo tài khoản</button>
            </form>
            <div className="relative flex p-2 text-center pseudo-class-login whitespace-nowrap">
                <span className="text-base px-[10px] inline-block">hoặc tiếp tục với</span>
            </div>
            <div className="flex items-center justify-center mt-[14px]">
                <div className="cursor-pointer w-[36%] p-5 text-center bg-white border border-solid border-[#717171] rounded-md mr-[10px] transition-all delay-[.15s]">
                    <BsFacebook className="text-[#3b5998] text-xl mb-[6px] inline-block" />
                    <h3 className="text=[#717171] font-semibold">Facebook</h3>
                </div>
                <div className="cursor-pointer w-[36%] p-5 text-center bg-white border border-solid border-[#717171] rounded-md mr-[10px] transition-all delay-[.15s]">
                    <BsGoogle className="text-[#d54b3d] text-xl mb-[6px] inline-block" />
                    <h3 className="text=[#717171] font-semibold">Google</h3>
                </div>
            </div>
        </div>
    )
}

export default Register