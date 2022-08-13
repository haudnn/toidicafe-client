import React, { useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import Login from '../components/Login'
import Register from '../components/Register'
import { useAppDispatch } from '../../../app/hooks';
import { authActions } from '../authSlice';

const Auth = () => {
  const [isShowRegister, setIsShowRegister] = useState<Boolean>(false)
  const dispatch = useAppDispatch();
  const handleHideAuthForm = () => {
    dispatch(authActions.hideAuthForm());
  };
  const handleShowRegister = () => {
    setIsShowRegister(prev => !prev)
  }
  return (
    <div className="fixed inset-0 flex items-center justify-center w-[100vw] h-screen z-[100] bg-[rgba(0,0,0,.65)]">
      <div className="relative flex text-black overflow-hidden bg-white rounded-[10px] shadow-lg">
        <div onClick={handleHideAuthForm} className="absolute top-[10px] right-4 bottom-auto left-auto cursor-pointer text-2xl text-[#717171]">
          <AiOutlineClose />
        </div>
        <div className="flex flex-col w-[400px] p-6">
          {
            isShowRegister ? (
              <>
                <Register isShowRegister={isShowRegister} />
                <div className="pt-5 text-base text-center">
                  Bạn đã có tài khoản? {""}
                  <b onClick={handleShowRegister} className="hover:border-b-2 hover:border-b-[#e03] cursor-pointer text-[#e03]">Đăng nhập</b>
                </div></>
            ) : (
              <>
                <Login />
                <div className="pt-5 text-base text-center">
                  Bạn chưa có tài khoản? {""}
                  <b onClick={handleShowRegister} className="hover:border-b-2 hover:border-b-[#e03] cursor-pointer text-[#e03]">Tạo tài khoản</b>
                </div>
              </>
            )
          }
        </div>
        <div className="img-auth-form"></div>
      </div>
    </div>
  )
}

export default Auth