"use client";
import React, { useTransition, useState } from 'react'
import Image from "next/image";
import TabButton from './TabButton';
import { motion } from 'framer-motion';
const AboutSection = () => {
    const [tab, setTab] = useState('education');
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        });
    };


const TabData = [
    {
        title: "Education",
        id: "education",
        content: "Advanced Diploma in Software Engineering Technology - AI at Centennial College, Toronto, ON, Canada"

    },
    {title: "Skills",
    id: "skills",
    content: (
        <ul className='list=disc pl-2'>
            <li>Python</li>
            <li>Java</li>
            <li>JavaScript</li>
            <li>SQL</li>
            <li>MongoDB</li>
            <li>React</li>
            <li>Node.js</li>
        </ul>
    )
    },
    {
        title: "Experience",
        id: "experience",
        content: "I am currently seeking internship opportunities in web/software development or data analysis."
    }
]

  return (
    <section id='about' className='text-white'><motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{duration:0.5}}  className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-5 xl:gap-16 sm:py-16'>
        
        <Image  src="/images/me.jpeg" alt="Huyen Anh" width={500} height={500} />
        <div  className='mt-4 md:mt-0 text-left flex flex-col h-full'>
            <h2 className='text-3xl font-bold text-white mb-4'>
                About Me
            </h2>
            <p className='text-base md:text-lg'>Hello, I am Huyen Anh Phan, currently graduated from Centennial College with a degree in 
            Software Engineering Technology - AI. With a passion for technology and an ability for quick learning, I aspire to become either 
            a full-stack developer or a data scientist. I bring dedication, strong multitasking skills, and a genuine enthusiasm for 
            problem-solving to projects I undertake. Although I dont have much real experience in the field yet, my academic background 
            and personal projects have equipped me with a solid understanding of software development principles and data analysis techniques. 
            I am eager to leverage this foundation in a professional setting, where I can grow my skills further and make a tangible impact.</p>
            <div className='flex flex-row mt-8'>
            <TabButton selectTab={() => handleTabChange("education")} active={tab==="education"}>Education</TabButton>
            <TabButton selectTab={() => handleTabChange("skills")} active={tab==="skills"}>Skills</TabButton>
            <TabButton selectTab={() => handleTabChange("experience")} active={tab==="experience"}>Experience</TabButton>
                

            </div>
            <div className='mt-8'>{TabData.find((t) => t.id ===tab).content}</div>

        </div>
    
    
    </motion.div>
    </section>
    
    
    
  )
}

export default AboutSection