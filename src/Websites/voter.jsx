import React from 'react';

const VoterID = () => {
  return (
    <section id='voteridcard'>
      {/* Voter ID Card Header Block */}
      <div className='container px-4 py-10 mx-auto mt-10 bg-[#E0F7FA] rounded-lg'>
        <h2 className='text-4xl font-bold text-center text-teal-600'>
          Voter ID Card Services
        </h2>
        <p className='mt-4 text-center text-gray-800 font-bold'>
          Explore Voter ID Card-related services.
        </p>
      </div>
      <div className='container px-4 mt-10 ml-48'>
        <h2 className='text-4xl text-left font-bold text-teal-600'>
          How to Get Voter ID Card
        </h2>
      </div>
      {/* Voter ID Card Steps */}
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
              Fill out the Voter ID Card application form online or offline.
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
              Submit the application form along with supporting documents at the election office.
            </p>
          </div>
        </div>

        {/* Step 4: Verification */}
        <div className='flex items-center'>
          <div className='rounded-full bg-teal-200 p-4'>
            <div className='flex items-center justify-center w-12 h-12 bg-teal-600 rounded-full'>
              <span className='text-white font-bold text-lg'>4</span>
            </div>
          </div>
          <div className='ml-4'>
            <h3 className='text-xl font-bold text-teal-600'>Verification</h3>
            <p className='mt-2 text-gray-800 font-bold'>
              Attend the verification process conducted by the election commission.
            </p>
          </div>
        </div>

        {/* Step 5: Voter ID Issuance */}
        <div className='flex items-center'>
          <div className='rounded-full bg-teal-200 p-4'>
            <div className='flex items-center justify-center w-12 h-12 bg-teal-600 rounded-full'>
              <span className='text-white font-bold text-lg'>5</span>
            </div>
          </div>
          <div className='ml-4'>
            <h3 className='text-xl font-bold text-teal-600'>Voter ID Issuance</h3>
            <p className='mt-2 text-gray-800 font-bold'>
              Receive your Voter ID Card at your registered address after successful verification.
            </p>
          </div>
        </div>
        <div className='flex items-center'>
          <div className='rounded-full bg-teal-200 p-4'>
            <div className='flex items-center justify-center w-12 h-12 bg-teal-600 rounded-full'>
              <span className='text-white font-bold text-lg'>6</span>
            </div>
          </div>
          <div className='ml-4'>
            <h3 className='text-xl font-bold text-teal-600'>Cost</h3>
            <p className='mt-2 text-gray-800 font-bold'>
            Enrollment for Voter ID Card is free of cost. However, charges may apply for updates or corrections.
            </p>
          </div>
        </div>
      </div>

      {/* Voter ID Card Service Boxes */}
      <div className='container flex flex-wrap justify-center mx-auto mt-10 space-y-8 md:space-y-0'>
        {/* Voter ID Card Service Box 1 */}
        <a 
          href="https://voters.eci.gov.in/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className='flex flex-col mt-0 items-center justify-center w-full h-64 p-6 m-4 bg-gradient-to-r from-[#FF9933] via-[#FFFFFF] to-[#138808] rounded-lg shadow-lg shadow-teal-500/50 md:w-1/4 hover:opacity-75'
        >
          <h3 className='mb-4 text-lg font-bold text-center text-[#004D40]'>
            Apply for Voter ID Card
          </h3>
          <p className='text-center text-black font-bold'>
            Start your Voter ID Card application online.
          </p>
        </a>

        {/* Voter ID Card Service Box 2 */}
        <a 
          href="https://services.india.gov.in/service/detail/department-of-election-voter-card-request-for-correction-of-details" 
          target="_blank" 
          rel="noopener noreferrer" 
          className='flex flex-col items-center justify-center w-full h-64 p-6 m-4 bg-gradient-to-r from-[#FF9933] via-[#FFFFFF] to-[#138808] rounded-lg shadow-lg shadow-teal-500/50 md:w-1/4 hover:opacity-75'
        >
          <h3 className='mb-4 text-lg font-bold text-center text-[#004D40]'>
            Update Voter ID Card
          </h3>
          <p className='text-center text-black font-bold'>
            Update your Voter ID Card details online.
          </p>
        </a>

        {/* Voter ID Card Service Box 3 */}
        <a 
          href="https://voters.eci.gov.in/login" 
          target="_blank" 
          rel="noopener noreferrer" 
          className='flex flex-col items-center justify-center w-full h-64 p-6 m-4 bg-gradient-to-r from-[#FF9933] via-[#FFFFFF] to-[#138808] rounded-lg shadow-lg shadow-teal-500/50 md:w-1/4 hover:opacity-75'
        >
          <h3 className='mb-4 text-lg font-bold text-center text-[#004D40]'>
            Check Voter ID Status
          </h3>
          <p className='text-center text-black font-bold'>
            Check the status of your Voter ID Card application.
          </p>
        </a>
      </div>
    </section>
  );
};

export default VoterID;
