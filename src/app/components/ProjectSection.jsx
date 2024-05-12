"use client";
import React from 'react'
import { TypeAnimation } from 'react-type-animation';
const ProjectSection = () => {
  return (
    <section id='projects'>
    <h1 className='text-3xl font-bold text-white mb-4'>Projects</h1>
    <p className='text-base md:text-lg text-slate-200 items-center '>
    <TypeAnimation 
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'In progress...',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'In progress...',
        1000,
        'Coming soon...',
        1000,
        'Updating soon...',
        1000
      ]}
      speed={50}
      repeat={Infinity}
    /></p>
    </section>
  );
};

export default ProjectSection