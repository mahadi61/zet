import NavLink from "@/components/NavLink";
import Link from "next/link";

const Navbar = () => {
  return (
    <div>
      <div className="navbar">
        <div className="navbar-start">
          <div className="dropdown z-10">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <NavLink
                  exact
                  activeClassName={"text-[#2075f0]"}
                  className=""
                  href="/"
                >
                  Home
                </NavLink>
              </li>

              <li>
                <NavLink
                  exact
                  activeClassName={"text-[#2075f0]"}
                  className=""
                  href="/aboutUs"
                >
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink
                  exact
                  activeClassName={"text-[#2075f0]"}
                  className=""
                  href=""
                >
                  Partner with Us
                </NavLink>
              </li>
              <li>
                <NavLink
                  exact
                  activeClassName={"text-[#2075f0]"}
                  className=""
                  href=""
                >
                  Blog
                </NavLink>
              </li>
            </ul>
          </div>

          <div>
            <img className="w-28" src="/logo.png" alt="" />
          </div>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className=" gap-4 menu-horizontal px-1">
            <li>
              <NavLink
                exact
                activeClassName={"text-[#2075f0]"}
                className=""
                href="/"
              >
                Home
              </NavLink>
            </li>

            <li>
              <NavLink
                exact
                activeClassName={"text-[#2075f0]"}
                className=""
                href="/aboutUs"
              >
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink
                exact
                activeClassName={"text-[#2075f0]"}
                className=""
                href=""
              >
                Partner with Us
              </NavLink>
            </li>
            <li>
              <NavLink
                exact
                activeClassName={"text-[#2075f0]"}
                className=""
                href=""
              >
                Blog
              </NavLink>
            </li>
          </ul>
          <Link
            href={""}
            className="px-2 py-2 rounded-lg ms-3 bg-[#2075f0] text-white"
          >
            Download ZET
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
