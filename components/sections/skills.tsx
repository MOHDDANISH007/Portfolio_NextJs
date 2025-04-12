'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { technologies } from '@/constants/index';  // Assumes technologies is an array of tech objects
import Image from 'next/image';  // For optimized image loading in Next.js

const Skills = () => {
  return (
    <div className="overflow-x-hidden px-2"> {/* Added wrapper to prevent overflow */}
      <h2 className="text-3xl font-bold mb-12 text-center">
        <span className="text-primary">Skills</span> & Technologies
      </h2>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 overflow-hidden"
      >
        {technologies.map((tech, index) => (
          <div
            key={index}
            className="flex flex-wrap items-center justify-center p-4 border hover:border-primary transition-colors"
          >
            <Image
              src={tech.logo}  // Assuming `tech.logo` is a valid path to an image or URL
              alt={tech.name}
              title={tech.name}
              width={40}  // Adjust image size
              height={40}
              className="mb-2"
            />
            <span className="pl-2 text-sm text-center">{tech.name}</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default Skills;
