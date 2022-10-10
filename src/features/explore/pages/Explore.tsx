import { FaRss } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { FiUserCheck } from 'react-icons/fi';
import { GiStarFormation } from 'react-icons/gi';
import ReviewItem from '../components/ReviewItem';
import { useFetch } from '../../../hooks';

const Explore = () => {
    const { isLoading, response } = useFetch({
        url: `reviews/`,
        method: "GET"
    })
  return (
    <div className="explore">
      <div className="layout-main">
        <div className="pt-[10px]">
          <div className="absolute top-[60px] right-auto bottom-auto left-0 w-full h-[220px] mb-6 bg-explore"></div>
          <div className="grid wide">
            <div className="row">
              <div className="relative col l-8">
                {
                    response?.reviews.map((review, index) => (
                        <ReviewItem
                        key={index}
                        avatar={review.author.avatar}
                        displayName={review.author.displayName}
                        name={review.shop.name}
                        avgStar={review.avgStar}
                        date= {review.date}
                        body= {review.body}
                        slug= {review.shop.slug}
                        />
                    ))
                }
              </div>
              <div className="col l-4">
                <div className="relative">
                  <div className="py-3 px-4 mb-5 bg-white rounded-[10px] shadow-md">
                    <div className="flex">
                      <Link
                        to="/"
                        className="text-[#e03] border-b-4 mr-[6px] border-solid border-[#e03] w-1/2 block font-medium text-lg p-2"
                      >
                        <div className="flex items-center justify-center w-full">
                          <GiStarFormation className="inline-block mr-2" />
                          Bài nổi bật
                        </div>
                      </Link>
                      <Link to="/" className="block w-1/2 p-2 text-lg font-medium">
                        <div className="flex items-center justify-center w-full">
                          <FiUserCheck className="inline-block mr-2" />
                          Đang theo dõi
                        </div>
                      </Link>
                    </div>
                  </div>
                  <div className="py-3 px-4 mb-5 bg-white rounded-[10px] shadow-md">
                    <div>
                      <h3 className="font-medium text-xl text-center pb-[14px] border-b border-solid borderb-[#eee]">
                        Địa điểm nổi bật
                      </h3>
                      <div>
                        <Link to="/" className="flex my-3 cursor-pointer">
                          <div className="w-[50px] h-[50px] mr-[10px] rounded-md overflow-hidden">
                            <div className="relative w-full h-full">
                              <div className="absolute top-0 left-0 w-full h-full">
                                <img
                                  src="https://toidicafe.vn/static/images/place/roji-cafe/roji-cafe-avatar-1648198460031.jpg?w=60&h=60"
                                  alt=""
                                  className="object-cover w-full h-full"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col flex-1 overflow-hidden">
                            <h4 className="hover:text-[#e03] transition-all overflow-hidden text-base font-medium whitespace-nowrap text-ellipsis">
                              Roji Cafe
                            </h4>
                            <div className="text-sm text-[#7a7a7a] overflow-hidden whitespace-nowrap text-ellipsis">
                              <span>38 Ngõ 36 Đào Tấn, Ba Đình</span>
                            </div>
                          </div>
                        </Link>
                        <Link to="/" className="flex my-3 cursor-pointer">
                          <div className="w-[50px] h-[50px] mr-[10px] rounded-md overflow-hidden">
                            <div className="relative w-full h-full">
                              <div className="absolute top-0 left-0 w-full h-full">
                                <img
                                  src="https://toidicafe.vn/static/images/place/roji-cafe/roji-cafe-avatar-1648198460031.jpg?w=60&h=60"
                                  alt=""
                                  className="object-cover w-full h-full"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col flex-1 overflow-hidden">
                            <h4 className="hover:text-[#e03] transition-all overflow-hidden text-base font-medium whitespace-nowrap text-ellipsis">
                              Roji Cafe
                            </h4>
                            <div className="text-sm text-[#7a7a7a] overflow-hidden whitespace-nowrap text-ellipsis">
                              <span>38 Ngõ 36 Đào Tấn, Ba Đình</span>
                            </div>
                          </div>
                        </Link>
                        <Link to="/" className="flex my-3 cursor-pointer">
                          <div className="w-[50px] h-[50px] mr-[10px] rounded-md overflow-hidden">
                            <div className="relative w-full h-full">
                              <div className="absolute top-0 left-0 w-full h-full">
                                <img
                                  src="https://toidicafe.vn/static/images/place/roji-cafe/roji-cafe-avatar-1648198460031.jpg?w=60&h=60"
                                  alt=""
                                  className="object-cover w-full h-full"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col flex-1 overflow-hidden">
                            <h4 className="hover:text-[#e03] transition-all overflow-hidden text-base font-medium whitespace-nowrap text-ellipsis">
                              Roji Cafe
                            </h4>
                            <div className="text-sm text-[#7a7a7a] overflow-hidden whitespace-nowrap text-ellipsis">
                              <span>38 Ngõ 36 Đào Tấn, Ba Đình</span>
                            </div>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="py-3 px-4 mb-5 bg-white rounded-[10px] shadow-md">
                    <div>
                      <h3 className="font-medium text-xl text-center pb-[14px] border-b border-solid borderb-[#eee]">
                        Người dùng tích cực
                      </h3>
                      <div>
                        <Link to="/" className="flex my-3 cursor-pointer">
                          <div className="w-[50px] h-[50px] mr-[10px] rounded-[50%] overflow-hidden">
                            <div className="relative w-full h-full">
                              <div className="absolute top-0 left-0 w-full h-full">
                                <img
                                  src="https://toidicafe.vn/static/images/user/6204bcbe2d1cda7b812ce7c5.jpeg?w=200&h=200"
                                  alt=""
                                  className="object-cover w-full h-full"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col flex-1 overflow-hidden">
                            <h4 className="hover:text-[#e03] transition-all overflow-hidden text-base font-medium whitespace-nowrap text-ellipsis">
                              Roji Cafe
                            </h4>
                            <div className="text-sm text-[#7a7a7a] overflow-hidden whitespace-nowrap text-ellipsis">
                              <span>
                                <b>27</b> đánh giá
                                <button className="inline-flex items-center justify-center ml-[10px] rounded-md bg-[#efefef] transition-all cursor-pointer text-center py-[1px] px-[6px]">
                                  <FaRss className="inline-block mr-1" /> Theo dõi
                                </button>
                              </span>
                            </div>
                          </div>
                        </Link>
                        <Link to="/" className="flex my-3 cursor-pointer">
                          <div className="w-[50px] h-[50px] mr-[10px] rounded-[50%] overflow-hidden">
                            <div className="relative w-full h-full">
                              <div className="absolute top-0 left-0 w-full h-full">
                                <img
                                  src="https://toidicafe.vn/static/images/user/6204bcbe2d1cda7b812ce7c5.jpeg?w=200&h=200"
                                  alt=""
                                  className="object-cover w-full h-full"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col flex-1 overflow-hidden">
                            <h4 className="hover:text-[#e03] transition-all overflow-hidden text-base font-medium whitespace-nowrap text-ellipsis">
                              Roji Cafe
                            </h4>
                            <div className="text-sm text-[#7a7a7a] overflow-hidden whitespace-nowrap text-ellipsis">
                              <span>
                                <b>27</b> đánh giá
                                <button className="inline-flex items-center justify-center ml-[10px] rounded-md bg-[#efefef] transition-all cursor-pointer text-center py-[1px] px-[6px]">
                                  <FaRss className="inline-block mr-1" /> Theo dõi
                                </button>
                              </span>
                            </div>
                          </div>
                        </Link>
                        <Link to="/" className="flex my-3 cursor-pointer">
                          <div className="w-[50px] h-[50px] mr-[10px] rounded-[50%] overflow-hidden">
                            <div className="relative w-full h-full">
                              <div className="absolute top-0 left-0 w-full h-full">
                                <img
                                  src="https://toidicafe.vn/static/images/user/6204bcbe2d1cda7b812ce7c5.jpeg?w=200&h=200"
                                  alt=""
                                  className="object-cover w-full h-full"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col flex-1 overflow-hidden">
                            <h4 className="hover:text-[#e03] transition-all overflow-hidden text-base font-medium whitespace-nowrap text-ellipsis">
                              Roji Cafe
                            </h4>
                            <div className="text-sm text-[#7a7a7a] overflow-hidden whitespace-nowrap text-ellipsis">
                              <span>
                                <b>27</b> đánh giá
                                <button className="inline-flex items-center justify-center ml-[10px] rounded-md bg-[#efefef] transition-all cursor-pointer text-center py-[1px] px-[6px]">
                                  <FaRss className="inline-block mr-1" /> Theo dõi
                                </button>
                              </span>
                            </div>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explore;
