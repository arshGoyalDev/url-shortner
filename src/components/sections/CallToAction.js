const CallToAction = () => {
  return (
    <section className="call-to-action flex flex-col gap-6 lg:gap-8 items-center justify-center py-24 mt-20 md:mt-28 lg:mt-36">
      <h2 className="text-3xl lg:text-4xl font-bold text-white">
        Boost your links today
      </h2>
      <button className="text-white lg:text-lg font-semibold py-2.5 lg:py-4 px-8 lg:px-10 bg-primary-cyan lg:hover:bg-[#58fafa] rounded-full transition-colors">
        Get Started
      </button>
    </section>
  );
};

export default CallToAction;
