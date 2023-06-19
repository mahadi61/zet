"use client";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination } from "swiper";

const Customer = () => {
  return (
    <div
      className="bg-[#145CC5] lg:my-16 h-[70vw] flex items-center"
      style={{ clipPath: "polygon(0% 25%, 100% 0%, 100% 75%, 0% 100%)" }}
    >
      <div
        className="bg-[#417FDA] flex justify-center lg:justify-end items-center relative w-3/4 lg:w-[1152px] mx-auto h-[55vw]"
        style={{ clipPath: "polygon(0px 27%, 100% 0%, 100% 70%, 0px 100%)" }}
      >
        <div className="text-white lg:-ms-20 lg:pr-7 w-[260px] lg:w-[510px]   z-10">
          <h1 className="lg:text-xl ms-2  font-bold lg:mb-4">THE ZET EFFECT</h1>

          <Swiper
            // centeredSlides={true}
            autoplay={{
              delay: 2500,
              // disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              type: "progressbar",
            }}
            Autoplay={true}
            modules={[Autoplay, Pagination]}
            // onAutoplayTimeLeft={onAutoplayTimeLeft}
            className=""
          >
            <SwiperSlide>
              <div className=" flex items-center   lg:h-[180px]  ">
                <div className="text-white ">
                  <p className="lg:text-3xl text-white ms-2 pb-2 font-bold ">
                    14 Lakh+ Financial Advisor across India are using ZET to
                    increase their income.
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className=" flex items-center   lg:h-[180px] ">
                <div className="text-white ">
                  <p className="lg:text-3xl text-white ms-2 pb-2 font-bold ">
                    We helped customers in more than 50 cities to get their
                    first financial product
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className=" flex items-center lg:h-[180px] ">
                <div className="text-white ">
                  <p className="lg:text-3xl text-white ms-2 pb-2 font-bold ">
                    More than ₹20 Cr earned by our Agents by selling Credit
                    Cards and Loans
                  </p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <img
          className="h-full absolute hidden lg:block top-0 left-0"
          src="https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpeeps1.2a271552.png&w=1920&q=75"
          alt=""
        />
      </div>
    </div>
  );
};

export default Customer;
