import { useState } from "react";

const UrlShortener = () => {
  const [link, setLink] = useState("");


  return (
    <form>
      <div className="url-shortener flex flex-col md:flex-row gap-5 py-8 md:py-10 px-6 md:px-12 mx-5 lg:mx-20 xl:mx-36 -mt-20 md:-mt-16 rounded-lg">
        <div className="w-full relative">
          <input
            type="text"
            name="link"
            id="link"
            value={link}
            onChange={(e) => setLink(e.target.value)}
            className="w-full py-3 md:py-4 px-4 md:px-7 rounded-md focus:outline-none"
          />
          <span className={`absolute top-1/2 left-4 md:left-7 -translate-y-1/2 text-neutral-grayishViolet font-medium text-sm transition-all duration-300 pointer-events-none ${link !== "" && "left-10 opacity-0 invisible"}`}>Shorten a link here...</span>
        </div>
        <button className="w-full md:w-[180px] text-white font-semibold py-3 md:py-4 px-4 md:px-8 bg-primary-cyan hover:bg-[#63dddd] rounded-md transition-colors duration-200">
          Shorten it!
        </button>
      </div>
    </form>
  );
};

export default UrlShortener;
