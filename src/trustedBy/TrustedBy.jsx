import Marquee from "react-fast-marquee";

const TrustedBy = () => {
  return (
    <div className="text-center">
      <h2 className="text-2xl font-bold">Top Brands on ZET</h2>
      <p>We are trusted by best brand in the country</p>
      <Marquee className="mt-10">
        <div className="py-2 px-4 border-2 mx-6">
          <img
            src="https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FAmex.7272fe32.png&w=640&q=75"
            alt=""
          />
        </div>
        <div className="py-2 px-4 border-2 mx-6">
          <img
            src="https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FBOB.d87af468.png&w=640&q=75"
            alt=""
          />
        </div>
        <div className="py-2 px-4 border-2 mx-6">
          <img
            src="https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FYesBank.44b87df7.png&w=640&q=75"
            alt=""
          />
        </div>
        <div className="py-2 px-4 border-2 mx-6">
          <img
            src="https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FAufin.1cae185f.png&w=640&q=75"
            alt=""
          />
        </div>
        <div className="py-2 px-4 border-2 mx-6">
          <img
            src="https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FIcici.b8108647.png&w=640&q=75"
            alt=""
          />
        </div>
        <div className="py-2 px-4 border-2 mx-6">
          <img
            src="https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FBajaj.6a41ddf3.png&w=640&q=75"
            alt=""
          />
        </div>
        <div className="py-2 px-4 border-2 mx-6">
          <img
            src="https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FAxis.f45801e9.png&w=640&q=75"
            alt=""
          />
        </div>
      </Marquee>
    </div>
  );
};

export default TrustedBy;
