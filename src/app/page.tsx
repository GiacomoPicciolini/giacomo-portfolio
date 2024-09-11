'use client';
import { useEffect, useRef, useState } from 'react';
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from 'framer-motion';
import '../sass/main.scss';

// Components
import Header from '../components/Header';
import Banner from '../components/Banner';
import Loader from '../components/Loader';

function Page() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loading
      ? document.querySelector('body')?.classList.add('loading')
      : document.querySelector('body')?.classList.remove('loading');
  }, [loading]);

  return (
    <AnimatePresence>
      {loading ? (
        <motion.div key='loader'>
          <Loader setLoading={setLoading} />
        </motion.div>
      ) : (
        <>
          <Header />
          <Banner />
        </>
      )}
    </AnimatePresence>
  );
}

export default Page;
