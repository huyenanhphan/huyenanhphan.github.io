"use client";

import React from "react";
import Image from "next/image";


import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';



const HeroSection = () => {
    return (
        <section id="home">
            <div className="grid grid-cols-1 lg:grid-cols-12">
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{duration:0.5}} className="col-span-7 place-self-center">
                    <h1 className="text-4xl text-white font-extrabold mb-4 lg:text-6xl ">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-pink-400">Hi, I am {""}</span>
                        <TypeAnimation
      sequence={[
        'Huyen Anh',
        1000, 
        'Web Developer',
        1000,
        'Anne',
        1000,
        'AI Student',
        1000
      ]}
      wrapper="span"
      speed={50}
      repeat={Infinity}
    />
                    </h1>
                    <p className="text-[#ADB7BE] text-lg mb-6 lg:text-xl">
                        A Graduate Student in Software Engineering Technology - AI.
                    </p>
                    <div>
                        <button className="px-4 py-2 rounded-full sm:w-fit w-full mr-4 mb-3 bg-gradient-to-br from-violet-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">Hire Me</button>
                        <button className="px-5 py-2 rounded-full sm:w-fit w-full bg-gradient-to-br mb-4 from-violet-500 to-pink-500  hover:from-purple-600 hover:to-pink-600">Download CV</button>
                    </div>
                </motion.div>

                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{duration:0.5}} className="col-span-5 place-self-center mt-4 lg:mt-2">
                    <div className="rounded-full bg-[#ffc5e5] w-[250px] h-[220px] lg:w-[350px] lg:h-[300px] relative ">
                        <Image
                            src="/images/dp.png"
                            alt="Hero Image"
                            className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 "
                            width={300}
                            height={300}
                        />
                    </div>
                </motion.div>
                

            </div>
        </section>      
    );
};

export default HeroSection;
