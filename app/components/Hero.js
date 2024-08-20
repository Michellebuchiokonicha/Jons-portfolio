"use client"

import { useState, useEffect } from 'react';
import styled from 'styled-components';


const DivGrey = styled.div`
    font-family: "Varela Round", sans-serif; 
    // font-family: "Grey Qo", 'cursive';
    //  font-family: 'Montserrat', sans-serif;
`;

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

        <DivGrey id='hero' className=' min-h-screen text-white min-h-screen flex  items-center justify-center'>
        <div className='bg-[#122455] rounded-xl m-auto pt-0 px-10 lg:gap-10 min-h-[40rem] h-full flex sm:w-4/5 flex-col lg:flex-row items-center justify-center'>
            <div className='lg:w-1/2 w-full mb-8 lg:mb-0 text-center lg:text-left'>
             <div className='w-full sm:w-[30rem] leading-6 mb-4 mx-auto lg:mx-0'>
             <DivGrey className='text-2xl sm:text-4xl pb-6 leading-10'>Cybersecurity Analyst, Cyber Educator & Cloud Architect. </DivGrey>
             <div className='fontFa text-sm sm:text-base'>Cloud security and safety | Cloud Consultancy| | Cyber Innovation and Education </div>
             </div>
             <div>
             <button class="bg-[#746969] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 sm:mt-0">
             Let&apos;s talk
             </button>
            </div>
            </div>
            <div className='rounded-lg w-48 h-48 sm:h-64 hidden lg:block'>
            <img src='J-2.png' alt='my profile picture' className='rounded-full' />

            </div>
        </div>
    </DivGrey>
    )
}


export default Hero;