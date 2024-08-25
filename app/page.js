 "use client"

import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Services from "./components/Service";
import Professionals from "./components/Professionals";
import Contact from "./components/Contact";
import Years from "./components/Years";
import Calendar from "./components/Calendar";
import Impact from "./components/Impact";


import styled from 'styled-components';
import { useRef } from "react";
import { Zen_Dots } from "next/font/google";


// const DivGrey = styled.div`
//       //  font-family: "Varela Round", sans-serif; 
//     //  font-family: "Matemasie", sans-serif;
//     // font-family: "Grey Qo", 'cursive';
//       // font-family: 'Montserrat', sans-serif;
//     // background-color: "#050E28";
//     //  font-family: 'Matemasie', sans-serif;
//     //  @apply bg-[#050E28];
// `;


// export default function Home() {



//   return (
//    <DivGrey className=" bg-[#050E28] overflow-hidden font-greyQo">
//     <Navbar />
//     <Hero />
//     <About  />
//     <Years />
//     <Experience />
//     <Services />
//     <Professionals />
//     <Impact />
//     <Contact />
//     <Calendar />
//    </DivGrey>
//   );

//   }
  

const DivGrey = styled.div`
  position: relative; /* Positioning context for the pseudo-element */
  overflow: hidden; /* Ensure overflow is hidden */
  font-family: 'Grey Qo', cursive; /* Apply your desired font-family */
  min-height: 100vh; /* Ensure the background covers the full viewport height */

  /* Background styles */
  background-color: #050E28; /* Fallback color */
  background-image: url('/images/background.jpg'); /* Path to your background image */
  background-size: cover; /* Cover the entire container */
  background-position: center; /* Center the background image */
  background-repeat: no-repeat; /* Prevent image from repeating */

  /* Pseudo-element for overlay */
  &::before {
    content: ""; /* Required for pseudo-elements */
    position: absolute; /* Position it relative to the parent */
    top: 0; /* Align to top */
    left: 0; /* Align to left */
    right: 0; /* Align to right */
    bottom: 0; /* Align to bottom */
    background: rgba(0, 0, 0, 0.5); /* Black background with 50% opacity */
    pointer-events: none; /* Make sure it doesn't interfere with interactions */
  }
`;

// Example component using the styled div
export default function Home() {
  return (
    <DivGrey>
      <Navbar />
      <Hero />
      <About />
      <Years />
      <Experience />
      <Services />
      <Professionals />
      <Impact />
      <Contact />
      <Calendar />
    </DivGrey>
  );
}


