import React from 'react'
import { AiOutlineMail, AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'
import { BsFacebook, BsGoogle } from 'react-icons/bs'
import { authActions } from '../authSlice';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import useValidator from '../../../hooks/useValidator';
import { LOGIN_SCHEMA } from '../../../constants/validate';
import {selectIsLoggedIn,  selectIslogging, selectCurrentUser, selectError } from '../authSlice'
// interface Props {
//   isShowRegister: Boolean,
// }
const Login = () => {
  const islogging = useAppSelector(selectIslogging);
  const isLoggedIn = useAppSelector(selectIsLoggedIn);
  const error = useAppSelector(selectError);
  const currentUser = useAppSelector(selectCurrentUser);
  const dispatch = useAppDispatch()
  const { register, handleSubmit, errors } = useValidator(LOGIN_SCHEMA)
  const onSubmit = handleSubmit((data) => {
    dispatch(authActions.login(data))
  });
  return (
    <div className="mb-[10px] grow-1">
      <h2 className="mb-[10px] text-xl font-semibold text-[rgba(0,0,0,.85)]">Đăng nhập tài khoản</h2>
      <form action="" onSubmit={onSubmit}>
        <div className="py-[6px]">
          <label htmlFor="email" className="block mb-1 text-base">Email hoặc tên người dùng</label>
          <div className="relative">
            <input type="text" className="w-full text-base leading-[0.4px] outline-0 py-[6px] pr-[30px] pl-[10px] bg-white rounded border border-solid border-[#717171]" id="email" {...register("email")} />
            <AiOutlineMail className="top-[50%] absolute right-2 bottom-auto left-auto text-xl text-[#c3c3c3] translate-y-[-50%]"></AiOutlineMail>
          </div>
        </div>
        <div className="py-[6px]">
          <label htmlFor="password" className="block mb-1 text-base">Mật khẩu</label>
          <div className="relative">
            <input type="password" {...register("password")} className="w-full text-base leading-[0.4px] outline-0 py-[6px] pr-[30px] pl-[10px] bg-white rounded border border-solid border-[#717171]" id="password" />
            <AiOutlineEye title="Hiện mật khấu" className="top-[50%] absolute cursor-pointer right-2 bottom-auto left-auto text-xl text-[#c3c3c3] translate-y-[-50%]"></AiOutlineEye>
          </div>
        </div>
        <span className="block text-sm font-semibold text-red-500 transition-all delay-[.15s]">{errors.email?.message}</span>
        <span className="block text-sm font-semibold text-red-500 transition-all delay-[.15s]">{errors.password?.message}</span>
        <span className="block text-sm font-semibold text-red-500 transition-all delay-[.15s]">{error}</span>
        <button className="cursor-pointer w-full p-5 bg-linear-button text-lg font-semibold leading-[0.4px] my-[14px] border-none rounded text-white outline-0">Đăng nhập</button>
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
      <div className="mb-[-10px] text-sm text-center pt-5">
        <b className="hover:border-b-2 hover:border-b-[#e03] cursor-pointer text-[#e03]">Quên mật khẩu</b>
      </div>
    </div>
  )
}

export default Login