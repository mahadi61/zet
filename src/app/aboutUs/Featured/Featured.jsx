const Featured = () => {
  return (
    <div className="bg-[#FAFBFE] py-20">
      <div className="max-w-6xl mx-auto my-12">
        <h1 className="text-[#2F3440] text-4xl text-center lg:text-left font-bold my-8">
          Got Featured
        </h1>
        <div className="grid lg:grid-cols-5 gap-2 mb-10 px-2 lg:px-0">
          <img
            src="https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FEconomicTimes.5724030e.png&w=1080&q=75"
            alt=""
          />
          <img
            src="https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FInc42.7697aec8.png&w=1080&q=75"
            alt=""
          />
          <img
            src="https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmint.410f3a1a.png&w=1080&q=75"
            alt=""
          />
          <img
            src="https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FYourStory.1efabc81.png&w=1080&q=75"
            alt=""
          />
          <img
            src="https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FBusinessStandard.047c592d.png&w=1080&q=75"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Featured;
