"use client"

import { useState, useEffect } from 'react';

const  Hero = () => {
    // const [scrolled, setScrolled] = useState(false);

    // useEffect(() => {  
    //     const handleScroll = () => {
    //         if(window.scrollY > window.innerHeight * 0.5) {
    //             setScrolled(true);
    //         } else {
    //             setScrolled(false);
    //         }
    //     };
    //     window.addEventListener('scroll', handleScroll);
    //     return () => {
    //         window.removeEventListener('scroll', handleScroll);
    //     };
    // }, []);

    return (
        // <section className={`flex items-center justify-center min-h-screen transition-all duration-500 ${scrolled ? 'justify-around' : ''}`}>
        // <section className="flex items-center  justify-center min-h-screen ">
        //     {/* <div className={`flex flex-col space-y-4 transition-all duration-500 ${scrolled ? 'order-1' : 'order-2'} ${scrolled ? 'ml-8' : ''}`}> */}
        //     {/* <div className="flex flex-col space-y-4 transition-all duration-500  order-2"> */}
        //         <div className="flex flex-col space-y-4 order-2"> 

        //         <h1 className="text-4xl font-bold">Jonathan Ayodele</h1>
        //         <p className='text-xl text-gray-600'>Cyber Expert</p>
        //         <div className='flex space-x-4'>
        //             <button className='bg-blue-600 text-white py-2 px-4 rounded'>Let us talk</button>
        //         </div>
        //     </div>
        //     <div className=" order-1">
        //         <img src='jon-profile.jpg' alt='my profile picture' className='rounded-full w-64 h-64 object-cover mx-auto' />
        //     </div>
        // </section>

        <section className='bg-[#2c2323] text-white min-h-screen flex items-center justify-center'>
        <div className='bg-[#513F3F] rounded-xl m-auto px-10 gap-10 min-h-[40rem] h-full flex w-4/5 items-center justify-center'>
            <div className='w-1/2'>
             <div className='w-[30rem] leading-6 mb-4'>
             <h2 className='text-4xl pb-6 leading-10'>Cybersecurity Analyst, Cyber Educator & Cloud Architect. </h2>
             <div>Cloud security and safety | Cloud Consultancy| | Cyber Innovation and Education </div>
             </div>
             <div>
             <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
             Let&apos;s talk
             </button>
            </div>
            </div>
            <div className='rounded-full bg-red-600'>
            <img src='J-2.png' alt='my profile picture' className='rounded-full' />

            </div>
        </div>
    </section>
    )
}


export default Hero;