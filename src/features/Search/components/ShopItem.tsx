import { AiOutlineStar } from 'react-icons/ai';
import { BsBookmark, BsClock } from 'react-icons/bs';
import { GoLocation } from 'react-icons/go';
import { MdAttachMoney } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { useAppDispatch } from '../../../app/hooks';
import formatMonney from '../../../utils/formatMoney';
import { authActions } from '../../auth/authSlice';
import { BookmarkPayload, searchActions } from '../searchSlice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaBookmark } from 'react-icons/fa';
import {useState} from 'react'
interface Price {
  min: number;
  max: number;
}
interface Address {
  specific: string;
}
interface Time {
  open: string;
  close: string;
}
interface Props {
  index: number;
  id: string;
  slug: string;
  images: string;
  name: string;
  price: Price;
  address: Address;
  status: string;
  time: Time;
  isBookmarked: Boolean;
}

const ShopItem = ({
  id,
  slug,
  images,
  name,
  price,
  address,
  status,
  time,
  index,
  isBookmarked,
}: Props) => {
  const dispatch = useAppDispatch();
  const [ toggle, setToggle] = useState<Boolean>(isBookmarked)
  const handelBookmark = (shopId: any , name: string) => {
    const currentUser = localStorage.getItem('user');
    if (!currentUser) {
      dispatch(authActions.showAuthForm());
    } else {
      dispatch(searchActions.bookmark(shopId));
      setToggle(true)
      toast.success(`Đã thêm ${name} vào Danh sách đã lưu!`, {
        position: "top-center",
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
    setToggle(false)
    toast.success('Đã bỏ lưu thành công!', {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      });
  }
  return (
    <div key={index} className="mb-5">
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
      <div className="relative flex bg-white rounded-lg shadow-md">
        <Link target="blank" to={`/place/${slug}`} className="py-2 pl-2">
          <div className="w-[270px] h-full overflow-hidden rounded">
            <div className="relative w-full h-full overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-full">
                <img src={images} alt="" className="object-cover w-full h-full " />
              </div>
            </div>
          </div>
        </Link>
        <div className="flex-shrink flex-grow pt-[6px] px-6 pb-6 min-h-[200px]">
          <Link target="blank" to={`/place/${slug}`}>
            <h4 className="text-xl font-bold pt-[6px] pb-1">{name}</h4>
          </Link>
          <div className="text-base pt-[2px]">
            <span className="text-[#e03] mr-[6px]">
              <AiOutlineStar className="inline-block text-2xl" />
              <AiOutlineStar className="inline-block text-2xl" />
              <AiOutlineStar className="inline-block text-2xl" />
              <AiOutlineStar className="inline-block text-2xl" />
              <AiOutlineStar className="inline-block text-2xl" />
            </span>
            {'- '}
            chưa có đánh giá
          </div>
          <div className="text-base pt-[6px] flex items-center gap-x-[10px]">
            <MdAttachMoney className="inline-block text-xl" />
            {formatMonney(price.min)}đ - {formatMonney(price.max)}đ
          </div>
          <div className="text-base pt-[6px] flex items-center gap-x-[10px]">
            <GoLocation className="inline-block text-xl" />
            {address.specific}
          </div>
          <div className="text-base pt-[6px] flex items-center gap-x-[10px]">
            <BsClock className="inline-block text-xl" />
            {status === 'openning' ? (
              <span className="font-semibold text-[#00b707]">Đang mở cửa</span>
            ) : status === 'closed' ? (
              <span className="font-semibold text-[#e03]">Đang đóng cửa</span>
            ) : (
              <span className="font-semibold text-[#ff9800]">Sắp đóng cửa</span>
            )}{' '}
            - {''}
            {time.open} - {time.close}
          </div>
        </div>
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
    </div>
  );
};

export default ShopItem;
