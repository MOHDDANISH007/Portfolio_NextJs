"use client";

import { motion } from "framer-motion";
import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import Image from "next/image";
import contactImage from "../../public/contact.svg";

const Contact = () => {
    return (
        <section className="bg-black text-white py-20 px-4">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-4xl font-bold mb-6 text-yellow-400">
                        Let's Connect
                    </h2>

                    <p className="text-gray-400 mb-8">
                        I'm always open to discussing new opportunities or collaborations.
                        Whether you have a project in mind or just want to chat, feel free to
                        reach out!
                    </p>

                    <div className="flex gap-6 mb-12">
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
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <Image
                        src={contactImage}
                        alt="Contact"
                        width={500}
                        height={500}
                        className="w-full h-auto"
                    />
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
