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
      className="bg-[#145CC5] my-16 h-[700px] flex items-center"
      style={{ clipPath: "polygon(0% 25%, 100% 0%, 100% 75%, 0% 100%)" }}
    >
      <div
        className="bg-[#417FDA] flex justify-end items-center relative w-[1152px] mx-auto h-[500px]"
        style={{ clipPath: "polygon(0px 30%, 100% 0%, 100% 70%, 0px 100%)" }}
      >
        <div className="text-white -ms-16 pr-7 w-[500px]">
          <h1 className="text-xl font-bold mb-4">THE ZET EFFECT</h1>

          <Swiper
            // centeredSlides={true}
            autoplay={{
              delay: 2000,
              // disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              type: "Progressbar",
            }}
            Autoplay={true}
            modules={[Autoplay, Pagination]}
            // onAutoplayTimeLeft={onAutoplayTimeLeft}
            className=""
          >
            <SwiperSlide>
              <div className=" flex items-center justify-end  h-full  ">
                <div className="text-white ">
                  <p className="text-3xl text-white font-bold ">
                    14 Lakh+ Financial Advisor across India are using ZET to
                    increase their income.
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className=" flex items-center justify-end  h-full ">
                <div className="text-white ">
                  <p className="text-3xl text-white font-bold ">
                    We helped customers in more than 50 cities to get their
                    first financial product
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className=" flex items-center justify-end h-full ">
                <div className="text-white ">
                  <p className="text-3xl text-white font-bold ">
                    More than ₹20 Cr earned by our Agents by selling Credit
                    Cards and Loans
                  </p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <img
          className="h-full absolute top-0 left-0"
          src="https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpeeps1.2a271552.png&w=1920&q=75"
          alt=""
        />
      </div>
    </div>
  );
};

export default Customer;
