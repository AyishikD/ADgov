import React from 'react';

const Passport = () => {
  return (
    <section id='passport'>
      {/* Passport Header Block */}
      <div className='container px-4 py-10 mx-auto mt-10 bg-[#F0F2FF] rounded-lg'>
        <h2 className='text-4xl font-bold text-center text-blue-600'>
          Passport Services
        </h2>
        <p className='mt-4 text-center text-gray-800 font-bold'>
          Explore passport-related services.
        </p>
      </div>
      <div className='container px-4 mt-10 ml-48'>
        <h2 className='text-4xl text-left font-bold text-blue-600'>
          How to Get new Passport
        </h2>
        </div>
      {/* Passport Steps */}
      <div className='container px-4 py-10 mx-auto mt-10 space-y-8 md:space-y-12'>
        {/* Step 1: Application Form */}
        <div className='flex items-center'>
          <div className='rounded-full bg-blue-200 p-4'>
            <div className='flex items-center justify-center w-12 h-12 bg-blue-600 rounded-full'>
              <span className='text-white font-bold text-lg'>1</span>
            </div>
          </div>
          <div className='ml-4'>
            <h3 className='text-xl font-bold text-blue-600'>Fill Application Form</h3>
            <p className='mt-2 text-gray-800 font-bold'>
              Fill out the passport application form online or at the passport office.
            </p>
          </div>
        </div>

        {/* Step 2: Documents Required */}
        <div className='flex items-center'>
          <div className='rounded-full bg-blue-200 p-4'>
            <div className='flex items-center justify-center w-12 h-12 bg-blue-600 rounded-full'>
              <span className='text-white font-bold text-lg'>2</span>
            </div>
          </div>
          <div className='ml-4'>
            <h3 className='text-xl font-bold text-blue-600'>Documents Required</h3>
            <p className='mt-2 text-gray-800 font-bold'>
              Prepare necessary documents such as proof of identity, address, and passport-sized photos.
            </p>
          </div>
        </div>

        {/* Step 3: Appointment */}
        <div className='flex items-center'>
          <div className='rounded-full bg-blue-200 p-4'>
            <div className='flex items-center justify-center w-12 h-12 bg-blue-600 rounded-full'>
              <span className='text-white font-bold text-lg'>3</span>
            </div>
          </div>
          <div className='ml-4'>
            <h3 className='text-xl font-bold text-blue-600'>Book Appointment</h3>
            <p className='mt-2 text-gray-800 font-bold'>
              Schedule an appointment at your nearest passport office for document verification.
            </p>
          </div>
        </div>

        {/* Step 4: Payment */}
        <div className='flex items-center'>
          <div className='rounded-full bg-blue-200 p-4'>
            <div className='flex items-center justify-center w-12 h-12 bg-blue-600 rounded-full'>
              <span className='text-white font-bold text-lg'>4</span>
            </div>
          </div>
          <div className='ml-4'>
            <h3 className='text-xl font-bold text-blue-600'>Payment</h3>
            <p className='mt-2 text-gray-800 font-bold'>
              Pay the passport application fee online or at the passport office during your appointment.
            </p>
          </div>
        </div>

        {/* Step 5: Biometric Data */}
        <div className='flex items-center'>
          <div className='rounded-full bg-blue-200 p-4'>
            <div className='flex items-center justify-center w-12 h-12 bg-blue-600 rounded-full'>
              <span className='text-white font-bold text-lg'>5</span>
            </div>
          </div>
          <div className='ml-4'>
            <h3 className='text-xl font-bold text-blue-600'>Provide Biometrics</h3>
            <p className='mt-2 text-gray-800 font-bold'>
              Provide your biometric data (fingerprints, photograph) at the passport office.
            </p>
          </div>
        </div>

        {/* Step 6: Passport Delivery */}
        <div className='flex items-center'>
          <div className='rounded-full bg-blue-200 p-4'>
            <div className='flex items-center justify-center w-12 h-12 bg-blue-600 rounded-full'>
              <span className='text-white font-bold text-lg'>6</span>
            </div>
          </div>
          <div className='ml-4'>
            <h3 className='text-xl font-bold text-blue-600'>Passport Delivery</h3>
            <p className='mt-2 text-gray-800 font-bold'>
              Your passport will be delivered to your registered address within a specified period.
            </p>
          </div>
        </div>

        {/* Step 7: Track Application */}
        <div className='flex items-center'>
          <div className='rounded-full bg-blue-200 p-4'>
            <div className='flex items-center justify-center w-12 h-12 bg-blue-600 rounded-full'>
              <span className='text-white font-bold text-lg'>7</span>
            </div>
          </div>
          <div className='ml-4'>
            <h3 className='text-xl font-bold text-blue-600'>Track Application</h3>
            <p className='mt-2 text-gray-800 font-bold'>
              Track the status of your passport application online using your application number.
            </p>
          </div>
        </div>
      </div>

      {/* Passport Service Boxes */}
      <div className='container flex flex-wrap justify-center mx-auto mt-10 space-y-8 md:space-y-0'>
        {/* Passport Service Box 1 */}
        <a 
          href="https://portal2.passportindia.gov.in/AppOnlineProject/user/RegistrationBaseAction?request_locale=en" 
          target="_blank" 
          rel="noopener noreferrer" 
          className='flex flex-col mt-0 items-center justify-center w-full h-64 p-6 m-4 bg-gradient-to-r from-[#FF9933] via-[#FFFFFF] to-[#138808] rounded-lg shadow-lg shadow-blue-500/50 md:w-1/4 hover:opacity-75'
        >
          <h3 className='mb-4 text-lg font-bold text-center text-[#0B406D]'>
            Apply for new Passport
          </h3>
          <p className='text-center text-black font-bold'>
            Start your passport application online.
          </p>
        </a>

        {/* Passport Service Box 2 */}
        <a 
          href="https://portal2.passportindia.gov.in/AppOnlineProject/statusTracker/trackStatusInpNew" 
          target="_blank" 
          rel="noopener noreferrer" 
          className='flex flex-col items-center justify-center w-full h-64 p-6 m-4 bg-gradient-to-r from-[#FF9933] via-[#FFFFFF] to-[#138808] rounded-lg shadow-lg shadow-blue-500/50 md:w-1/4 hover:opacity-75'
        >
          <h3 className='mb-4 text-lg font-bold text-center text-[#0B406D]'>
            Track Passport Status
          </h3>
          <p className='text-center text-black font-bold'>
            Check the status of your passport application.
          </p>
        </a>

        {/* Passport Service Box 3 */}
        <a 
          href="https://portal2.passportindia.gov.in/AppOnlineProject/user/userLogin" 
          target="_blank" 
          rel="noopener noreferrer" 
          className='flex flex-col items-center justify-center w-full h-64 p-6 m-4 bg-gradient-to-r from-[#FF9933] via-[#FFFFFF] to-[#138808] rounded-lg shadow-lg shadow-blue-500/50 md:w-1/4 hover:opacity-75'
        >
          <h3 className='mb-4 text-lg font-bold text-center text-[#0B406D]'>
            Apply for existing passport
          </h3>
          <p className='text-center text-black font-bold'>
            Apply if already you have passport and want to renew it.
          </p>
        </a>
      </div>
    </section>
  );
};

export default Passport;
