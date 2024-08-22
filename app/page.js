"use client"

import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Services from "./components/services";
import Professionals from "./components/Professionals";
import Contact from "./components/Contact";
import Years from "./components/Years";
import Calendar from "./components/Calendar";
import Impact from "./components/Impact";


import styled from 'styled-components';
import { useRef } from "react";
import { Zen_Dots } from "next/font/google";


const DivGrey = styled.div`
       font-family: "Varela Round", sans-serif; 
    //  font-family: "Matemasie", sans-serif;
    // font-family: "Grey Qo", 'cursive';
      // font-family: 'Montserrat', sans-serif;
    // background-color: "#050E28";
    //  font-family: 'Matemasie', sans-serif;
    //  @apply bg-[#050E28];
`;


export default function Home() {



  return (
   <DivGrey className=" bg-[#050E28] overflow-hidden">
    <Navbar />
    <Hero />
    <About  />
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
