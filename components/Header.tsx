'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import logo from '../assets/logo-removebg-preview.png';
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from '@material-tailwind/react';
import Image from 'next/image';

function Header() {
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    window.addEventListener(
      'resize',
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navItems = [
    {
      name: 'Home',
      href: '/',
    },
    {
      name: 'About',
      href: '/about',
    },
    {
      name: 'Contact Us',
      href: '/contact',
    },
  ];

  return (
    <Navbar className='mx-auto min-w-screen-xl rounded-none shadow-sm'>
      <div className='container mx-auto flex items-center justify-between text-blue-gray-900 font-bold p-0'>
        <Link
          href='/'
          className='mr-4 cursor-pointer w-20 h-20 flex items-center justify-center'>
          <Image src={logo} alt='logo' />
        </Link>
        <div className='flex gap-4 items-center'>
          <div className='hidden lg:block'>
            <ul className='mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6'>
              {navItems.map((item) => (
                <Typography
                  key={item.name}
                  as='li'
                  variant='small'
                  color='blue-gray'
                  className='p-1 font-bold'>
                  <Link href={item.href} className='flex items-center'>
                    {item.name}
                  </Link>
                </Typography>
              ))}
            </ul>
          </div>
          <Button
            size='sm'
            className='hidden lg:inline-block bg-gradient-to-br from-yellow-200 via-yellow-400 to-[#E7AA56] text-black hover:shadow-amber-300'>
            <span>Subscribe</span>
          </Button>
        </div>
        <IconButton
          variant='text'
          className='ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden'
          ripple={false}
          onClick={() => setOpenNav(!openNav)}>
          {openNav ? (
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              className='h-6 w-6'
              viewBox='0 0 24 24'
              stroke='currentColor'
              strokeWidth={2}>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M6 18L18 6M6 6l12 12'
              />
            </svg>
          ) : (
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-6 w-6'
              fill='none'
              stroke='currentColor'
              strokeWidth={2}>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M4 6h16M4 12h16M4 18h16'
              />
            </svg>
          )}
        </IconButton>
      </div>
      <MobileNav open={openNav}>
        <div className='container mx-auto flex flex-col items-center'>
          <ul className='mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row items-center lg:gap-6'>
            {navItems.map((item) => (
              <Typography
                key={item.name}
                as='li'
                variant='small'
                color='blue-gray'
                className='p-1 font-bold'>
                <Link href={item.href} className='flex items-center'>
                  {item.name}
                </Link>
              </Typography>
            ))}
          </ul>
          <Button
            size='sm'
            className='mb-2 bg-gradient-to-br from-yellow-200 via-yellow-400 to-[#E7AA56] text-black hover:shadow-amber-300'
            fullWidth>
            <span>Subscribe</span>
          </Button>
        </div>
      </MobileNav>
    </Navbar>
  );
}

export default Header;
