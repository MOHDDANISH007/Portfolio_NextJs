"use client";

import React from "react";
import { motion } from "framer-motion";
import { Github, Mail } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import HeroImage from "@/public/here2.svg";

const Hero = () => {
  return (
    <section className="w-full mt-10 bg-black text-white">
      <div className="container mx-auto px-4 pt-32 pb-20 md:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-4"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-yellow-400">
              Hi, I&apos;m Mohammad Danish
            </h1>
            <p className="text-base sm:text-lg md:text-xl">
              I&apos;m a Full Stack Developer with a passion for creating innovative and
              user-friendly web applications.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="mailto:m.danish00707@gmail.com"
                className="inline-flex items-center px-4 py-2 bg-transparent border border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black rounded-lg text-sm font-medium transition-all duration-200"
              >
                <Mail className="mr-2 w-4 h-4" />
                Contact Me
              </Link>
              <Link
                href="https://github.com/MOHDDANISH007"
                target="_blank"
                className="inline-flex items-center px-4 py-2 bg-transparent border border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black rounded-lg text-sm font-medium transition-all duration-200"
              >
                <Github className="mr-2 w-4 h-4" />
                GitHub
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center"
          >
            <Image
              src={HeroImage}
              alt="hero"
              width={500}
              height={500}
              className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-auto"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
