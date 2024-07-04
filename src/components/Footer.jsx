import { Link } from 'react-router-dom';
import React from 'react';
import { FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa';
import {FaXTwitter} from 'react-icons/fa6';

const Footer = () => {
  return (
    <div className='bg-veryDarkBlue'>
      {/* Flex Container */}
      <div className='container flex flex-col-reverse justify-between px-6 py-10 mx-auto space-y-8 md:flex-row md:space-y-0'>
        {/* Logo and social links container */}
        <div className='flex flex-col-reverse items-center justify-between space-y-12 md:flex-col md:space-y-0 md:items-start'>
          <div className='mx-auto my-6 text-center text-white md:hidden'>
            Copyright ©ADgov, All Rights Reserved
          </div>
          {/* Logo */}
          {/* Social Links Container */}
          <div className='flex justify-evenly space-x-4 '>
            <a href='https://x.com/AYISHIKDAS07' target='_blank' rel='noopener noreferrer'>
              <FaXTwitter className='h-8 w-8 text-white hover:text-brightRed' />
            </a>
            <a href='https://www.instagram.com/silent____whispers/' target='_blank' rel='noopener noreferrer'>
              <FaInstagram className='h-8 w-8 text-white hover:text-brightRed' />
            </a>
            <a href='https://github.com/AyishikD/ADgov' target='_blank' rel='noopener noreferrer'>
              <FaGithub className='h-8 w-8 text-white hover:text-brightRed' />
            </a>
            <a href='https://www.linkedin.com/in/ayishik-das/' target='_blank' rel='noopener noreferrer'>
              <FaLinkedin className='h-8 w-8 text-white hover:text-brightRed' />
            </a>
          </div>
          <div className='hidden text-white md:block mr-5'>
            Copyright ©ADgov, All Rights Reserved
          </div>
        </div>

        {/* List Container */}
        <div className='flex justify-around space-x-32'>
          <div className='flex flex-col space-y-3 text-white'>
            <Link to='/aadhar' className='hover:text-brightRed'>
              Aadhar Card
            </Link>
            <Link to='/pancard' className='hover:text-brightRed'>
              Pan Card
            </Link>
            <Link to='/drivinglicense' className='hover:text-brightRed'>
              Driving License
            </Link>
          </div>
          <div className='flex flex-col space-y-3 text-white'>
            <Link to='/passport' className='hover:text-brightRed'>
              Passport
            </Link>
            <Link to='/rationcard' className='hover:text-brightRed'>
              Ration Card
            </Link>
            <Link to='/voterid' className='hover:text-brightRed'>
              Voter ID Card
            </Link>
          </div>
        </div>

        {/* Input Container */}
        {/* Input Container */}
        <div className='flex flex-col justify-between ml-5'>
          <form className='flex flex-col space-y-3'>
            <input
              type='text'
              className='px-4 py-2 rounded-full focus:outline-none'
              placeholder='Add your complaints'
            />
            <button className='px-6 py-2 text-white rounded-full bg-brightRed hover:bg-brightRedLight focus:outline-none'>
              Submit
            </button>
          </form>
        </div>
      </div>

      {/* Copyright Container */}
      <div className='mt-6 text-center text-white md:hidden'>
        Copyright ©ADgov, All Rights Reserved
      </div>
    </div>
  );
};

export default Footer;
