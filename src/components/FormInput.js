import { useState } from "react";

import eye from "../assets/images/eye.svg";
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
        {placeholder !== "Password" ? (
          <input
            type="text"
            id={id}
            name={id}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className={`input w-full text-sm py-3 pl-12 pr-4 bg-gray-100 border-2 border-solid focus:outline-none rounded-xl ${
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
              className={`input w-full text-sm py-3 pl-12 pr-[54px] bg-gray-100 border-2 border-solid focus:outline-none rounded-xl ${
                error ? "border-secondary-red" : "border-gray-100"
              }`}
            />
            <span className="absolute toggle-password top-1/2 -translate-y-1/2 right-2 z-50 grid place-items-center w-8 h-8 cursor-pointer transition-all">
              <span
                htmlFor={id}
                onClick={togglePassword}
                className="cursor-pointer"
              >
                <div
                  className={`relative w-4 show-password ${
                    inputType === "text" && "slash"
                  }`}
                >
                  <img src={eye} alt="eye icon by flaticon uicons" />
                  <span></span>
                </div>
              </span>
            </span>
          </>
        )}
        <label
          htmlFor={id}
          className="field-icon absolute z-50 top-1/2 left-2 -translate-y-1/2 w-8 h-8 grid place-items-center transition-all"
        >
          <img
            src={imgSrc()}
            alt={`${id} icon by flaticon uicons`}
            className="w-4 h-4"
          />
        </label>
        <span
          htmlFor={id}
          className={`placeholder absolute top-3.5 left-12 text-neutral-grayishViolet text-sm transition-all duration-300 pointer-events-none ${
            value !== "" && "hide-placeholder"
          }`}
        >
          {placeholder.toLowerCase()}
        </span>
      </div>

      {error && (
        <span className="text-red-600 text-xs ml-2">{errorMessage}</span>
      )}
    </div>
  );
};

export default FormInput;
