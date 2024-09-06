// components/ContactComponent.tsx
'use client';

import React from 'react';

const ContactComponent: React.FC = () => {
  return (
    <div className='relative h-screen w-full overflow-hidden'>
      {/* Background Video */}
      <video
        className='absolute left-0 top-0 h-full w-full object-cover'
        src='/BG/BG/contact.mp4' // Updated with the correct video path
        autoPlay
        loop
        muted
      ></video>

      <div className='relative z-10 flex h-full flex-col items-center justify-center p-8 text-center'>
        {/* Title Text */}
        <div className='mt-4'>
          <h1 className='text-8xl font-bold italic text-black'>Want to</h1>
          <h1 className='text-8xl font-bold italic text-black'>Reach out?</h1>
        </div>

        {/* Contact Information */}
        <div className='absolute bottom-8 flex flex-col items-center space-y-2 text-lg text-black sm:flex-row sm:space-x-16 sm:space-y-0'>
          <p>+41 76 512 59 32</p>
          <p>giacomo.picciolini13@gmail.com</p>
        </div>
      </div>

      {/* Optional: Overlay for Contrast */}
      <div className='absolute left-0 top-0 h-full w-full bg-black opacity-20'></div>
    </div>
  );
};

export default ContactComponent;
