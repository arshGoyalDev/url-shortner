import { useState } from "react";

import logo from "../../assets/images/logo.svg";

const Header = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  return (
    <header className="relative flex justify-between lg:justify-start items-center lg:gap-8 xl:gap-12 py-6 lg:py-8 px-5 lg:px-20 xl:px-36">
      <img src={logo} alt="Shortly" />

      <button
        aria-label="menu-toggle-btn"
        className="lg:hidden flex flex-col gap-[5.5px] w-8 h-7 p-1"
        onClick={() => {
          setMenuVisible(!menuVisible);
        }}
      >
        <span className="block w-full h-[3px] bg-neutral-gray rounded"></span>
        <span className="block w-full h-[3px] bg-neutral-gray rounded"></span>
        <span className="block w-full h-[3px] bg-neutral-gray rounded"></span>
      </button>

      <nav
        className={`absolute lg:static top-20 right-5 left-5 sm:left-auto flex flex-col lg:flex-row lg:justify-between items-center sm:w-[360px] lg:w-full text-white lg:text-black font-medium py-6 px-5 lg:p-0 bg-primary-darkVoilet lg:bg-transparent rounded-xl lg:scale-100 lg:translate-x-0 lg:translate-y-0 transition-all
      ${
        menuVisible
          ? "scale-100 translate-x-0 translate-y-0"
          : "scale-0 translate-x-36 -translate-y-48"
      }
      `}
      >
        <ul className="flex flex-col lg:flex-row items-center lg:text-neutral-grayishViolet">
          <li>
            <button className="lg:font-semibold hover:text-black py-3 px-4 rounded-md transition-colors">
              Features
            </button>
          </li>
          <li>
            <button className="lg:font-semibold hover:text-black py-3 px-4 rounded-md transition-colors">
              Pricing
            </button>
          </li>
          <li>
            <button className="lg:font-semibold hover:text-black py-3 px-4 rounded-md transition-colors">
              Resources
            </button>
          </li>
        </ul>

        <div className="flex flex-col lg:flex-row items-center gap-3 w-full lg:w-auto pt-7 pb-3 lg:py-0 border-t border-solid lg:border-none border-[#8f78c9] mt-4 lg:mt-0">
          <button className="font-semibold lg:text-neutral-grayishViolet lg:hover:text-black lg:py-2.5 lg:px-8 rounded-md transition-colors">
            Login
          </button>
          <button className="text-white font-semibold py-2.5 px-8 bg-primary-cyan lg:hover:bg-opacity-50 rounded-full transition-colors">
            Sign Up
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
