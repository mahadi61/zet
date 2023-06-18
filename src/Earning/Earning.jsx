"use client";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Autoplay } from "swiper";

const Earning = () => {
  // const progressCircle = useRef(null);
  // const progressContent = useRef(null);
  // const onAutoplayTimeLeft = (s, time, progress) => {
  //   progressCircle.current.style.setProperty("--progress", 1 - progress);
  //   progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  // };

  return (
    <div
      className="bg-[#0A2540] my-16     relative "
      style={{
        paddingTop: "15vw",
        paddingBottom: "20vw",
        clipPath: "polygon(0% 27%, 100% 0%, 100% 73%, 0% 100%)",
      }}
    >
      <div className="flex justify-center items-center flex-col max-w-6xl mx-auto z-10">
        <div className="text-white mt-14 mb-20 text-center">
          <h1 className="text-2xl text-white font-bold">
            Start Earning in 3 Easy Steps
          </h1>
          <p>We have create the app the make your earning easy</p>
        </div>
        <div></div>
      </div>
      <Swiper
        // centeredSlides={true}
        autoplay={{
          delay: 2500,
          // disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        Autoplay={true}
        modules={[Autoplay]}
        // onAutoplayTimeLeft={onAutoplayTimeLeft}
        className=""
      >
        <SwiperSlide>
          <div className=" flex items-center justify-between h-full max-w-6xl mx-auto">
            <div className="text-white ps-44 w-1/2">
              <p
                className="text-xl py-3 pr-2 ps-5 mb-8 w-28 bg-[#538BFF] rounded-sm text-white"
                style={{
                  clipPath: "polygon(0% 0%, 80% 0%, 100% 100%, 0% 100%)",
                }}
              >
                STEP 1
              </p>
              <p className="text-2xl text-[#9ECFFF] font-bold mb-5">
                Download the App and Sign up as a ZET agent
              </p>
              <img
                src="https://zetapp.in/_next/static/media/downloadBtnDark.a0f01343.svg"
                alt=""
              />
            </div>
            <div className="text-white h-full flex justify-center items-center w-1/2">
              <video
                autoPlay
                loop
                // controls
                className="h-[400px] w-fit"
                src="/video.mp4"
              ></video>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" flex items-center justify-between h-full max-w-6xl mx-auto">
            <div className="text-white ps-44 w-1/2">
              <p
                className="text-xl py-3 pr-2 ps-5 mb-8 w-28 bg-[#538BFF] rounded-sm text-white"
                style={{
                  clipPath: "polygon(0% 0%, 80% 0%, 100% 100%, 0% 100%)",
                }}
              >
                STEP 2
              </p>
              <p className="text-2xl text-[#9ECFFF] font-bold mb-5">
                Register your customers and Recommend financial products
              </p>
              <img
                src="https://zetapp.in/_next/static/media/downloadBtnDark.a0f01343.svg"
                alt=""
              />
            </div>
            <div className="text-white h-full flex justify-center items-center w-1/2">
              <video
                autoPlay
                loop
                // controls
                className="h-[400px] w-fit"
                src="/video.mp4"
              ></video>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" flex items-center justify-between h-full max-w-6xl mx-auto">
            <div className="text-white ps-44 w-1/2">
              <p
                className="text-xl py-3 pr-2 ps-5 mb-8 w-28 bg-[#538BFF] rounded-sm text-white"
                style={{
                  clipPath: "polygon(0% 0%, 80% 0%, 100% 100%, 0% 100%)",
                }}
              >
                STEP 3
              </p>
              <p className="text-2xl text-[#9ECFFF] font-bold mb-5">
                Start earning upto ₹ 1 Lakh every month
              </p>
              <img
                src="https://zetapp.in/_next/static/media/downloadBtnDark.a0f01343.svg"
                alt=""
              />
            </div>
            <div className="text-white h-full flex justify-center items-center w-1/2">
              <video
                autoPlay
                loop
                // controls
                className="h-[400px] w-fit"
                src="/video.mp4"
              ></video>
            </div>
          </div>
        </SwiperSlide>
        {/* <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div> */}
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
