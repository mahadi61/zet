const ChooseUs = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-center items-center gap-20 my-20">
      <div className="text-center bg-no-repeat bg-[url('https://zetapp.in/_next/static/media/decImg.ead9275f.svg')]">
        <h2 className="text-xl font-bold">
          Why <span className="text-[#2075f0]">Choose Us</span>
        </h2>
        <p className="mb-7">Why we are loved by our customers</p>
        <img
          src="https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FwhyUsHero.76b303ee.png&w=640&q=75"
          alt=""
        />
      </div>
      <div
        data-aos="fade-up"
        data-aos-duration="2000"
        className="grid  lg:grid-cols-2 gap-4"
      >
        <div className="w-64">
          <img
            src="https://zetapp.in/_next/static/media/zero_investment.d5743aab.svg"
            alt=""
          />
          <h3 className="text-xl mt-8">Zero Investment</h3>
          <p>Build your business without any investment</p>
        </div>
        <div className="w-64">
          <img
            src="https://zetapp.in/_next/static/media/Fin_products.0e8a0582.svg"
            alt=""
          />
          <h3 className="text-xl mt-8">Zero Investment</h3>
          <p>Build your business without any investment</p>
        </div>
        <div className="w-64">
          <img
            src="https://zetapp.in/_next/static/media/Icon_support.c8382fc1.svg"
            alt=""
          />
          <h3 className="text-xl mt-8">Zero Investment</h3>
          <p>Build your business without any investment</p>
        </div>
        <div className="w-64">
          <img
            src="https://zetapp.in/_next/static/media/quick_payout.1d689e09.svg"
            alt=""
          />
          <h3 className="text-xl mt-8">Zero Investment</h3>
          <p>Build your business without any investment</p>
        </div>
        <div className="w-64">
          <img
            src="https://zetapp.in/_next/static/media/customerSupport.5780cd23.svg"
            alt=""
          />
          <h3 className="text-xl mt-8">Zero Investment</h3>
          <p>Build your business without any investment</p>
        </div>
        <div className="w-64">
          <img
            src="https://zetapp.in/_next/static/media/financialProduct.1b3d6eec.svg"
            alt=""
          />
          <h3 className="text-xl mt-8">Zero Investment</h3>
          <p>Build your business without any investment</p>
        </div>
      </div>
    </div>
  );
};

export default ChooseUs;
