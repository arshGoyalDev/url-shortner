import { useState } from "react";
import { Link } from "react-router-dom";

import logo from "../../assets/images/logo.svg";

const Header = ({ activeLink }) => {
  const [menuVisible, setMenuVisible] = useState(false);

  return (
    <header className="relative flex justify-between lg:justify-start items-center lg:gap-8 py-6 lg:py-8 px-5 lg:px-20 xl:px-36">
      <Link to='/'>
        <img src={logo} alt="Shortly" />
      </Link>

      <button
        aria-label="menu-toggle-btn"
        className="p-1 flex lg:hidden flex-col gap-[5.5px] w-8 h-7"
        onClick={() => {
          setMenuVisible(!menuVisible);
        }}
      >
        <span className="block w-full h-[3px] bg-gray-400 rounded"></span>
        <span className="block w-full h-[3px] bg-gray-400 rounded"></span>
        <span className="block w-full h-[3px] bg-gray-400 rounded"></span>
      </button>

      <nav
        className={`absolute lg:static top-20 right-5 left-5 sm:left-auto sm:w-[360px] lg:w-full flex flex-col lg:flex-row lg:justify-between items-center py-6 px-5 lg:p-0 bg-[#3a3053] lg:bg-transparent text-white lg:text-black font-bold rounded-xl transition-all lg:scale-100 lg:translate-x-0 lg:translate-y-0
      ${
        menuVisible
          ? "scale-100 translate-x-0 translate-y-0"
          : "scale-0 translate-x-40 -translate-y-48"
      }
      `}
      >
        <ul className="flex flex-col lg:flex-row items-center lg:text-gray-400">
          <Link to="/features">
            <li className="py-3 px-4 rounded-md hover:text-black transition-colors">Features</li>
          </Link>
          <Link to="/pricing">
          <li className="py-3 px-4 rounded-md hover:text-black transition-colors">Pricing</li>
          </Link>
          <Link to="/resources">
          <li className="py-3 px-4 rounded-md hover:text-black transition-colors">Resources</li>
          </Link>
        </ul>

        <div className="flex flex-col lg:flex-row items-center gap-3 w-full lg:w-auto mt-4 lg:mt-0 pt-3 lg:pt-0 border-t border-solid lg:border-none border-[#8f78c9]">
          <Link to='/login'>
            <button className="py-2.5 px-8 font-bold lg:text-gray-400">Login</button>
          </Link>
          <Link to='/sign-up'>
          <button className="py-2.5 px-8 text-white font-bold bg-[#2bd1cf] rounded-full">
            Sign Up
          </button>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
