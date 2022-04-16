import { useContext, useState } from "react";
import { Link } from "react-router-dom";

import logo from "../../assets/images/logo.svg";
import user from "../../assets/images/user.svg";
import home from "../../assets/images/home.svg";
import logout from "../../assets/images/logout.svg";

import UserContext from "../../UserContext";

const Header = ({ activeLink }) => {
  const { userDetails } = useContext(UserContext);
  const [menuVisible, setMenuVisible] = useState(false);
  const [userMenuVisible, setUserMenuVisible] = useState(false);

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
        <span className="block w-full h-[3px] bg-neutral-gray rounded"></span>
        <span className="block w-full h-[3px] bg-neutral-gray rounded"></span>
        <span className="block w-full h-[3px] bg-neutral-gray rounded"></span>
      </button>

      <nav
        className={`absolute lg:static top-20 right-5 left-5 sm:left-auto flex flex-col lg:flex-row lg:justify-between items-center sm:w-[360px] lg:w-full text-white lg:text-black font-medium py-6 px-5 lg:p-0 bg-primary-darkVoilet lg:bg-transparent rounded-xl lg:scale-100 lg:translate-x-0 lg:translate-y-0 transition-all
      ${
        menuVisible
          ? "scale-100 translate-x-0 translate-y-0"
          : "scale-0 translate-x-40 -translate-y-48"
      }
      `}
      >
        <ul className="flex flex-col lg:flex-row items-center lg:text-neutral-grayishViolet lg:font-semibold">
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

        {!userDetails ? (
          <div className="flex flex-col lg:flex-row items-center gap-3 w-full lg:w-auto pt-7 pb-3 lg:py-0 border-t border-solid lg:border-none border-[#8f78c9] mt-4 lg:mt-0">
            <Link to="/login">
              <button className="font-semibold lg:text-neutral-grayishViolet lg:hover:text-black lg:py-2.5 lg:px-8 transition-all">
                Login
              </button>
            </Link>
            <Link to="/sign-up">
              <button className="text-white font-semibold py-2.5 px-8 bg-primary-cyan lg:hover:bg-opacity-50 rounded-full transition-all">
                Sign Up
              </button>
            </Link>
          </div>
        ) : (
          <div className="lg:relative w-full lg:w-auto pt-7 pb-3 lg:py-0 border-t border-solid lg:border-none border-[#8f78c9] mt-4 lg:mt-0">
            <button
              onClick={() => {
                setUserMenuVisible(!userMenuVisible);
              }}
              className="hidden lg:flex items-center gap-3 py-2 px-4 hover:bg-gray-200 hover:bg-opacity-50 rounded-lg transition-all"
            >
              <span className="font-semibold">{userDetails.username}</span>
              <div className="grid place-items-center w-9 h-9 border-2 border-solid border-neutral-darkViolet rounded-full">
                {userDetails.profilePic ? (
                  ""
                ) : (
                  <img
                    src={user}
                    alt="user icon bg iconsax"
                    className="w-4 h-4"
                  />
                )}
              </div>
            </button>

            <div
              className={`lg:absolute top-[60px] -right-5 flex flex-col items-center lg:items-start gap-5 lg:gap-0 w-full lg:w-52 bg-white divide-y-2 rounded-xl shadow-xl transition-all
                ${
                  userMenuVisible
                    ? "scale-100 translate-x-0 translate-y-0"
                    : "scale-0 translate-x-10 -translate-y-24"
                }`}
            >
              <button className="flex items-center gap-3 lg:w-full text-left font-semibold lg:text-neutral-darkBlue lg:py-5 lg:px-8 transition-all">
                <img
                  src={home}
                  alt="home icon by iconsax"
                  className="hidden lg:inline-block"
                />
                Dashboard
              </button>
              <button className="flex items-center gap-3 lg:w-full text-left font-semibold lg:text-secondary-red lg:py-5 lg:px-8 transition-all">
                <img
                  src={logout}
                  alt="logout icon by iconsax"
                  className="hidden lg:inline-block"
                />
                Log Out
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

Header.defaultProps = {
  activeLink: null,
};

export default Header;
