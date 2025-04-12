"use client";

import { Github, Linkedin, Mail, Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-black text-white border-t border-gray-800">
      <div className="container mx-auto px-4 py-12 md:px-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold text-yellow-400 mb-4">Mohammad Danish</h3>
            <p className="text-gray-400 mb-6">
              Full Stack Developer crafting modern web experiences with a focus
              on user experience and performance.
            </p>
            <div className="flex gap-6">
              <a
                href="https://github.com/MOHDDANISH007"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-yellow-400 text-yellow-400 p-3 rounded-full hover:bg-yellow-400 hover:text-black transition-colors duration-300"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/mohd-danish-5420b024b/"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-yellow-400 text-yellow-400 p-3 rounded-full hover:bg-yellow-400 hover:text-black transition-colors duration-300"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="mailto:m.danish00707@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-yellow-400 text-yellow-400 p-3 rounded-full hover:bg-yellow-400 hover:text-black transition-colors duration-300"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-yellow-400 mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#about"
                  className="text-gray-400 hover:text-yellow-400 transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className="text-gray-400 hover:text-yellow-400 transition-colors"
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="text-gray-400 hover:text-yellow-400 transition-colors"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-400 hover:text-yellow-400 transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-yellow-400 mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="text-gray-400">Lucknow, UP</li>
              <li>
                <a
                  href="mailto:m.danish00707@gmail.com"
                  className="text-gray-400 hover:text-yellow-400 transition-colors"
                >
                  m.danish00707@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+1234567890"
                  className="text-gray-400 hover:text-yellow-400 transition-colors"
                >
                  8948442450
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Mohammad Danish. All rights reserved.
          </p>
          <p className="text-sm text-gray-400 flex items-center gap-1">
            Made with <Heart className="w-4 h-4 text-red-500" /> using Next.js
          </p>
        </div>
      </div>
    </footer>
  );
}