import illustrationIntro from '../assets/images/illustration-intro.svg';
const Hero = () => {
  return (
    <section id='hero'>
      {/* Flex Container */}
      <div className='container flex flex-col-reverse items-center px-6 mx-auto mt-10 space-y-0 md:space-y-0 md:flex-row'>
        {/* Left Item */}
        <div className='flex flex-col mb-32 space-y-12 md:w-1/2'>
          <h1 className='max-w-md text-4xl font-bold text-center md:text-5xl md:text-left'>
            All Government Services and Schemes under a single hood.
          </h1>
          <p className='max-w-sm text-center text-darkGrayishBlue md:text-left'>
            Get all goverment services, scholarships and jobs in a single platform
          </p>
          <div className='flex justify-center md:justify-start'>
          </div>
        </div>
        {/* Image */}
        <div className='md:w-1/2'>
          <img src={illustrationIntro} alt='' />
        </div>
      </div>
    </section>
  );
};

export default Hero;
