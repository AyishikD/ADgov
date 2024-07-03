import React from 'react';
import { Link } from "react-router-dom";

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
        <Link to="/aadhar" className='w-full md:w-1/4 mr-7 '>
          <div className='flex flex-col items-center justify-center mt-0 w-full h-64 p-6 m-4 bg-gradient-to-r from-[#FF9933] via-[#FFFFFF] to-[#138808] rounded-lg shadow-lg shadow-cyan-500/50 hover:opacity-75'>
            <h3 className='mb-4 text-lg font-bold text-center text-[#000080]'>
              AADHAR
            </h3>
            <p className='text-center text-black font-bold'>
              Get your unique identification number.
            </p>
          </div>
        </Link>
        {/* Service Box 2 */}
       {/* Service Box 2 */}
       <Link to="/passport" className='w-full md:w-1/4 mr-7'>
          <div className='flex flex-col items-center mt-0 justify-center w-full h-64 p-6 m-4 bg-gradient-to-r from-[#FF9933] via-[#FFFFFF] to-[#138808] rounded-lg shadow-lg shadow-cyan-500/50 hover:opacity-75'>
            <h3 className='mb-4 text-lg font-bold text-center text-[#000080]'>
              PASSPORT
            </h3>
            <p className='text-center text-black font-bold'>
              Apply for a new passport or renew your existing one.
            </p>
          </div>
        </Link>

        {/* Service Box 3 */}
        <Link to="/pancard" className='w-full md:w-1/4 mr-7'>
          <div className='flex flex-col items-center mt-0 justify-center w-full h-64 p-6 m-4 bg-gradient-to-r from-[#FF9933] via-[#FFFFFF] to-[#138808] rounded-lg shadow-lg shadow-cyan-500/50 hover:opacity-75'>
            <h3 className='mb-4 text-lg font-bold text-center text-[#000080]'>
              PAN CARD
            </h3>
            <p className='text-center text-black font-bold'>
              Apply for your Permanent Account Number (PAN) card.
            </p>
          </div>
        </Link>
        
        {/* Service Box 4 */}
        <Link to="/drivinglicense" className='w-full md:w-1/4 mr-7'>
          <div className='flex flex-col items-center mt-0 justify-center w-full h-64 p-6 m-4 bg-gradient-to-r from-[#FF9933] via-[#FFFFFF] to-[#138808] rounded-lg shadow-lg shadow-cyan-500/50 hover:opacity-75'>
            <h3 className='mb-4 text-lg font-bold text-center text-[#000080]'>
              DRIVING LICENSE
            </h3>
            <p className='text-center text-black font-bold'>
              Get your driving license or renew it.
            </p>
          </div>
        </Link>

        {/* Service Box 5 */}
        <Link to="/voterid" className='w-full md:w-1/4 mr-7'>
          <div className='flex flex-col items-center mt-0 justify-center w-full h-64 p-6 m-4 bg-gradient-to-r from-[#FF9933] via-[#FFFFFF] to-[#138808] rounded-lg shadow-lg shadow-cyan-500/50 hover:opacity-75'>
            <h3 className='mb-4 text-lg font-bold text-center text-[#000080]'>
              VOTER ID CARD
            </h3>
            <p className='text-center text-black font-bold'>
              Get your Voter Id Card.
            </p>
          </div>
        </Link>

        {/* Service Box 6 */}
        <Link to="/rationcard" className='w-full md:w-1/4 mr-7'>
          <div className='flex flex-col items-center mt-0 justify-center w-full h-64 p-6 m-4 bg-gradient-to-r from-[#FF9933] via-[#FFFFFF] to-[#138808] rounded-lg shadow-lg shadow-cyan-500/50 hover:opacity-75'>
            <h3 className='mb-4 text-lg font-bold text-center text-[#000080]'>
              RATION CARD
            </h3>
            <p className='text-center text-black font-bold'>
              Get your Ration Card or renew it.
            </p>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default Services;
