import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import ProjectList from '../components/ProjectList';
import ContactComponent from '../components/ContactComponent';

export default function Home() {
  return (
    <main className='bg-custom-pattern min-h-screen'>
      <Header />
      <Hero />
      <ProjectList />
      <ContactComponent />
    </main>
  );
}
