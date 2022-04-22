
const UrlShortener = () => {
  return (
    <form>
      <div className="url-shortener flex flex-col md:flex-row gap-5 py-8 md:py-10 px-6 md:px-12 mx-5 lg:mx-20 xl:mx-36 -mt-20 md:-mt-16 rounded-lg">
        <div className="w-full">
          <input
            type="text"
            name="link"
            id="link"
            placeholder="Shorten a link..."
            className="w-full py-3 md:py-4 px-4 md:px-7 rounded-md focus:outline-none"
          />
        </div>
        <button className="w-full md:w-[180px] text-white font-semibold py-3 md:py-4 px-4 md:px-8 rounded-md bg-primary-cyan">
          Shorten it!
        </button>
      </div>
    </form>
  );
};

export default UrlShortener;
