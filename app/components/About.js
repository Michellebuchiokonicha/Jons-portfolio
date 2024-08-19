"use client"

import { useState, useEffect } from 'react';

const About = () => {
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
        // <section id="about" className="flex items-center justify-center min-h-screen transition-all duration-500" >
        //     <div className="flex flex-col space-y-4 transition-all duration-500 order-2">
        //         <h2 className="text-4xl font-bold">About Me</h2>
        //         <p className='text-xl text-gray-600'>
        //             I am a cybersecurity expert with a passion for cloud computing and cloud security. I have years of experience in protecting organizations from cyber threats, and I am always looking for new ways to improve my skills and knowledge.
        //             <br />
        //             <br />
        //             I am also a cloud enthusiast, and I am always excited to learn about new cloud technologies and how they can be used to improve business operations. I am particularly interested in cloud security, and I am committed to helping organizations build secure and resilient cloud environments.
        //             <br />
        //             <br />
        //             I am a highly motivated and results-oriented individual with a strong work ethic. I am also a team player and I am always willing to go the extra mile to help my colleagues.
        //         </p>
        //     </div>
        //     <div className="transition-all duration-500 order-1">
        //         <img src='jon-profile.jpg' alt='my profile picture' className='rounded-full w-64 h-64 object-cover mx-auto' />
        //     </div>
        // </section>fon
        <section className=' px-10 mb-5 text-white min-h-screen flex flex-col items-center justify-center'>
            <div className='m-auto items-center justify-center align-center text-center py-10 font-bold text-4xl'>About <span className='font-normal'>Me</span></div>
            <div className="flex gap-x-20 items-center justify-around text-white">
                <div className='e font-normal text-8xl w-[30%]'>Jonathan</div>
                <div className='w-[30%]'>
                <img src='J-3.jpeg' alt='my profile picture' className='rounded-full' />
                </div>
                <div className='font-normal text-8xl w-[30%]'>Ayodele</div>
            </div>
            <div className='px-32 flex items-center gap-x-96 justify-between'>
                <div className='text-2xl w-[35%]'>Do your best,Whereas recognition of the inherent dignity
                </div>
                <div className=' w-[35%]'>with over 7 years of impact ..
                    <div>Social media</div>

                </div>
            </div>
        </section>
    )
}


export default About;
