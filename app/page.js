import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Services from "./components/services";
import Projects from "./components/projects";
import Contact from "./components/contact";

export default function Home() {
  return (
   <div>
    <Navbar />
    <Hero />
    <About />
    <Experience />
    <Services />
    <Projects />
    <Contact />
   </div>
  );
}
