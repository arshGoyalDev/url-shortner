import { useState } from "react";

import logo from "../../assets/images/logo.svg";

const Header = ({ activeLink }) => {
  const [menuVisible, setMenuVisible] = useState(false);

  return (
    <header className="relative flex justify-between items-center py-6 px-5">
      <img src={logo} alt="Shortly" />

      <button
        aria-label="menu-toggle-btn"
        className="p-1 flex flex-col gap-[5.5px] w-8 h-7"
        onClick={() => {
          setMenuVisible(!menuVisible);
        }}
      >
        <span className="block w-full h-[3px] bg-gray-400 rounded"></span>
        <span className="block w-full h-[3px] bg-gray-400 rounded"></span>
        <span className="block w-full h-[3px] bg-gray-400 rounded"></span>
      </button>

      <nav
        className={`absolute top-20 right-5 left-5 flex flex-col items-center py-6 px-5 bg-[#3a3053] text-white font-bold rounded-lg transition-all
      ${
        menuVisible
          ? "scale-100 translate-x-0 translate-y-0"
          : "scale-0 translate-x-40 -translate-y-48"
      }
      `}
      >
        <ul className="flex flex-col items-center">
          <li className="py-3 px-4 rounded-md">Features</li>
          <li className="py-3 px-4 rounded-md">Pricing</li>
          <li className="py-3 px-4 rounded-md">Resources</li>
        </ul>

        <div className="flex flex-col items-center gap-3 w-full mt-4 pt-3 border-t border-solid border-[#8f78c9]">
          <button className="w-full py-2.5 font-bold">Login</button>
          <button className="w-full py-2.5 font-bold bg-[#2bd1cf] rounded-full">
            Sign Up
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
