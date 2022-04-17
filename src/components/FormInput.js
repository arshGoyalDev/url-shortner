import { useState } from "react";

import eye from "../assets/images/eye.svg";
import eyeSlash from "../assets/images/eye-slash.svg";
import user from "../assets/images/user.svg";
import email from "../assets/images/email.svg";
import password from "../assets/images/password.svg";

const FormInput = ({
  id,
  placeholder,
  value,
  setValue,
  error,
  errorMessage,
}) => {
  const [inputType, setInputType] = useState("password");

  const togglePassword = () => {
    inputType === "password" ? setInputType("text") : setInputType("password");
  };

  const imgSrc = () => {
    if (id === "username") return user;
    if (id === "email") return email;
    if (id === "password") return password;
  };

  return (
    <div className="flex flex-col gap-2">
      <div className="relative">
        <label
          htmlFor={id}
          className="absolute z-50 top-1/2 left-0 -translate-y-1/2 w-12 h-5 grid place-items-center"
        >
          <img
            src={imgSrc()}
            alt={`${id} icon by flaticon uicons`}
            className="w-4 h-4"
          />
        </label>
        {placeholder !== "Password" ? (
          <input
            type="text"
            id={id}
            name={id}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className={`input w-full text-sm py-3 pl-12 pr-4 bg-gray-100 border-2 border-solid border-gray-100 focus:border-[#2bd1cf] focus:outline-none rounded-xl ${
              error ? "border-secondary-red" : "border-gray-100"
            }`}
          />
        ) : (
          <>
            <input
              type={inputType}
              name={id}
              id={id}
              value={value}
              onChange={(e) => setValue(e.target.value)}
              className={`input w-full text-sm py-3 pl-12 pr-[54px] bg-gray-100 border-2 border-solid border-gray-100 focus:border-[#2bd1cf] focus:outline-none rounded-xl ${
                error ? "border-secondary-red" : "border-gray-100"
              }`}
            />
            <div className="absolute top-3 right-0 z-50 grid place-items-center w-[54px] h-6 cursor-pointer">
              <label
                htmlFor={id}
                onClick={togglePassword}
                className="cursor-pointer"
              >
                <div className={`relative w-5 show-password ${inputType === "text" && "slash"}`}>
                  <img src={eye} alt="eye icon by flaticon uicons" />
                  <span></span>
                </div>
              </label>
            </div>
          </>
        )}
        <label
          htmlFor={id}
          className={`placeholder absolute top-3.5 left-12 text-neutral-grayishViolet text-sm cursor-text transition-all duration-300 ${
            value !== "" && "hide-placeholder"
          }`}
        >
          {placeholder.toLowerCase()}
        </label>
      </div>

      {error && (
        <span className="text-red-600 text-xs ml-2">{errorMessage}</span>
      )}
    </div>
  );
};

export default FormInput;
