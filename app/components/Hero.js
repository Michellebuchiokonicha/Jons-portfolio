"use client"

import { useState, useEffect } from 'react';

const  Hero = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {  
        const handleScroll = () => {
            if(window.scrollY > window.innerHeight * 0.5) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <section className={`flex items-center justify-center min-h-screen transition-all duration-500 ${scrolled ? 'justify-around' : ''}`}>
            <div className={`flex flex-col space-y-4 transition-all duration-500 ${scrolled ? 'order-1' : 'order-2'} ${scrolled ? 'ml-8' : ''}`}>
                <h1 className="text-4xl font-bold">Jonathan Ayodele</h1>
                <p className='text-xl text-gray-600'>Cyber Expert</p>
                <div className='flex space-x-4'>
                    <button className='bg-blue-600 text-white py-2 px-4 rounded'>Let's talk</button>
                </div>
            </div>
            <div className={`transition-all duration-500 ${scrolled ? 'order-2' : 'order-1'} ${scrolled ? 'mr-8' : ''}`}>
                <img src='jon-profile.jpg' alt='my profile picture' className='rounded-full w-64 h-64 object-cover mx-auto' />
            </div>
        </section>
    )
}


export default Hero;