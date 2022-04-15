import { useState } from "react";

import eye from "../assets/images/eye.svg";
import eyeSlash from "../assets/images/eye-slash.svg";

const FormInput = ({ placeholder, value, setValue, error, errorMessage }) => {
  const [inputType, setInputType] = useState("password");

  const togglePassword = () => {
    inputType === "password" ? setInputType("text") : setInputType("password");
  };

  return (
    <div className="flex flex-col gap-2">
      <label htmlFor="email" className="text-sm text-gray-600 font-medium pl-1">
        {placeholder}
      </label>
      {placeholder !== "Password" ? (
        <input
          type="text"
          name={value}
          placeholder={placeholder}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className={`w-full text-sm py-3 px-4 bg-gray-100 border-2 border-solid border-gray-100 focus:border-[#2bd1cf] focus:outline-none rounded-xl ${
            error ? "border-red-600" : "border-gray-100"
          }`}
        />
      ) : (
        <div className="relative">
          <input
            type={inputType}
            name={value}
            placeholder={placeholder}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className={`w-full text-sm py-3 px-4 bg-gray-100 border-2 border-solid border-gray-100 focus:border-[#2bd1cf] focus:outline-none rounded-xl ${
              error ? "border-red-600" : "border-gray-100"
            }`}
          />
          <div className="absolute top-3 right-4 z-50" onClick={togglePassword}>
            {inputType === "password" ? (
              <img src={eye} alt="eye icon by iconsax" />
            ) : (
              <img src={eyeSlash} alt="eye-slash icon by iconsax" />
            )}
          </div>
        </div>
      )}
      {error && (
        <span className="text-red-600 text-xs ml-2">{errorMessage}</span>
      )}
    </div>
  );
};

export default FormInput;
