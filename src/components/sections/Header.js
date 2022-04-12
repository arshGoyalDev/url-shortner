import { useState } from "react";
import { Link } from "react-router-dom";

import logo from "../../assets/images/logo.svg";

const Header = ({ activeLink }) => {
  const [menuVisible, setMenuVisible] = useState(false);

  return (
    <header className="relative flex justify-between lg:justify-start items-center lg:gap-8 xl:gap-12 py-6 lg:py-8 px-5 lg:px-20 xl:px-36">
      <Link to="/">
        <img src={logo} alt="Shortly" />
      </Link>

      <button
        aria-label="menu-toggle-btn"
        className="lg:hidden flex flex-col gap-[5.5px] w-8 h-7 p-1"
        onClick={() => {
          setMenuVisible(!menuVisible);
        }}
      >
        <span className="block w-full h-[3px] bg-gray-400 rounded"></span>
        <span className="block w-full h-[3px] bg-gray-400 rounded"></span>
        <span className="block w-full h-[3px] bg-gray-400 rounded"></span>
      </button>

      <nav
        className={`absolute lg:static top-20 right-5 left-5 sm:left-auto flex flex-col lg:flex-row lg:justify-between items-center sm:w-[360px] lg:w-full text-white lg:text-black font-medium py-6 px-5 lg:p-0 bg-[#3a3053] lg:bg-transparent rounded-xl lg:scale-100 lg:translate-x-0 lg:translate-y-0 transition-all
      ${
        menuVisible
          ? "scale-100 translate-x-0 translate-y-0"
          : "scale-0 translate-x-40 -translate-y-48"
      }
      `}
      >
        <ul className="flex flex-col lg:flex-row items-center lg:text-gray-400">
          <Link to="/features">
            <li className="py-3 px-4 rounded-md hover:text-black transition-colors">
              Features
            </li>
          </Link>
          <Link to="/pricing">
            <li className="py-3 px-4 rounded-md hover:text-black transition-colors">
              Pricing
            </li>
          </Link>
          <Link to="/resources">
            <li className="py-3 px-4 rounded-md hover:text-black transition-colors">
              Resources
            </li>
          </Link>
        </ul>

        <div className="flex flex-col lg:flex-row items-center gap-3 w-full lg:w-auto pt-3 lg:pt-0 border-t border-solid lg:border-none border-[#8f78c9] mt-4 lg:mt-0">
          <Link to="/login">
            <button className="font-medium lg:text-gray-400 lg:hover:text-black py-2.5 px-8 transition-all">
              Login
            </button>
          </Link>
          <Link to="/sign-up">
            <button className="text-white font-semibold py-2.5 px-8 bg-[#2bd1cf] lg:hover:bg-opacity-50 rounded-full transition-all">
              Sign Up
            </button>
          </Link>
        </div>
      </nav>
    </header>
  );
};

Header.defaultProps = {
  activeLink: null,
};

export default Header;
