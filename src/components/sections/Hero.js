import working from "../../assets/images/illustration-working.svg";
const Hero = () => {
  return (
    <section className="flex flex-col-reverse lg:flex-row lg:items-center lg:justify-between gap-6 md:gap-16 xl:gap-0 px-4 lg:px-20 xl:px-36 overflow-hidden">
      <div className="flex flex-col items-center lg:items-start lg:w-[60%]">
        <h1 className="w-[280px] md:w-[400px] xl:w-[600px] text-neutral-darkViolet text-4xl md:text-5xl xl:text-7xl text-center lg:text-left font-bold">
          More than just shorter links
        </h1>
        <p className="w-[280px] md:w-[340px] lg:w-[400px] xl:w-[500px] text-neutral-grayishViolet font-medium text-center lg:text-left mt-4">
          Build your brand's recognition and get detailed insights on how your
          links are performing.
        </p>
        <button className="text-white font-bold py-3 px-8 bg-primary-cyan mt-6 rounded-full">
          Get Started
        </button>
      </div>
      <div className="w-[145%] lg:-mr-48 xl:-mr-64 lg:w-[80%] xl:w-[70%]">
        <img src={working} alt="working illustration" className="w-full" />
      </div>
    </section>
  );
};

export default Hero;
