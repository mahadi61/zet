"use client";

import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Autoplay } from "swiper";

const Earning = () => {
  const [progressNumber, setProgressNumber] = useState(0);

  const progressBar = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    setProgressNumber(100 - parseInt(Math.ceil(time / 1000) * 10));
  };

  return (
    <div
      className="bg-[#0A2540] my-16  relative "
      style={{
        paddingTop: "15vw",
        paddingBottom: "20vw",
        clipPath: "polygon(0% 27%, 100% 0%, 100% 73%, 0% 100%)",
      }}
    >
      <div className="flex justify-center items-center flex-col max-w-6xl mx-auto z-10">
        <div className="text-white mt-14 lg:mb-20 mb-5 text-center">
          <h1 className="lg:text-3xl text-white font-bold">
            Start Earning in 3 Easy Steps
          </h1>
          <p className="text-xs lg:text-xl">
            We have create the app the make your earning easy
          </p>
        </div>
      </div>
      <Swiper
        autoplay={{
          delay: 10000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        Autoplay={true}
        modules={[Autoplay]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
      >
        <SwiperSlide>
          <div className=" flex items-center justify-between h-full max-w-6xl mx-auto">
            <div className="text-white ps-2 lg:ps-44 w-1/2">
              <p
                className="text-xl lg:py-3 lg:pr-2 lg:ps-5 mb-8 w-28 bg-[#538BFF] rounded-sm text-white"
                style={{
                  clipPath: "polygon(0% 0%, 80% 0%, 100% 100%, 0% 100%)",
                }}
              >
                STEP 1
              </p>
              <p className="lg:text-2xl text-[#9ECFFF] font-bold mb-5">
                Download the App and Sign up as a ZET agent
              </p>

              <div class="w-8/12 ps-[${progressNumber}%] bg-gray-200 rounded-full h-2 mb-3 dark:bg-gray-700">
                <div
                  class={`bg-blue-600  h-full rounded-full`}
                  style={{ width: `${progressNumber}%` }}
                  ref={progressBar}
                ></div>
              </div>
              <img
                src="https://zetapp.in/_next/static/media/downloadBtnDark.a0f01343.svg"
                alt=""
              />
            </div>
            <div className="text-white h-full flex justify-center items-center w-1/2">
              <video
                autoPlay
                loop
                controls
                className="lg:h-[400px] h-[200px] w-fit"
                src="/video.mp4"
              ></video>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" flex items-center justify-between h-full max-w-6xl mx-auto">
            <div className="text-white ps-2 lg:ps-44 w-1/2">
              <p
                className="text-xl lg:py-3 lg:pr-2 lg:ps-5 mb-8 w-28 bg-[#538BFF] rounded-sm text-white"
                style={{
                  clipPath: "polygon(0% 0%, 80% 0%, 100% 100%, 0% 100%)",
                }}
              >
                STEP 2
              </p>
              <p className="lg:text-2xl text-[#9ECFFF] font-bold mb-5">
                Register your customers and Recommend financial products
              </p>
              <div class="w-8/12 bg-gray-200 rounded-full h-2.5 mb-3 dark:bg-gray-700">
                <div
                  class={`bg-blue-600  h-2.5 rounded-full`}
                  style={{ width: `${progressNumber}%` }}
                  ref={progressBar}
                ></div>
              </div>
              <img
                src="https://zetapp.in/_next/static/media/downloadBtnDark.a0f01343.svg"
                alt=""
              />
            </div>
            <div className="text-white h-full flex justify-center items-center w-1/2">
              <video
                autoPlay
                loop
                controls
                className="lg:h-[400px] h-[200px] w-fit"
                src="/video.mp4"
              ></video>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" flex items-center justify-between h-full max-w-6xl mx-auto">
            <div className="text-white ps-2 lg:ps-44 w-1/2">
              <p
                className="text-xl lg:py-3 lg:pr-2 lg:ps-5 mb-8 w-28 bg-[#538BFF] rounded-sm text-white"
                style={{
                  clipPath: "polygon(0% 0%, 80% 0%, 100% 100%, 0% 100%)",
                }}
              >
                STEP 3
              </p>
              <p className="lg:text-2xl text-[#9ECFFF] font-bold mb-5">
                Start earning upto ₹ 1 Lakh every month
              </p>
              <div class="w-8/12 bg-gray-200 rounded-full h-2.5 mb-3 dark:bg-gray-700">
                <div
                  class={`bg-blue-600 h-2.5 rounded-full`}
                  style={{ width: `${progressNumber}%` }}
                  ref={progressBar}
                ></div>
              </div>
              <img
                src="https://zetapp.in/_next/static/media/downloadBtnDark.a0f01343.svg"
                alt=""
              />
            </div>
            <div className="text-white h-full flex justify-center items-center w-1/2">
              <video
                autoPlay
                loop
                controls
                className="lg:h-[400px] h-[200px] w-fit"
                src="/video.mp4"
              ></video>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      <img
        className="absolute right-0 bottom-1/4"
        src="https://zetapp.in/_next/static/media/earningDec.b2e9943b.svg"
        alt=""
      />
    </div>
  );
};

export default Earning;
