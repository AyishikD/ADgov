import React from 'react';

const RationCard = () => {
  return (
    <section id='rationcard'>
      {/* Ration Card Header Block */}
      <div className='container px-4 py-10 mx-auto mt-10 bg-[#FFF3E0] rounded-lg'>
        <h2 className='text-4xl font-bold text-center text-orange-600'>
          Ration Card Services
        </h2>
        <p className='mt-4 text-center text-gray-800 font-bold'>
          Explore Ration Card-related services.
        </p>
      </div>
      <div className='container px-4 mt-10 ml-48'>
        <h2 className='text-4xl text-left font-bold text-orange-600'>
          How to Get Ration Card
        </h2>
        </div>
      {/* Ration Card Steps */}
      <div className='container px-4 py-10 mx-auto mt-10 space-y-8 md:space-y-12'>
        {/* Step 1: Application Form */}
        <div className='flex items-center'>
          <div className='rounded-full bg-orange-200 p-4'>
            <div className='flex items-center justify-center w-12 h-12 bg-orange-600 rounded-full'>
              <span className='text-white font-bold text-lg'>1</span>
            </div>
          </div>
          <div className='ml-4'>
            <h3 className='text-xl font-bold text-orange-600'>Fill Application Form</h3>
            <p className='mt-2 text-gray-800 font-bold'>
              Fill out the Ration Card application form online or offline.
            </p>
          </div>
        </div>

        {/* Step 2: Documents Required */}
        <div className='flex items-center'>
          <div className='rounded-full bg-orange-200 p-4'>
            <div className='flex items-center justify-center w-12 h-12 bg-orange-600 rounded-full'>
              <span className='text-white font-bold text-lg'>2</span>
            </div>
          </div>
          <div className='ml-4'>
            <h3 className='text-xl font-bold text-orange-600'>Documents Required</h3>
            <p className='mt-2 text-gray-800 font-bold'>
              Prepare necessary documents such as proof of identity, address, and income.
            </p>
          </div>
        </div>

        {/* Step 3: Submission */}
        <div className='flex items-center'>
          <div className='rounded-full bg-orange-200 p-4'>
            <div className='flex items-center justify-center w-12 h-12 bg-orange-600 rounded-full'>
              <span className='text-white font-bold text-lg'>3</span>
            </div>
          </div>
          <div className='ml-4'>
            <h3 className='text-xl font-bold text-orange-600'>Submission</h3>
            <p className='mt-2 text-gray-800 font-bold'>
              Submit the application form along with supporting documents at the local rationing office.
            </p>
          </div>
        </div>

        {/* Step 4: Verification */}
        <div className='flex items-center'>
          <div className='rounded-full bg-orange-200 p-4'>
            <div className='flex items-center justify-center w-12 h-12 bg-orange-600 rounded-full'>
              <span className='text-white font-bold text-lg'>4</span>
            </div>
          </div>
          <div className='ml-4'>
            <h3 className='text-xl font-bold text-orange-600'>Verification</h3>
            <p className='mt-2 text-gray-800 font-bold'>
              Your application and documents will be verified by the rationing office.
            </p>
          </div>
        </div>

        {/* Step 5: Card Issuance */}
        <div className='flex items-center'>
          <div className='rounded-full bg-orange-200 p-4'>
            <div className='flex items-center justify-center w-12 h-12 bg-orange-600 rounded-full'>
              <span className='text-white font-bold text-lg'>5</span>
            </div>
          </div>
          <div className='ml-4'>
            <h3 className='text-xl font-bold text-orange-600'>Card Issuance</h3>
            <p className='mt-2 text-gray-800 font-bold'>
              Receive your Ration Card at your registered address after successful verification.
            </p>
          </div>
        </div>
        <div className='flex items-center'>
          <div className='rounded-full bg-orange-200 p-4'>
            <div className='flex items-center justify-center w-12 h-12 bg-orange-600 rounded-full'>
              <span className='text-white font-bold text-lg'>6</span>
            </div>
          </div>
          <div className='ml-4'>
            <h3 className='text-xl font-bold text-orange-600'>Cost</h3>
            <p className='mt-2 text-gray-800 font-bold'>
              The cost of ration card varies according to situations. However, it is usually free for low income families.
            </p>
          </div>
        </div>
      </div>

      {/* Ration Card Service Boxes */}
      <div className='container flex flex-wrap justify-center mx-auto mt-10 space-y-8 md:space-y-0'>
        {/* Ration Card Service Box 1 */}
        <a 
          href="https://nfsa.gov.in/portal/apply_ration_card" 
          target="_blank" 
          rel="noopener noreferrer" 
          className='flex mt-0 flex-col items-center justify-center w-full h-64 p-6 m-4 bg-gradient-to-r from-[#FF9933] via-[#FFFFFF] to-[#138808] rounded-lg shadow-lg shadow-orange-500/50 md:w-1/4 hover:opacity-75'
        >
          <h3 className='mb-4 text-lg font-bold text-center text-[#E65100]'>
            Apply for Ration Card
          </h3>
          <p className='text-center text-black font-bold'>
            Start your Ration Card application online.[Its better to visit each state`s website.]
          </p>
        </a>

        {/* Ration Card Service Box 2 */}
        <a 
          href="https://nfsa.gov.in/public/nfsadashboard/PublicRCDashboard.aspx" 
          target="_blank" 
          rel="noopener noreferrer" 
          className='flex flex-col items-center justify-center w-full h-64 p-6 m-4 bg-gradient-to-r from-[#FF9933] via-[#FFFFFF] to-[#138808] rounded-lg shadow-lg shadow-orange-500/50 md:w-1/4 hover:opacity-75'
        >
          <h3 className='mb-4 text-lg font-bold text-center text-[#E65100]'>
            View Ration Card
          </h3>
          <p className='text-center text-black font-bold'>
            View your Ration Card details.
          </p>
        </a>

        {/* Ration Card Service Box 3 */}
        <a 
          href="https://digivillfin.in/govtschemes/rationcard/ration-card-status/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className='flex flex-col items-center justify-center w-full h-64 p-6 m-4 bg-gradient-to-r from-[#FF9933] via-[#FFFFFF] to-[#138808] rounded-lg shadow-lg shadow-orange-500/50 md:w-1/4 hover:opacity-75'
        >
          <h3 className='mb-4 text-lg font-bold text-center text-[#E65100]'>
            Check Ration Card Status
          </h3>
          <p className='text-center text-black font-bold'>
            Check the status of your Ration Card application.
          </p>
        </a>
      </div>
    </section>
  );
};

export default RationCard;
