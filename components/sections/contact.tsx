// components/sections/contact.tsx

"use client"

import { motion } from 'framer-motion'
import React from 'react'
import { Github, Linkedin, Mail } from 'lucide-react'
import ContactForm from '../contact-form'
import Image from 'next/image'
import contactImage from "../../public/contact.svg"

const Contact = () => {
    return (
        <section className='container mx-auto px-4 py-20'>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className='text-3xl font-bold mb-6'>
                        Let&apos;s <span className='text-primary'>Connect</span>
                    </h2>

                    <p className='text-muted-foreground mb-6'>
                        I&apos;m always open to discussing new opportunities or collaborations. Whether you have a project in mind or just want to chat, feel free to reach out!
                    </p>

                    <div className="flex gap-4 mb-8">
                        <button className="outline-btn lg-btn">
                            <a href="https://github.com/MOHDDANISH007" target='_blank' rel='noopener noreferrer'>
                                <Github className="mr-2" />
                            </a>
                        </button>

                        <button className="outline-btn lg-btn">
                            <a href="https://www.linkedin.com/in/mohd-danish-5420b024b/" target='_blank' rel='noopener noreferrer'>
                                <Linkedin className="mr-2" />
                            </a>
                        </button>

                        <button className="outline-btn lg-btn">
                            <a href="mailto:m.danish00707@gmail.com" target='_blank' rel='noopener noreferrer'>
                                <Mail className="mr-2" />
                            </a>
                        </button>
                    </div>

                    <div className="card">
                        <ContactForm />
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
                        width={800}
                        height={800}
                    />
                </motion.div>
            </div>
        </section>
    )
}

export default Contact;
