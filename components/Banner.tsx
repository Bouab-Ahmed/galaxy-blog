import React from 'react';

function Banner() {
  return (
    <div className='container mx-auto md:mt-3 mt-0 flex flex-col lg:flex-row lg:items-center lg:justify-between lg:space-x-5 font-bold'>
      <div>
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        <h1 className='text-7xl'>Galaxy's Daily Blog</h1>
        <h2 className='mt-8 md:mt-2'>
          Welcome to{' '}
          <span className='underline decoration-4 decoration-[#F7AB0A]'>
            Every Developers
          </span>{' '}
          favorite blog in the galaxy
        </h2>
      </div>

      <p className='mt-5 md:mt-2 text-gray-400 max-w-sm'>
        New product features | The latest in technology | The weakly debbuging
        nightmares and more !
      </p>
    </div>
  );
}

export default Banner;
