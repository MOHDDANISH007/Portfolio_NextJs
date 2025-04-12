import { Footer } from "@/components/layout/footer";
import Hero from "@/components/sections/hero";
import Projects from "@/components/sections/project";
import Skills from "@/components/sections/skills";
import Contact from "@/components/sections/contact";
// import { main } from "framer-motion/client";
// import Image from "next/image";

export default function Home() {
  return(
    <main>
      <Hero/>
      <Skills/>
      <Projects/>
      <Contact/>
      <Footer/>
    </main>
  )
}
