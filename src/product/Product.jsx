const Product = () => {
  return (
    <div className="mt-9">
      <div className="min-h-screen bg-sky-200 relative">
        {/* <div className="hero-overlay bg-opacity-60"></div> */}
        <div className="max-w-6xl mx-auto">
          <div className="hero-content ">
            <div className="max-w-md text-center mt-9">
              <h2 className="text-2xl font-bold">Top Brands on ZET</h2>
              <p>We are trusted by best brand in the country</p>
            </div>
          </div>
        </div>
        <div className="flex justify-between w-full absolute top-0">
          <img
            src="https://zetapp.in/_next/static/media/decImg.ead9275f.svg"
            alt=""
          />
          <img
            className=""
            src="https://zetapp.in/_next/static/media/decImg2.3cc2964a.svg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Product;
