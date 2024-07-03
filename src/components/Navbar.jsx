import { useState } from 'react';
import { Link } from 'react-router-dom';

import companyLogo from '../assets/images/logo.svg';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className='relative container mx-auto p-6'>
      {/* Flex Container */}
      <div className='flex items-center justify-between'>
        {/* Logo */}
        <div className='pt-2'>
          <img src={companyLogo} alt='' />
        </div>
        {/* Menu Items */}
        <div className='hidden space-x-6 md:flex'>
          <Link to='' className='hover:text-darkGrayishBlue font-bold'>
            AADHAR
          </Link>
          <Link to='#' className='hover:text-darkGrayishBlue font-bold'>
            PAN CARD
          </Link>
          <Link to='#' className='hover:text-darkGrayishBlue font-bold'>
            VOTER ID
          </Link>
          <Link to='#' className='hover:text-darkGrayishBlue font-bold'>
            PASSPORT
          </Link>
        </div>
        {/* Button */}

        {/* Hamburger Icon */}
        <button
          className={
            toggleMenu
              ? 'open block hamburger md:hidden focus:outline-none'
              : 'block hamburger md:hidden focus:outline-none'
          }
          onClick={() => setToggleMenu(!toggleMenu)}
        >
          <span className='hamburger-top'></span>
          <span className='hamburger-middle'></span>
          <span className='hamburger-bottom'></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className='md:hidden'>
        <div
          className={
            toggleMenu
              ? 'absolute flex flex-col items-center self-end py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md'
              : 'absolute flex-col items-center hidden self-end py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md'
          }
        >
          <Link to='#'>Pricing</Link>
          <Link to='#'>Product</Link>
          <Link to='#'>About Us</Link>
          <Link to='#'>Careers</Link>
          <Link to='#'>Community</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
