"use client";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination } from "swiper";

const Customer = () => {
  // const progressCircle = useRef(null);
  // const progressContent = useRef(null);
  // const onAutoplayTimeLeft = (s, time, progress) => {
  //   progressCircle.current.style.setProperty("--progress", 1 - progress);
  //   progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  // };

  return (
    <div
      className="bg-[#145CC5] my-16 h-[700px] flex items-center"
      style={{ clipPath: "polygon(0% 25%, 100% 0%, 100% 75%, 0% 100%)" }}
    >
      <div
        className="bg-[#417FDA] flex items-center  max-w-6xl mx-auto h-[500px]"
        style={{ clipPath: "polygon(0px 30%, 100% 0%, 100% 70%, 0px 100%)" }}
      >
        <img
          className="h-full"
          src="https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpeeps1.2a271552.png&w=1920&q=75"
          alt=""
        />

        <div className="flex flex-col text-white -ms-16 pr-7">
          <h1 className="text-xl font-bold mb-4">THE ZET EFFECT</h1>
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Autoplay, Pagination]}
            className="text-white"
          >
            <SwiperSlide>
              <p className="text-2xl font-bold">
                More than ₹20 Cr earned by our Agents by selling Credit Cards
                and Loans
              </p>
            </SwiperSlide>
            <SwiperSlide>
              <p className="text-2xl font-bold">
                More than ₹20 Cr earned by our Agents by selling Credit Cards
                and Loans
              </p>
            </SwiperSlide>
            <SwiperSlide>
              <p className="text-2xl font-bold">
                More than ₹20 Cr earned by our Agents by selling Credit Cards
                and Loans
              </p>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Customer;
