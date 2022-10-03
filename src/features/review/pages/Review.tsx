import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import Rating from '../components/Rating';
import ImageUploading, { ImageListType } from 'react-images-uploading';
import { AiOutlineCamera } from 'react-icons/ai';
import { MdDeleteOutline } from 'react-icons/md';

interface Star {
  position: number;
  space : number;
  price: number;
  drink: number;
  service: number;
}
interface Data {
  title: string;
  body: string;
  shopId: string;
  star: Star;
  images?: Array<string>;
  anonymous: boolean;
}
const Review = () => {
  const [data, setData] = useState<Data>({
    title: '',
    body: '',
    shopId: '',
    star: {
      position: 100,
      space: 100,
      price: 100,
      drink: 100,
      service: 100
    },
    anonymous: false,
    images: [],
  });
  const [images, setImages] = useState([]);
  const maxNumber = 69;

  const onChange = (imageList: ImageListType, addUpdateIndex: number[] | undefined) => {
    setImages(imageList as never[]);
    setData((prev:any) => {
      return {
        ...prev,
        images: [...images, imageList]
      }
    })
  };
  const handleChangeData = (event:any) => {
    const { target: { value, name } } = event;
    setData({ ...data, [name]: value })
  }
  const handleChangeCheckBox = () => {
    setData({ ...data, anonymous: !data.anonymous })
  }
  return (
    <>
      <div className="grow min-h-[200px] overflow-y-auto p-4">
        <div className="mb-3">
          <h3 className="text-lg text-[#898c95] font-medium">Xếp hạng của bạn</h3>
          <Rating setData={setData} position={data.star.position} />
        </div>
        <div className="mb-2">
          <h3 className="text-base text-[#898c95] mb-2 font-medium">Đánh giá của bạn</h3>
          <div className="w-full mb-[10px]">
            <div className="mb-[10px]">
              <input
                type="text"
                name="title"
                className="outline-0 w-full px-[11px] py-1 rounded-md text-base text-black border border-solid border-[#e5e5e5]"
                placeholder="Nhập tiêu đề đánh giá"
                value={data.title}
                onChange={handleChangeData}
              />
            </div>
            <textarea
              className="focus:ring-[#fa284e] focus:border-[#fa284e] focus:shadow-md border border-solid border-[#e5e5e5] w-full h-[114px] min-h-[114px] overflow-y-hidden resize-none text-ellipsis text-base rounded-md outline-0 py-[6px] px-3"
              placeholder="Nhập nội dung đánh giá"
              name="body"
              value={data.body}
              onChange={handleChangeData}
            ></textarea>
            <div className="text-right text-xs italic text-[#666]">
              <span>0 ký tự (tối thiểu 10 ký tự)</span>
            </div>
          </div>
        </div>
        <div className="mb-2">
          <ImageUploading multiple value={images} onChange={onChange} maxNumber={maxNumber}>
            {({
              imageList,
              onImageUpload,
              onImageRemove,
              dragProps,
            }) => (
              <div className="flex flex-wrap gap-2">
                {imageList.map((image, index) => (
                  <div key={index} className="relative">
                    <div className="relative w-[102px] h-[102px] rounded-lg cursor-pointer animate-img overflow-hidden">
                      <img
                        src={image.dataURL}
                        alt=""
                        className="object-cover w-full h-full rounded-lg opacity-80"
                      />
                    </div>
                    <div className="absolute left-[40%] icon-hover top-2/4 z-10">
                      <MdDeleteOutline onClick={() => onImageRemove(index)} className="text-base text-white cursor-pointer"></MdDeleteOutline>
                    </div>
                  </div>
                ))}
                <button
                  onClick={onImageUpload}
                  {...dragProps}
                  className="max-w-[102px] max-h-[102px] py-10 px-5 flex items-center justify-center flex-col border border-solid border-[#e6e6e6] rounded-lg"
                >
                  <AiOutlineCamera className="text-base"></AiOutlineCamera>
                  <span className="inline-block text-sm ">Thêm ảnh</span>
                </button>
              </div>
            )}
          </ImageUploading>
        </div>
        <div className="mb-2"></div>
        <div>
          <div className="flex items-center justify-between">
            <h3 className="text-lg text-[#898c95] font-medium">Đánh giá ẩn danh</h3>
            <label
              htmlFor="checked-toggle"
              className="relative inline-flex items-center cursor-pointer"
            >
              <input
                type="checkbox"
                id="checked-toggle"
                className="sr-only peer"
                name="anonymous"
                defaultChecked={data.anonymous}
                onClick={handleChangeCheckBox}
              />
              <div className="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#e03]"></div>
            </label>
          </div>
          <small className="block text-[#a1a1a1] mr-[56px]">
            Tên của bạn sẽ hiển thị như h*****g và không hiển thị trên dòng thời gian của bạn
          </small>
        </div>
      </div>
      <div className="flex items-center justify-end p-4 border-t border-solid border-[rgba(0,0,0,.1)]">
        <button className="cursor-default text-[#bcc0c4] bg-[#e4e6eb] text-base font-medium py-[6px] px-[10px] rounded-md flex items-center justify-center">
          Gửi đánh giá
        </button>
      </div>
    </>
  );
};

export default Review;
