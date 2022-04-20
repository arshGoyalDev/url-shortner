import working from '../../assets/images/illustration-working.svg'
const Hero = () => {
  return (
    <section className='flex flex-col-reverse gap-6 px-4 overflow-hidden'>
      <div className="flex flex-col items-center">
        <h1 className="w-68 text-neutral-darkViolet text-4xl text-center font-bold mx-auto">More than just shorter links</h1>
        <p className="text-neutral-grayishViolet font-medium text-center mt-4">
          Build your brand's recognition and get detailed insights on how your
          links are performing.
        </p>
        <button className="text-white font-bold py-3 px-8 bg-primary-cyan mt-6 rounded-full">Get Started</button>
      </div>
      <div className='w-[140%]'>
        <img src={working} alt="working illustration" className='w-full' />
      </div>
    </section>
  );
};

export default Hero;
