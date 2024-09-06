// components/Header.tsx
/* eslint-disable @next/next/no-img-element */
'use client';

import React, { useState } from 'react';

type Link = {
  href: string;
  label: string;
};

const Header = () => {
  const [activeLink, setActiveLink] = useState<string | null>(null);

  const links = [
    { href: '#hey', label: '01/HEY' },
    { href: '#about', label: '02/ABOUT' },
    { href: '#work', label: '03/WORK' },
    { href: '#contact', label: '04/CONTACT' },
  ];

  // Common classes for the links
  const linkClasses =
    'hover-bold group relative text-left text-gray-800 transition-all duration-300 md:text-center hover:opacity-100 hover:text-shadow-lg active:scale-95';

  return (
    <header className='top-0 lg:sticky'>
      <nav className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center justify-between py-4 text-lg'>
          {/* Links Container */}
          <div className='flex w-full flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0'>
            {links.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className={`${linkClasses} ${
                  activeLink === link.href
                    ? 'scale-100 opacity-100'
                    : 'opacity-80'
                }`}
                onClick={() => setActiveLink(link.href)}
              >
                {link.label}
                <span className='absolute bottom-0 left-0 block h-0.5 w-0 bg-gray-800 transition-all duration-300 group-hover:w-full'></span>
              </a>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
