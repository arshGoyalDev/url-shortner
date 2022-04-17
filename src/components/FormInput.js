import { useState } from "react";

import eye from "../assets/images/eye.svg";
import eyeSlash from "../assets/images/eye-slash.svg";

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

  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor={id}
        className="text-sm text-neutral-grayishViolet font-medium pl-1"
      >
        {placeholder}
      </label>
      <div className="relative">
        {placeholder !== "Password" ? (
          <input
            type="text"
            id={id}
            name={id}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className={`input w-full text-sm py-3 px-4 bg-gray-100 border-2 border-solid border-gray-100 focus:border-[#2bd1cf] focus:outline-none rounded-xl ${
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
              className={`input w-full text-sm py-3 px-4 bg-gray-100 border-2 border-solid border-gray-100 focus:border-[#2bd1cf] focus:outline-none rounded-xl ${
                error ? "border-secondary-red" : "border-gray-100"
              }`}
            />
            <div className="absolute top-3 right-4 z-50 w-6 h-6 cursor-pointer">
              <label
                htmlFor={id}
                onClick={togglePassword}
                className="cursor-pointer"
              >
                {inputType === "password" ? (
                  <img src={eye} alt="eye icon by flaticon uicons" />
                ) : (
                  <img src={eyeSlash} alt="eye-slash icon by flaticon uicons" />
                )}
              </label>
            </div>
          </>
        )}
        <label
          htmlFor={id}
          className={`placeholder absolute top-3.5 left-4 text-neutral-grayishViolet text-sm cursor-text transition-all duration-300 ${
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
