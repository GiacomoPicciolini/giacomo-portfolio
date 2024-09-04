'use client';

import { motion, useScroll, useTransform } from 'framer-motion';

const Header = () => {
  return (
    <header className='top-0 lg:sticky'>
      <nav className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center justify-between py-4'>
          {/* Links Container */}
          <div className='flex w-full flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0'>
            <a
              href='#hey'
              className='hover-bold group relative text-left text-gray-800 transition-all duration-300 md:text-center'
            >
              01/HEY
              <span className='absolute bottom-0 left-0 block h-0.5 w-0 bg-gray-800 transition-all duration-300 group-hover:w-full'></span>
            </a>
            <a
              href='#about'
              className='hover-bold group relative text-left text-gray-800 transition-all duration-300 md:text-center'
            >
              02/ABOUT
              <span className='absolute bottom-0 left-0 block h-0.5 w-0 bg-gray-800 transition-all duration-300 group-hover:w-full'></span>
            </a>
            <a
              href='#work'
              className='hover-bold group relative text-left text-gray-800 transition-all duration-300 md:text-center'
            >
              03/WORK
              <span className='absolute bottom-0 left-0 block h-0.5 w-0 bg-gray-800 transition-all duration-300 group-hover:w-full'></span>
            </a>
            <a
              href='#contact'
              className='hover-bold group relative text-left text-gray-800 transition-all duration-300 md:text-center'
            >
              04/CONTACT
              <span className='absolute bottom-0 left-0 block h-0.5 w-0 bg-gray-800 transition-all duration-300 group-hover:w-full'></span>
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

const Hero = () => {
  // Define variants for the animation
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className='overflow-hidden px-8 py-16 text-gray-800 lg:px-20 lg:py-32'>
      <div className='mx-auto flex max-w-6xl flex-col'>
        <motion.div
          className='mb-8 flex justify-end'
          variants={fadeIn}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className='max-w-lg text-xl font-bold lg:text-2xl'>
            Simple solutions require Complex Processes. <br />
            I’m a UX/UI designer based in Luzern.
            <br /> These are the projects that speak most about me.
          </p>
        </motion.div>

        <motion.h1
          className='mb-8 whitespace-nowrap text-[12rem] font-extrabold leading-none lg:text-[15rem]'
          initial={{ x: '0%' }}
          animate={{ x: '-300%' }}
          transition={{
            duration: 50,
            ease: 'linear',
            repeat: Infinity,
            repeatType: 'mirror',
          }}
        >
          LATEST WORK LATEST WORK LATEST WORK LATEST WORK LATEST WORK
        </motion.h1>

        <motion.div
          className='mb-8 flex max-w-xs flex-col items-start'
          variants={fadeIn}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className='text-md lg:text-md mb-2 font-bold'>
            I am poised to bring a strategic and user-focused approach to all
            the projects, contributing to the success and innovation of the
            final products.
          </p>

          <div className='text-md lg:text-md mt-2 self-end font-bold'>
            Currently Designing
            <br />
            for ➤ Pilatus Aircraft
          </div>
        </motion.div>

        <motion.div
          className='flex justify-end'
          variants={fadeIn}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className='flex max-w-xl'>
            <div className='relative flex-1 pr-4'>
              <div className='relative z-10 mt-20 max-w-md text-sm lg:text-base'>
                <p className='mb-4'>
                  I was born in Bologna, Italy, in 1992. I began my journey in
                  Modena, Bologna, with university internships while working on
                  personal design explorations, ranging from communication to
                  industrial design.
                </p>
                <p className='mb-4'>
                  I decided to move to Milan for a further academic major and
                  ended up at Swiss Studio, where I worked for many years as a
                  Senior UX Designer, leading several projects in branding and
                  digital media.
                </p>
                <p className='mb-4'>
                  After a move, I moved to Switzerland, where my home is. I
                  began my role at Pilatus Aircraft, leveraging the mountains to
                  stay grounded and inspired.
                </p>
              </div>
              <div className='absolute right-0 top-0 z-0'>
                <img
                  src='/person.jpeg'
                  alt='Profile'
                  className='h-48 w-48 object-cover opacity-75'
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
export default function Home() {
  return (
    <main className='bg-custom-pattern min-h-screen'>
      <Header />
      <Hero />
    </main>
  );
}
