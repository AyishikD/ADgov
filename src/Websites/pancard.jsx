import React from 'react';

const PanCard = () => {
  return (
    <section id='pancard'>
      {/* PAN Card Header Block */}
      <div className='container px-4 py-10 mx-auto mt-10 bg-[#FDF0EC] rounded-lg'>
        <h2 className='text-4xl font-bold text-center text-orange-600'>
          PAN Card Services
        </h2>
        <p className='mt-4 text-center text-gray-800 font-bold'>
          Explore PAN card-related services.
        </p>
      </div>
      <div className='container px-4 mt-10 ml-48'>
        <h2 className='text-4xl text-left font-bold text-brightRed'>
          How to Get Pan Card
        </h2>
        </div>
      {/* PAN Card Steps */}
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
              Fill out the PAN card application form online or offline.
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
              Prepare necessary documents such as proof of identity, address, and date of birth.
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
              Submit the application form along with supporting documents at a PAN card center.
            </p>
          </div>
        </div>

        {/* Step 4: Payment */}
        <div className='flex items-center'>
          <div className='rounded-full bg-orange-200 p-4'>
            <div className='flex items-center justify-center w-12 h-12 bg-orange-600 rounded-full'>
              <span className='text-white font-bold text-lg'>4</span>
            </div>
          </div>
          <div className='ml-4'>
            <h3 className='text-xl font-bold text-orange-600'>Payment</h3>
            <p className='mt-2 text-gray-800 font-bold'>
              Pay the PAN card application fee online or at the PAN card center.
            </p>
          </div>
        </div>

        {/* Step 5: Acknowledgment */}
        <div className='flex items-center'>
          <div className='rounded-full bg-orange-200 p-4'>
            <div className='flex items-center justify-center w-12 h-12 bg-orange-600 rounded-full'>
              <span className='text-white font-bold text-lg'>5</span>
            </div>
          </div>
          <div className='ml-4'>
            <h3 className='text-xl font-bold text-orange-600'>Acknowledgment</h3>
            <p className='mt-2 text-gray-800 font-bold'>
              Receive an acknowledgment receipt with a unique PAN card application number.
            </p>
          </div>
        </div>

        {/* Step 6: Processing */}
        <div className='flex items-center'>
          <div className='rounded-full bg-orange-200 p-4'>
            <div className='flex items-center justify-center w-12 h-12 bg-orange-600 rounded-full'>
              <span className='text-white font-bold text-lg'>6</span>
            </div>
          </div>
          <div className='ml-4'>
            <h3 className='text-xl font-bold text-orange-600'>Processing</h3>
            <p className='mt-2 text-gray-800 font-bold'>
              PAN card application will be processed, and PAN card will be dispatched to your address.
            </p>
          </div>
        </div>

        {/* Step 7: Track Application */}
        <div className='flex items-center'>
          <div className='rounded-full bg-orange-200 p-4'>
            <div className='flex items-center justify-center w-12 h-12 bg-orange-600 rounded-full'>
              <span className='text-white font-bold text-lg'>7</span>
            </div>
          </div>
          <div className='ml-4'>
            <h3 className='text-xl font-bold text-orange-600'>Track Application</h3>
            <p className='mt-2 text-gray-800 font-bold'>
              Track the status of your PAN card application using your application number.
            </p>
          </div>
        </div>
      <div className='flex items-center'>
          <div className='rounded-full bg-orange-200 p-4'>
            <div className='flex items-center justify-center w-12 h-12 bg-orange-600 rounded-full'>
              <span className='text-white font-bold text-lg'>8</span>
            </div>
          </div>
          <div className='ml-4'>
            <h3 className='text-xl font-bold text-orange-600'>Cost</h3>
            <p className='mt-2 text-gray-800 font-bold'>
              Enrollment for Pan Card is free of cost. However, charges may apply for updates or corrections.
            </p>
          </div>
        </div>
    </div>

      {/* PAN Card Service Boxes */}
      <div className='container flex flex-wrap justify-center mx-auto mt-10 space-y-8 md:space-y-0'>
        {/* PAN Card Service Box 1 */}
        <a 
          href="https://www.onlineservices.nsdl.com/paam/endUserRegisterContact.html" 
          target="_blank" 
          rel="noopener noreferrer" 
          className='flex flex-col mt-0 items-center justify-center w-full h-64 p-6 m-4 bg-gradient-to-r from-[#FF9933] via-[#FFFFFF] to-[#138808] rounded-lg shadow-lg shadow-orange-500/50 md:w-1/4 hover:opacity-75'
        >
          <h3 className='mb-4 text-lg font-bold text-center text-[#4A0B0B]'>
            Apply for PAN Card
          </h3>
          <p className='text-center text-black font-bold'>
            Start your PAN card application online.
          </p>
        </a>

        {/* PAN Card Service Box 2 */}
        <a 
          href="https://tin.tin.nsdl.com/pan/changerequest.html" 
          target="_blank" 
          rel="noopener noreferrer" 
          className='flex flex-col items-center justify-center w-full h-64 p-6 m-4 bg-gradient-to-r from-[#FF9933] via-[#FFFFFF] to-[#138808] rounded-lg shadow-lg shadow-orange-500/50 md:w-1/4 hover:opacity-75'
        >
          <h3 className='mb-4 text-lg font-bold text-center text-[#4A0B0B]'>
            Update PAN Card
          </h3>
          <p className='text-center text-black font-bold'>
            Update your PAN card details online.
          </p>
        </a>

        {/* PAN Card Service Box 3 */}
        <a 
          href="https://www.incometax.gov.in/iec/foportal/help/how-to-link-aadhaar" 
          target="_blank" 
          rel="noopener noreferrer" 
          className='flex flex-col items-center justify-center w-full h-64 p-6 m-4 bg-gradient-to-r from-[#FF9933] via-[#FFFFFF] to-[#138808] rounded-lg shadow-lg shadow-orange-500/50 md:w-1/4 hover:opacity-75'
        >
          <h3 className='mb-4 text-lg font-bold text-center text-[#4A0B0B]'>
            Link PAN Card with Aadhar
          </h3>
          <p className='text-center text-black font-bold'>
            Link your PAN card with Aadhar for income tax e-filing.
          </p>
        </a>
      </div>
    </section>
  );
};

export default PanCard;
