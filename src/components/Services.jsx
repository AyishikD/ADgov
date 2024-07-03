import React from 'react';

const Services = () => {
  return (
    <section id='services'>
      {/* Services Header Block */}
      <div className='container px-4 py-10 mx-auto mt-10 bg-[#FFF0EC] rounded-lg'>
        <h2 className='text-4xl font-bold text-center text-brightRed'>
          Services
        </h2>
        <p className='mt-4 text-center text-darkGrayishBlue font-bold'>
          Explore all government services you need.
        </p>
      </div>

      {/* Service Boxes */}
      <div className='container flex flex-wrap justify-center mx-auto mt-10 space-y-8 md:space-y-0'>
        {/* Service Box 1 */}
        <div className='flex flex-col items-center justify-center mt-0 w-full h-64 p-6 m-4 bg-gradient-to-r from-[#FF9933] via-[#FFFFFF] to-[#138808] rounded-lg  shadow-lg shadow-cyan-500/50 md:w-1/4'>
        <h3 className='mb-4 text-lg font-bold text-center text-[#000080]'>
            AADHAR 
          </h3>
          <p className='text-center text-black font-bold'>
            Get your unique identification number.
          </p>
        </div>

        {/* Service Box 2 */}
        <div className='flex flex-col items-center justify-center w-full h-64 p-6 m-4 bg-gradient-to-r from-[#FF9933] via-[#FFFFFF] to-[#138808] rounded-lg shadow-lg shadow-cyan-500/50 md:w-1/4'>
          <h3 className='mb-4 text-lg font-bold text-center text-[#000080]'>
            PASSPORT
          </h3>
          <p className='text-center text-black font-bold'>
            Apply for a new passport or renew your existing one.
          </p>
        </div>

        {/* Service Box 3 */}
        <div className='flex flex-col items-center justify-center w-full h-64 p-6 m-4 bg-gradient-to-r from-[#FF9933] via-[#FFFFFF] to-[#138808] rounded-lg shadow-lg shadow-cyan-500/50 md:w-1/4'>
          <h3 className='mb-4 text-lg font-bold text-center text-[#000080]'>
            PAN CARD
          </h3>
          <p className='text-center text-black font-bold'>
            Apply for your Permanent Account Number (PAN) card.
          </p>
        </div>
        </div>
        <div className='container flex flex-wrap justify-center mx-auto mt-5 space-y-8 md:space-y-0'>
        {/* Service Box 4 */}
        <div className='flex flex-col items-center justify-center  mt-0 w-full h-64 p-6 m-4 bg-gradient-to-r from-[#FF9933] via-[#FFFFFF] to-[#138808] rounded-lg shadow-lg shadow-cyan-500/50 md:w-1/4'>
          <h3 className='mb-4 text-lg font-bold text-center text-[#000080]'>
            DRIVING LICENSE
          </h3>
          <p className='text-center text-black font-bold'>
            Get your driving license or renew it.
          </p>
        </div>
         {/* Service Box 5 */}
         <div className='flex flex-col items-center justify-center w-full h-64 p-6 m-4 bg-gradient-to-r from-[#FF9933] via-[#FFFFFF] to-[#138808] rounded-lg shadow-lg shadow-cyan-500/50 md:w-1/4'>
          <h3 className='mb-4 text-lg font-bold text-center text-[#000080]'>
            VOTER ID CARD
          </h3>
          <p className='text-center text-black font-bold'>
            Get your Voter Id Card.
          </p>
        </div>
         {/* Service Box 4 */}
         <div className='flex flex-col items-center justify-center w-full h-64 p-6 m-4 bg-gradient-to-r from-[#FF9933] via-[#FFFFFF] to-[#138808] rounded-lg shadow-lg shadow-cyan-500/50 md:w-1/4'>
          <h3 className='mb-4 text-lg font-bold text-center text-[#000080]'>
            RATION CARD
          </h3>
          <p className='text-center text-black font-bold'>
            Get your Ration Card or renew it.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
