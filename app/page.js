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

export default function Home() {
  return (
   <div>
    <Navbar />
    <Hero />
    <Years />
    <About />
    <Experience />
    <Services />
    <Professionals />
    <Impact />
    <Contact />
    <Calendar />
   </div>
  );
}
