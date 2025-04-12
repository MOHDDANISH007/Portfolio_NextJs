'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { technologies } from '@/constants/index'; // Assumes technologies is an array of tech objects
import Image from 'next/image';

const Skills = () => {
  return (
    <div className="bg-black px-4 py-12 md:px-20">
      <h2 className="text-3xl font-bold mb-12 text-center text-yellow-400">
        Skills & Technologies
      </h2>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6"
      >
        {technologies.map((tech, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center p-6 border-2 border-gray-700 rounded-lg shadow-md hover:shadow-xl hover:border-yellow-400 transition-all bg-black text-white"
          >
            <div className="mb-4">
              <Image
                src={tech.logo} // Assuming `tech.logo` is a valid path to an image or URL
                alt={tech.name}
                title={tech.name}
                width={40} // Adjust image size for clarity
                height={40}
                className="object-contain"
              />
            </div>
            <span className="text-sm text-center text-white">{tech.name}</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Skills;
