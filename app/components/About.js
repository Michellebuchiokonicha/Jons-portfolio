"use client"

import { useState, useEffect } from 'react';

const About = () => {

    return (
      
        <section id='about' className='m-auto px-10 mb-5 text-white min-h-screen flex flex-col items-center justify-center'>
            <div className='m-auto items-center justify-center align-center font-bold text-3xl md:text-4xl'>About <span className='font-normal'>Me</span></div>
             <div className="m-auto flex flex-col lg:flex-row gap-y-10  lg:gap-x-1 items-center justify-center text-white w-full">
                <div className=' font-normal text-4xl md:text-7xl lg:text-8xl w-full lg:w-1/3 '>Jonathan</div>
                <div className='w-1/3 flex items-center justify-center '>
                <img src='J-3.jpeg' alt='my profile picture' className='rounded-full' />
                </div>
                <div className='font-normal text-4xl md:text-7xl lg:text-8xl w-full lg:w-1/3 '>Ayodelejiii</div>
             </div>
             <div className='px-4 md:px-32 flex flex-col md:flex-row items-center gap-y-10 md:gap-y-0 gap-x-0 md:gap-x-96 justify-between mt-10 w-full'>
                <div className='text-lg md:text-2xl w-[70%] md:w-[35%] text-center md:text-left'>Do your best,Whereas recognition of the inherent dignity
                </div>
                <div className='w-[70%] md:w-[35%] text-lg md:text-2xl text-center md:text-left'>with over 7 years of impact ..
                    <div>Social media</div>

                </div>
             </div>
        </section>
    )
}


export default About;
