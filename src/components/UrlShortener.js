import { useEffect, useState } from "react";

import ShortenedLink from "./ShortenedLink";

const UrlShortener = () => {
  const getStoredLinks = JSON.parse(localStorage.getItem("links")) ?? [];
  const [url, setUrl] = useState("");
  const [links, setLinks] = useState(getStoredLinks);
  const [error, setError] = useState(false);

  useEffect(() => {
    localStorage.setItem("links", JSON.stringify(links));
  }, [links]);

  const shortenLink = async (e) => {
    e.preventDefault();
    if (url.replaceAll(" ", "") === "") {
      setError(true);
      return;
    }

    const res = await fetch(`https://api.shrtco.de/v2/shorten?url=${url}`);
    const fetchedLink = await res.json();
    fetchedLink.ok ? setLinks([...links, fetchedLink.result]) : setError(true);
  };

  return (
    <div className="mx-5 lg:mx-20 xl:mx-36 -mt-24 md:-mt-20">
      <form onSubmit={shortenLink}>
        <div className="url-shortener flex flex-col md:flex-row gap-7 py-8 md:py-10 px-6 md:px-12 rounded-lg">
          <div className="w-full relative">
            <input
              type="text"
              name="url"
              id="url"
              value={url}
              onFocus={() => setError(false)}
              onChange={(e) => setUrl(e.target.value)}
              className={`w-full py-3 md:py-4 px-4 md:px-7 border-4 border-solid focus:border-primary-cyan rounded-md focus:outline-none transition-all duration-300 ${
                error ? "border-secondary-red" : "border-transparent"
              }`}
            />
            <span
              className={`placeholder-text absolute top-1/2 left-4 md:left-7 -translate-y-1/2 text-neutral-grayishViolet font-medium text-sm transition-all duration-300 pointer-events-none ${
                url !== "" && "left-10 opacity-0 invisible"
              } ${error && "text-secondary-red"}`}
            >
              Shorten a url here...
            </span>
            <span
              className={`absolute -bottom-6 z-30 left-2 w-max text-secondary-red text-sm transition-all duration-300 ${
                error ? "visible opacity-100" : "invisible opacity-0"
              }`}
            >
              Please add valid a url
            </span>
          </div>
          <button className="w-full md:w-[180px] text-white font-semibold py-3 md:py-4 px-4 md:px-8 bg-primary-cyan hover:bg-[#63dddd] rounded-md transition-colors duration-200">
            Shorten it!
          </button>
        </div>
      </form>

      <div className="flex flex-col gap-5 mt-5">
        {links.length !== 0 &&
          links.map((link) => (
            <ShortenedLink key={links.indexOf(link)} data={link} />
          ))}
      </div>
    </div>
  );
};

export default UrlShortener;
