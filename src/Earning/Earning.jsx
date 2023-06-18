const Earning = () => {
  return (
    <div
      className="bg-[#0A2540] my-16 flex items-center  relative "
      style={{
        paddingTop: "15vw",
        paddingBottom: "20vw",
        clipPath: "polygon(0% 27%, 100% 0%, 100% 73%, 0% 100%)",
      }}
    >
      <div className="flex justify-center items-center flex-col max-w-6xl mx-auto z-10">
        <div className="text-white mt-14 mb-20">
          <h1 className="text-2xl text-white">Start Earning in 3 Easy Steps</h1>
          <p>We have create the app the make your earning easy</p>
        </div>
        <div className=" flex items-center justify-between h-full max-w-6xl mx-auto">
          <div className="text-white w-1/2">
            <p
              className="text-xl py-3 pr-2 ps-5 mb-8 w-28 bg-[#538BFF] rounded-sm text-white"
              style={{
                clipPath: "polygon(0% 0%, 80% 0%, 100% 100%, 0% 100%)}",
              }}
            >
              STEP 1
            </p>
            <p className="text-2xl font-bold mb-5">
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
              controls
              className="h-[400px] w-fit"
              src="/video.mp4"
            ></video>
          </div>
        </div>
      </div>
      <img
        className="absolute right-0"
        src="https://zetapp.in/_next/static/media/earningDec.b2e9943b.svg"
        alt=""
      />
    </div>
  );
};

export default Earning;
