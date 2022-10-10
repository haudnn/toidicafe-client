import React, { useState } from 'react';
import { BsBookmark } from 'react-icons/bs';
import { FaBookmark } from 'react-icons/fa';
import { toast, ToastContainer } from 'react-toastify';
import { useAppDispatch } from '../../app/hooks';
import { authActions } from '../../features/auth/authSlice';
import { searchActions } from '../../features/search/searchSlice';
import 'react-toastify/dist/ReactToastify.css';
interface Props {
  isBookmarked: boolean;
  id: string;
  name: string;
}
const Bookmark = ({ isBookmarked, id , name }: Props) => {
  const dispatch = useAppDispatch();
  const [toggle, setToggle] = useState<Boolean>(isBookmarked);
  const handelBookmark = (shopId: any, name: string) => {
    const currentUser = localStorage.getItem('user');
    if (!currentUser) {
      dispatch(authActions.showAuthForm());
    } else {
      dispatch(searchActions.bookmark(shopId));
      setToggle(true);
      toast.success(`Đã thêm ${name} vào Danh sách đã lưu!`, {
        position: 'top-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };
  const handelUnBookmark = (shopId: any) => {
    dispatch(searchActions.unBookmark(shopId));
    setToggle(false);
    toast.success('Đã bỏ lưu thành công!', {
      position: 'top-center',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
  return (
    <div>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover
      />
      {toggle ? (
        <div
          onClick={() => handelUnBookmark(id)}
          className="absolute top-2 right-[10px] bottom-auto left-auto"
        >
          <div className=" text-[#e03] flex items-center justify-center relative cursor-pointer w-9 h-9 font-lg bg-white rounded-[50%] shadow-md">
            <FaBookmark></FaBookmark>
          </div>
        </div>
      ) : (
        <div
          onClick={() => handelBookmark(id, name)}
          className="absolute top-2 right-[10px] bottom-auto left-auto"
        >
          <div className="hover:text-[#e03] flex items-center justify-center relative cursor-pointer w-9 h-9 font-lg text-black bg-white rounded-[50%] shadow-md">
            <BsBookmark></BsBookmark>
          </div>
        </div>
      )}
    </div>
  );
};

export default Bookmark;
