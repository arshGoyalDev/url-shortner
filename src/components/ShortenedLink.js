import { useEffect, useState } from "react";

const ShortenedLink = ({ data }) => {
  const [copied, setCopied] = useState(false);

  const copyLink = async () => {
    await navigator.clipboard.writeText(data.full_short_link);
    setCopied(true);
  };

  useEffect(() => {
    if (!copied) return;

    const timeout = setTimeout(() => {
      setCopied(false);
    }, 3000);
    return () => clearTimeout(timeout);
  }, [copied]);

  return (
    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between w-full lg:py-4 lg:px-5 bg-white rounded-md">
      <a
        href={data.original_link}
        target="_blank"
        rel="noreferrer noopener"
        className="block break-words font-medium hover:text-neutral-grayishViolet pt-5 pb-4 px-4 sm:px-6 lg:p-0 border-b-2 lg:border-none border-solid border-gray-200 transition-colors"
      >
        {data.original_link}
      </a>
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-4 pb-6 sm:py-5 px-4 sm:px-6 lg:p-0">
        <a
          href={data.full_short_link}
          target="_blank"
          rel="noreferrer noopener"
          className="text-primary-cyan hover:text-opacity-50 font-medium transition-colors"
        >
          {data.full_short_link}
        </a>
        <button
          onClick={copyLink}
          className={`sm:w-28 text-white font-semibold py-3 px-8 sm:px-0 hover:bg-opacity-80 rounded-md transition-all ${
            copied ? "bg-neutral-darkBlue" : "bg-primary-cyan "
          }`}
        >
          {copied ? "Copied!" : "Copy"}
        </button>
      </div>
    </div>
  );
};

export default ShortenedLink;
