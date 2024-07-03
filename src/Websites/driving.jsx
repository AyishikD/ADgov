import React from 'react';

const DrivingLicense = () => {
  return (
    <section id='drivinglicense'>
      {/* Driving License Header Block */}
      <div className='container px-4 py-10 mx-auto mt-10 bg-[#E0F7FA] rounded-lg'>
        <h2 className='text-4xl font-bold text-center text-teal-600'>
          Driving License Services
        </h2>
        <p className='mt-4 text-center text-gray-800 font-bold'>
          Explore Driving License-related services.
        </p>
      </div>
      <div className='container px-4 mt-10 ml-48'>
        <h2 className='text-4xl text-left font-bold text-teal-600'>
          How to Get Driving License
        </h2>
        </div>
      {/* Driving License Steps */}
      <div className='container px-4 py-10 mx-auto mt-10 space-y-8 md:space-y-12'>
        {/* Step 1: Application Form */}
        <div className='flex items-center'>
          <div className='rounded-full bg-teal-200 p-4'>
            <div className='flex items-center justify-center w-12 h-12 bg-teal-600 rounded-full'>
              <span className='text-white font-bold text-lg'>1</span>
            </div>
          </div>
          <div className='ml-4'>
            <h3 className='text-xl font-bold text-teal-600'>Fill Application Form</h3>
            <p className='mt-2 text-gray-800 font-bold'>
              Fill out the Driving License application form online or offline.
            </p>
          </div>
        </div>

        {/* Step 2: Documents Required */}
        <div className='flex items-center'>
          <div className='rounded-full bg-teal-200 p-4'>
            <div className='flex items-center justify-center w-12 h-12 bg-teal-600 rounded-full'>
              <span className='text-white font-bold text-lg'>2</span>
            </div>
          </div>
          <div className='ml-4'>
            <h3 className='text-xl font-bold text-teal-600'>Documents Required</h3>
            <p className='mt-2 text-gray-800 font-bold'>
              Prepare necessary documents such as proof of identity, address, and age.
            </p>
          </div>
        </div>

        {/* Step 3: Submission */}
        <div className='flex items-center'>
          <div className='rounded-full bg-teal-200 p-4'>
            <div className='flex items-center justify-center w-12 h-12 bg-teal-600 rounded-full'>
              <span className='text-white font-bold text-lg'>3</span>
            </div>
          </div>
          <div className='ml-4'>
            <h3 className='text-xl font-bold text-teal-600'>Submission</h3>
            <p className='mt-2 text-gray-800 font-bold'>
              Submit the application form along with supporting documents at a RTO.
            </p>
          </div>
        </div>

        {/* Step 4: Fee Payment */}
        <div className='flex items-center'>
          <div className='rounded-full bg-teal-200 p-4'>
            <div className='flex items-center justify-center w-12 h-12 bg-teal-600 rounded-full'>
              <span className='text-white font-bold text-lg'>4</span>
            </div>
          </div>
          <div className='ml-4'>
            <h3 className='text-xl font-bold text-teal-600'>Fee Payment</h3>
            <p className='mt-2 text-gray-800 font-bold'>
              Pay the Driving License application fee online or at the RTO.
            </p>
          </div>
        </div>

        {/* Step 5: Learner's License Test */}
        <div className='flex items-center'>
          <div className='rounded-full bg-teal-200 p-4'>
            <div className='flex items-center justify-center w-12 h-12 bg-teal-600 rounded-full'>
              <span className='text-white font-bold text-lg'>5</span>
            </div>
          </div>
          <div className='ml-4'>
            <h3 className='text-xl font-bold text-teal-600'>Learner's License Test</h3>
            <p className='mt-2 text-gray-800 font-bold'>
              Appear for the learner's license test and pass it to get a learner's license.
            </p>
          </div>
        </div>

        {/* Step 6: Driving Test */}
        <div className='flex items-center'>
          <div className='rounded-full bg-teal-200 p-4'>
            <div className='flex items-center justify-center w-12 h-12 bg-teal-600 rounded-full'>
              <span className='text-white font-bold text-lg'>6</span>
            </div>
          </div>
          <div className='ml-4'>
            <h3 className='text-xl font-bold text-teal-600'>Driving Test</h3>
            <p className='mt-2 text-gray-800 font-bold'>
              Schedule and pass the driving test to get your permanent driving license.
            </p>
          </div>
        </div>

        {/* Step 7: License Issuance */}
        <div className='flex items-center'>
          <div className='rounded-full bg-teal-200 p-4'>
            <div className='flex items-center justify-center w-12 h-12 bg-teal-600 rounded-full'>
              <span className='text-white font-bold text-lg'>7</span>
            </div>
          </div>
          <div className='ml-4'>
            <h3 className='text-xl font-bold text-teal-600'>License Issuance</h3>
            <p className='mt-2 text-gray-800 font-bold'>
              Receive your driving license at your registered address after successful completion of all steps.
            </p>
          </div>
        </div>
        <div className='flex items-center'>
          <div className='rounded-full bg-teal-200 p-4'>
            <div className='flex items-center justify-center w-12 h-12 bg-teal-600 rounded-full'>
              <span className='text-white font-bold text-lg'>8</span>
            </div>
          </div>
          <div className='ml-4'>
            <h3 className='text-xl font-bold text-teal-600'>Cost</h3>
            <p className='mt-2 text-gray-800 font-bold'>
              The cost of driver license is rupees 500. However other costs vary according to situations.
            </p>
          </div>
        </div>
      </div>

      {/* Driving License Service Boxes */}
      <div className='container flex flex-wrap justify-center mx-auto mt-10 space-y-8 md:space-y-0'>
        {/* Driving License Service Box 1 */}
        <a 
          href="https://sarathi.parivahan.gov.in/sarathiservice/stateSelection.do" 
          target="_blank" 
          rel="noopener noreferrer" 
          className='flex flex-col mt-0 items-center justify-center w-full h-64 p-6 m-4 bg-gradient-to-r from-[#FF9933] via-[#FFFFFF] to-[#138808] rounded-lg shadow-lg shadow-teal-500/50 md:w-1/4 hover:opacity-75'
        >
          <h3 className='mb-4 text-lg font-bold text-center text-[#004D40]'>
            Apply for Driving License
          </h3>
          <p className='text-center text-black font-bold'>
            Start your driving license application online.
          </p>
        </a>

        {/* Driving License Service Box 2 */}
        <a 
          href="https://parivahan.gov.in/parivahan//node/1978" 
          target="_blank" 
          rel="noopener noreferrer" 
          className='flex flex-col items-center justify-center w-full h-64 p-6 m-4 bg-gradient-to-r from-[#FF9933] via-[#FFFFFF] to-[#138808] rounded-lg shadow-lg shadow-teal-500/50 md:w-1/4 hover:opacity-75'
        >
          <h3 className='mb-4 text-lg font-bold text-center text-[#004D40]'>
            Vehicle Related Services
          </h3>
          <p className='text-center text-black font-bold'>
            Get vehicle related services online.
          </p>
        </a>

        {/* Driving License Service Box 3 */}
        <a 
          href="https://echallan.parivahan.gov.in/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className='flex flex-col items-center justify-center w-full h-64 p-6 m-4 bg-gradient-to-r from-[#FF9933] via-[#FFFFFF] to-[#138808] rounded-lg shadow-lg shadow-teal-500/50 md:w-1/4 hover:opacity-75'
        >
          <h3 className='mb-4 text-lg font-bold text-center text-[#004D40]'>
            E-Challan Services
          </h3>
          <p className='text-center text-black font-bold'>
            Pay your challan online.
          </p>
        </a>
      </div>
    </section>
  );
};

export default DrivingLicense;
