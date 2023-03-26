import React from 'react';
import logo from '../assets/logo-removebg-preview.png';
import Image from 'next/image';
import Link from 'next/link';

const footerItems = [
  {
    name: 'About',
    href: '/',
  },
  {
    name: 'Privacy Policy',
    href: '/',
  },
  {
    name: 'Licensing',
    href: '/',
  },
  {
    name: 'Contact',
    href: '/',
  },
];

function Footer() {
  return (
    <footer className='bg-white m-4 '>
      <div className='w-full container mx-auto p-4 md:px-6 md:py-8'>
        <div className='sm:flex sm:items-center sm:justify-between'>
          <div className='w-20 h-20'>
            <Image src={logo} alt='logo' className='w-full h-full' />
          </div>

          <ul className='flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400'>
            {footerItems.map((item, i) => (
              <li key={i}>
                <Link
                  href={item.href}
                  className='mr-4 hover:underline md:mr-6 bg-transparent border-0 hover:bg-transparent'>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <hr className='my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8' />
        <span className='block text-sm text-gray-500 sm:text-center dark:text-gray-400'>
          © 2023{' '}
          <Link href='/' className='hover:underline'>
            Galaxy Blog
          </Link>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}

export default Footer;
