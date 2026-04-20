"use client";

import About from "./about/page";
import Hero from "./components/Hero";
import Contact from "./contact/page";
import Projects from "./projects/page";
import Skills from "./skills/page";

const Home = () => {
  return <>
    <Hero />
    <About />
    <Projects />
    <Skills />
    <Contact />
  </>;
}
export default Home;