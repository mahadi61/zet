const Footer = () => {
  return (
    <div
      className="bg-[url('https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FAboutUs.085fb7a2.png&w=3840&q=100')] px-5 lg:px-0"
      style={{ height: "90vh" }}
    >
      <div className="max-w-6xl mx-auto pt-11">
        <div className="border-b-2 border-white lg:pb-4">
          <img
            className="w-28"
            src="https://zetapp.in/_next/static/media/zet_logo_white.04e35c15.svg"
            alt=""
          />
        </div>
        <footer className="footer lg:py-10 text-white">
          <div>
            <span className="text-xl">Company</span>
            <a className="link link-hover">About Us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Partner With Us</a>
            <a className="link link-hover">Blog</a>
          </div>
          <div>
            <span className="text-xl">Legal</span>
            <a className="link link-hover">privacy policy</a>
            <a className="link link-hover">terms-of-use</a>
          </div>
          <div>
            <span className="text-xl">Conatct</span>
            <a className="link link-hover flex gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                />
              </svg>
              hi@zetapp.in
            </a>
            <a className="link link-hover flex gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                />
              </svg>
              +999999999999
            </a>
          </div>
          <div>
            <span className="text-xl">Social</span>
            <div className="grid grid-flow-col gap-4">
              <img
                src="https://zetapp.in/_next/static/media/linkedin.99e56649.svg"
                alt=""
              />
              <img
                src="https://zetapp.in/_next/static/media/instagram.146ba33a.svg"
                alt=""
              />
              <img
                src="https://zetapp.in/_next/static/media/facebook.cccadfff.svg"
                alt=""
              />
              <img
                src="https://zetapp.in/_next/static/media/TelegramImg.2d51b03f.svg"
                alt=""
              />
              <img
                src="https://zetapp.in/_next/static/media/WhatsappImg.a5c0a9a6.svg"
                alt=""
              />
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
