"use client"

import { useState, useEffect } from 'react';
import styled from 'styled-components';


const DivGrey = styled.div`
    font-family: "Varela Round", sans-serif; 
    // font-family: "Grey Qo", 'cursive';
    //  font-family: 'Montserrat', sans-serif;
`;

const  Hero = () => {

    return (

        <DivGrey id='hero' className=' min-h-screen text-white min-h-screen flex  items-center justify-center'>
        <div className='bg-[#122455] rounded-xl m-auto pt-0 px-10 lg:gap-10 min-h-[40rem] h-full flex sm:w-4/5 flex-col lg:flex-row items-center justify-center'>
            <div className='lg:w-1/2 w-full lg:mb-0 text-center lg:text-left'>
             <div className='w-full sm:w-[30rem] leading-6 mb-4 mx-auto bg-red lg:mx-0'>
             <DivGrey className='text-2xl sm:text-4xl pb-6 leading-10'>Cybersecurity Analyst, Cyber Educator & Cloud Architect. </DivGrey>
             <div className='fontFa text-sm sm:text-base'>Cloud security and safety | Cloud Consultancy| | Cyber Innovation and Education </div>
             </div>
             <div>
             <button class="bg-[#746969] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 sm:mt-0">
             Let&apos;s talk
             </button>
            </div>
            </div>
            <div className='items-center justify-center w-full bg-red shadow-gray-300 pt-0 mt-0 m-auto'>
            <img src='J-2.png' alt='my profile picture' className='rounded-full shadow-gray-300' />

            </div>
        </div>
    </DivGrey>
    )
}


export default Hero;