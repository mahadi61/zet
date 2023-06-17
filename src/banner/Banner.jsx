import Link from "next/link";

const Banner = () => {
  return (
    <div className="max-w-6xl mx-auto lg:pt-12 pb-9">
      <div className="hero min-h-full bg-sky-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src="https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FHeroImgNew.d1d917dd.png&w=1920&q=75"
            className="max-w-xs lg:max-w-sm "
          />
          <div>
            <h1 className="text-5xl font-bold">
              Become a Financial Advisor and{" "}
              <span className="text-[#2075f0]">Earn Rs.1 Lakh/Month</span>
            </h1>
            <p className="py-6">No investment required</p>
            <Link href={""} className="">
              <img
                src="https://zetapp.in/_next/static/media/downloadBtnDark.a0f01343.svg"
                alt=""
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
