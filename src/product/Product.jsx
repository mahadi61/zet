const Product = () => {
  return (
    <div className="mt-9">
      <div className="min-h-screen bg-sky-200 relative">
        <div className="flex flex-col max-w-6xl mx-auto">
          <div className="hero-content ">
            <div className="max-w-md text-center mt-9">
              <h2 className="text-2xl font-bold">Top Brands on ZET</h2>
              <p>We are trusted by best brand in the country</p>
            </div>
          </div>
          <div className="grid lg:grid-cols-2 px-3 lg:px-0 gap-4 z-10">
            {/* card 1 */}
            <div>
              <div
                className="card card-side  "
                style={{ backgroundColor: "rgb(237, 255, 236)" }}
              >
                <figure className="ps-8">
                  <img
                    className="w-32"
                    src="https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FCC.28aa750d.png&w=1920&q=75"
                    alt="Movie"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">CREDIT CARDS</h2>
                  <p>
                    100% Contactless Application Process with Instant Approval
                    From Top Banks.
                  </p>
                </div>
              </div>
            </div>
            {/* card 2 */}
            <div>
              <div
                className="card card-side bg-amber-300 "
                style={{ backgroundColor: "rgb(255, 241, 202)" }}
              >
                <figure className="ps-8">
                  <img
                    className="w-32"
                    src="https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FLoan.cadd88a9.png&w=1920&q=75"
                    alt="Movie"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">LOANS</h2>
                  <p>
                    100% online process. Instant offers. Affordable Rate of
                    Interest on loans.
                  </p>
                </div>
              </div>
            </div>
            {/* card 3 */}
            <div>
              <div
                className="card card-side bg-pink-300 "
                style={{ backgroundColor: "rgb(255, 238, 231)" }}
              >
                <figure className="ps-8">
                  <img
                    className="w-32"
                    src="https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FBNPL.3974f2b2.png&w=1920&q=75"
                    alt="Movie"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">BUY NOW PAY LATER</h2>
                  <p>
                    Short-term financing that allows consumers to make purchases
                    and pay for them over time.
                  </p>
                </div>
              </div>
            </div>
            {/* card 4 */}
            <div>
              <div
                className="card card-side"
                style={{ backgroundColor: "rgb(255, 245, 231)" }}
              >
                <figure className="ps-8">
                  <img
                    className="w-32"
                    src="https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FAccountSave.69831c7c.png&w=1920&q=75"
                    alt="Movie"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">SAVING ACCOUNTS</h2>
                  <p>
                    ZET offers range of savings account that suits your personal
                    needs for the banking.
                  </p>
                </div>
              </div>
            </div>
            {/* card end */}
          </div>
        </div>
        <div className="flex justify-between flex-col lg:flex-row w-full absolute top-0">
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
