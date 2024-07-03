import React from 'react';

const Aadhar = () => {
  return (
    <section id='aadhar'>
      {/* Aadhar Header Block */}
      <div className='container px-4 py-10 mx-auto mt-10 bg-[#FFF0EC] rounded-lg'>
        <h2 className='text-4xl font-bold text-center text-brightRed'>
          Aadhar Services
        </h2>
        <p className='mt-4 text-center text-darkGrayishBlue font-bold'>
          Explore Aadhar-related services.
        </p>
      </div>
      <div className='container px-4 mt-10 ml-48'>
        <h2 className='text-4xl text-left font-bold text-brightRed'>
          How to Get Aadhar
        </h2>
        </div>
      {/* Aadhar Steps */}
      <div className='container px-4 py-10 mx-auto mt-1 space-y-8 md:space-y-12'>
        {/* Step 1: Visit Enrollment Center */}
        <div className='flex items-center'>
          <div className='rounded-full bg-brightRedSupLight p-4'>
            <div className='flex items-center justify-center w-12 h-12 bg-brightRed rounded-full'>
              <span className='text-white font-bold text-lg'>1</span>
            </div>
          </div>
          <div className='ml-4'>
            <h3 className='text-xl font-bold text-brightRed'>Visit Enrollment Center</h3>
            <p className='mt-2 text-darkGrayishBlue font-bold'>
              Locate your nearest Aadhar enrollment center. Bring along the required documents for verification.
            </p>
          </div>
        </div>

        {/* Step 2: Documents Required */}
        <div className='flex items-center'>
          <div className='rounded-full bg-brightRedSupLight p-4'>
            <div className='flex items-center justify-center w-12 h-12 bg-brightRed rounded-full'>
              <span className='text-white font-bold text-lg'>2</span>
            </div>
          </div>
          <div className='ml-4'>
            <h3 className='text-xl font-bold text-brightRed'>Documents Required</h3>
            <p className='mt-2 text-darkGrayishBlue font-bold'>
              Bring proof of identity and address documents. Acceptable documents include Passport, PAN Card, Voter ID, etc.
            </p>
          </div>
        </div>

        {/* Step 3: Cost */}
        <div className='flex items-center'>
          <div className='rounded-full bg-brightRedSupLight p-4'>
            <div className='flex items-center justify-center w-12 h-12 bg-brightRed rounded-full'>
              <span className='text-white font-bold text-lg'>3</span>
            </div>
          </div>
          <div className='ml-4'>
            <h3 className='text-xl font-bold text-brightRed'>Cost</h3>
            <p className='mt-2 text-darkGrayishBlue font-bold'>
              Enrollment for Aadhar is free of cost. However, charges may apply for updates or corrections.
            </p>
          </div>
        </div>

        {/* Step 4: Enrollment Process */}
        <div className='flex items-center'>
          <div className='rounded-full bg-brightRedSupLight p-4'>
            <div className='flex items-center justify-center w-12 h-12 bg-brightRed rounded-full'>
              <span className='text-white font-bold text-lg'>4</span>
            </div>
          </div>
          <div className='ml-4'>
            <h3 className='text-xl font-bold text-brightRed'>Enrollment Process</h3>
            <p className='mt-2 text-darkGrayishBlue font-bold'>
              Fill out the enrollment form, submit your documents, provide biometric data, and receive an acknowledgment slip.
            </p>
          </div>
        </div>

        {/* Step 5: Delivery */}
        <div className='flex items-center'>
          <div className='rounded-full bg-brightRedSupLight p-4'>
            <div className='flex items-center justify-center w-12 h-12 bg-brightRed rounded-full'>
              <span className='text-white font-bold text-lg'>5</span>
            </div>
          </div>
          <div className='ml-4'>
            <h3 className='text-xl font-bold text-brightRed'>Aadhar Card Delivery</h3>
            <p className='mt-2 text-darkGrayishBlue font-bold'>
              Your Aadhar card will be sent to your registered address within a few weeks after successful enrollment.
            </p>
          </div>
        </div>

        {/* Step 6: Check Status */}
        <div className='flex items-center'>
          <div className='rounded-full bg-brightRedSupLight p-4'>
            <div className='flex items-center justify-center w-12 h-12 bg-brightRed rounded-full'>
              <span className='text-white font-bold text-lg'>6</span>
            </div>
          </div>
          <div className='ml-4'>
            <h3 className='text-xl font-bold text-brightRed'>Check Aadhar Status</h3>
            <p className='mt-2 text-darkGrayishBlue font-bold'>
              Visit the UIDAI portal to check the status of your Aadhar application using your enrollment ID.
            </p>
          </div>
        </div>

        {/* Step 7: Download E-Aadhar */}
        <div className='flex items-center'>
          <div className='rounded-full bg-brightRedSupLight p-4'>
            <div className='flex items-center justify-center w-12 h-12 bg-brightRed rounded-full'>
              <span className='text-white font-bold text-lg'>7</span>
            </div>
          </div>
          <div className='ml-4'>
            <h3 className='text-xl font-bold text-brightRed'>Download E-Aadhar</h3>
            <p className='mt-2 text-darkGrayishBlue font-bold'>
              Once your Aadhar card is generated, download the e-Aadhar from the UIDAI website using your Aadhar number.
            </p>
          </div>
        </div>
      </div>

      {/* Aadhar Service Boxes */}
      <div className='container flex flex-wrap justify-center mx-auto mt-10 space-y-8 md:space-y-0'>
        {/* Aadhar Service Box 1 */}
        <a 
          href="https://uidai.gov.in/my-aadhaar/get-aadhaar.html" 
          target="_blank" 
          rel="noopener noreferrer" 
          className='flex flex-col items-center justify-center mt-0 w-full h-64 p-6 m-4 bg-gradient-to-r from-[#FF9933] via-[#FFFFFF] to-[#138808] rounded-lg shadow-lg shadow-cyan-500/50 md:w-1/4 hover:opacity-75'
        >
          <h3 className='mb-4 text-lg font-bold text-center text-[#000080]'>
            Get Aadhar
          </h3>
          <p className='text-center text-black font-bold'>
            Apply for a new Aadhar card.
          </p>
        </a>

        {/* Aadhar Service Box 2 */}
        <a 
          href="https://uidai.gov.in/my-aadhaar/update-aadhaar.html" 
          target="_blank" 
          rel="noopener noreferrer" 
          className='flex flex-col items-center justify-center w-full h-64 p-6 m-4 bg-gradient-to-r from-[#FF9933] via-[#FFFFFF] to-[#138808] rounded-lg shadow-lg shadow-cyan-500/50 md:w-1/4 hover:opacity-75'
        >
          <h3 className='mb-4 text-lg font-bold text-center text-[#000080]'>
            Update Aadhar
          </h3>
          <p className='text-center text-black font-bold'>
            Update your Aadhar details.
          </p>
        </a>

        {/* Aadhar Service Box 3 */}
        <a 
          href="https://myaadhaar.uidai.gov.in/check-aadhaar" 
          target="_blank" 
          rel="noopener noreferrer" 
          className='flex flex-col items-center justify-center w-full h-64 p-6 m-4 bg-gradient-to-r from-[#FF9933] via-[#FFFFFF] to-[#138808] rounded-lg shadow-lg shadow-cyan-500/50 md:w-1/4 hover:opacity-75'
        >
          <h3 className='mb-4 text-lg font-bold text-center text-[#000080]'>
            Check Aadhar Status
          </h3>
          <p className='text-center text-black font-bold'>
            Check the status of your Aadhar application.
          </p>
        </a>
      </div>
    </section>
  );
};

export default Aadhar;
