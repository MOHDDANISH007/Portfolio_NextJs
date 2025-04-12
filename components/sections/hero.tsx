"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Github, Mail } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import HeroImage from '@/public/here2.svg';

const Hero = () => {
  return (
    <section className="container mx-auto px-4 pt-32 pb-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-4"
        >
          <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-primary">
            Hi, I&apos;m <span className="text-primary font-bold">Mohammad Danish</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl">
            I&apos;m a Full Stack Developer with a passion for creating
            innovative and user-friendly web applications.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="mailto:m.danish00707@gmail.com"
              className="inline-flex items-center px-4 py-2 border border-primary bg-primary text-white hover:bg-primary/80 rounded-md text-sm font-medium transition-colors"
            >
              <Mail className="mr-2 w-4 h-4" />
              Contact Me
            </a>

            <Link
              href="https://github.com/MOHDDANISH007"
              target="_blank"
              className="inline-flex items-center px-4 py-2 border border-border bg-background text-foreground hover:bg-muted rounded-md text-sm font-medium transition-colors"
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
    </section>
  );
};

export default Hero;
