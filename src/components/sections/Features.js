import iconBrandRecognition from "../../assets/images/icon-brand-recognition.svg";
import iconDetailedRecords from "../../assets/images/icon-detailed-records.svg";
import iconFullyCustomizable from "../../assets/images/icon-fully-customizable.svg";

const featuresArray = [
  {
    id: 1,
    icon: iconBrandRecognition,
    title: "Brand Recognition",
    content:
      "Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content.",
  },
  {
    id: 2,
    icon: iconDetailedRecords,
    title: "Detailed Records",
    content:
      "Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.",
  },
  {
    id: 3,
    icon: iconFullyCustomizable,
    title: "Fully Customizable",
    content:
      "Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.",
  },
];

const Features = () => {
  return (
    <div className="px-5 lg:px-20 xl:px-36 mt-20">
      <div className="flex flex-col items-center gap-6 text-center">
        <h2 className="text-3xl font-bold text-neutral-darkViolet">
          Advanced Statistics
        </h2>
        <p className="max-w-[480px] font-medium text-neutral-grayishViolet">
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </p>
      </div>

      <div className="flex flex-col xl:flex-row xl:justify-evenly items-center gap-28 xl:gap-6 mt-24 xl:mt-0">
        {featuresArray.map((feature) => (
          <div
            className={`relative max-w-[360px] xl:max-w-[450px] ${
              featuresArray.indexOf(feature) === 1 && "xl:pt-28"
            } ${featuresArray.indexOf(feature) === 2 && "xl:pt-56"}`}
          >
            <div className="flex flex-col items-center xl:items-start text-center xl:text-left pb-10 px-5 xl:px-7 bg-white rounded-md">
              <div className="grid place-items-center w-24 h-24 bg-neutral-darkBlue -mt-12 rounded-full">
                <img src={feature.icon} alt={feature.title} />
              </div>
              <h3 className="text-2xl font-bold text-neutral-darkViolet mt-8">
                {feature.title}
              </h3>
              <p className="font-medium text-neutral-grayishViolet leading-7 mt-4">
                {feature.content}
              </p>
            </div>
            {featuresArray.indexOf(feature) !== 2 && (
              <span className="absolute xl:top-1/2 xl:translate-y-[400%] left-1/2 xl:left-auto xl:-right-40 -translate-x-1/2 xl:-translate-x-0 block w-2.5 xl:w-40 h-40 xl:h-2.5 bg-primary-cyan"></span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
