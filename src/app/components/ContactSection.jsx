"use client";

import React from 'react';
import { FaGithub, FaLinkedin, FaPhoneAlt } from 'react-icons/fa';
import { CiMail } from "react-icons/ci";
import Link from 'next/link';
const ContactSection = () => {
  return (
    <section id='contact' className='grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative'>
        {/* <div className='bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-pink-300 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-y-4'></div> */}

        <div className='mb-3'>
            <h5 className='text-xl font-bold text-white my-2'>Lets Talk!</h5>
            <p className='text-[#ADB7BE] mb-4 max-w-md'>I am always looking for opportunities, new friends, and more than that!
            My inbox is always open, do not hesitate to contact me, even just a Hi, I sure will get back to you! ^^ </p>
            <div className='socials flex flex-row gap-2 '>
                <Link href="github.com/huyenanhphan">
                <FaGithub className='mr-2.5 ' size={25} width={700} height={700} />
                </Link>
                
                <Link href="linkedin.com/in/huyenanhphan/">
                <FaLinkedin size={25} width={700} height={700} />
                </Link>
            </div>
            
        </div>
        <div>
            <form className='flex flex-col' >
                <div className="mb-4 ">
                <FaPhoneAlt size={22} className='  block text-sm text-white  mb-2 ' />
                <p className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'>+1 (647)-878-0772</p>
                </div>
                <div className="mb-4">
                    <CiMail size={26}  className='  block text-sm font-medium text-white mb-2' type='text'/>
                    <p className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'>annephan03@outlook.com</p>
                </div>
              </form>
        </div>
    </section>
  );
};

export default ContactSection;