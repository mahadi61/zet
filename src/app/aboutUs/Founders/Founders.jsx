"use client";

import Tilt from "react-parallax-tilt";

const Founders = () => {
  return (
    <div
      className="py-16"
      style={{
        background:
          "linear-gradient(168deg, rgb(233, 244, 255) 0%, rgb(255, 255, 255) 100%)",
      }}
    >
      <h1 className="text-[#2F3440] text-4xl font-bold text-center mt-6">
        Meet our Founders
      </h1>
      <p className="text-center text-xl mt-2">Few words from founders desk</p>
      <div
        data-aos="fade-up"
        data-aos-duration="2000"
        className="grid lg:grid-cols-3 gap-28 mt-16 lg:mb-10 lg:px-16 px-6"
      >
        <Tilt
          tiltEnable={true}
          tiltReverse={true}
          tiltMaxAngleX={5}
          tiltMaxAngleY={5}
          scale={1.1}
          transitionSpeed={2000}
        >
          <div>
            <img
              src="https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FManish.519c8845.png&w=1080&q=75"
              alt=""
            />
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-xl mt-2">Manish Shara</h3>
                <p className="">Co- Founder & CEO</p>
              </div>
              <img
                className="w-11"
                src="https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FLinkedIn.6d99003c.png&w=256&q=75"
                alt=""
              />
            </div>
          </div>
        </Tilt>
        <Tilt
          tiltEnable={true}
          tiltReverse={true}
          tiltMaxAngleX={5}
          tiltMaxAngleY={5}
          scale={1.1}
          transitionSpeed={2000}
        >
          <div>
            <img
              src="https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FYash.126e24ca.png&w=1080&q=75"
              alt=""
            />

            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-xl mt-2">Yash Desai</h3>
                <p className="">Co- Founder</p>
              </div>
              <img
                className="w-11"
                src="https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FLinkedIn.6d99003c.png&w=256&q=75"
                alt=""
              />
            </div>
          </div>
        </Tilt>
        <Tilt
          tiltEnable={true}
          tiltReverse={true}
          tiltMaxAngleX={5}
          tiltMaxAngleY={5}
          scale={1.1}
          transitionSpeed={2000}
        >
          <div>
            <img
              src="https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FLokesh.ead063e7.png&w=1080&q=75"
              alt=""
            />

            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-xl mt-2">Lokesh Agarwal</h3>
                <p className="">CTO</p>
              </div>
              <img
                className="w-11"
                src="https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FLinkedIn.6d99003c.png&w=256&q=75"
                alt=""
              />
            </div>
          </div>
        </Tilt>
      </div>
    </div>
  );
};

export default Founders;
