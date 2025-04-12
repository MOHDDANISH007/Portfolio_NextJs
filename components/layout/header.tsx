'use client'
import React, { useState, useEffect } from 'react'
import { Download, Menu, X } from 'lucide-react'
import Link from 'next/link'
import { AnimatePresence, motion } from 'framer-motion'

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    const menuItems = [
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' },
    ]

    useEffect(() => {
        document.body.style.overflow = isMobileMenuOpen ? 'hidden' : ''
    }, [isMobileMenuOpen])

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md text-white">
            <div className="container mx-auto px-4 py-6 md:px-20">
                <div className="flex items-center justify-between">
                    <h1 className="text-4xl font-extrabold text-yellow-400 tracking-wide">Mohammad Danish</h1>

                    {/* Desktop Menu */}
                    <nav className="hidden md:flex items-center gap-6">
                        {menuItems.map((item, index) => (
                            <Link
                                key={index}
                                href={item.href}
                                className="text-yellow-400 hover:text-white font-medium transition-all duration-200"
                            >
                                {item.name}
                            </Link>
                        ))}
                        <a href="/Mohd_Danish_Resume.pdf" download target="_blank">
                            <button className="flex items-center gap-2 bg-transparent border border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black px-4 py-2 rounded-lg transition-all duration-200">
                                <Download size={16} /> Resume
                            </button>
                        </a>
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2 text-yellow-400"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "100vh" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden fixed inset-0 bg-black/90 backdrop-blur-sm z-[9999] flex flex-col items-center justify-center"
                    >
                        <nav className="flex flex-col gap-6 items-center">
                            {menuItems.map((item, index) => (
                                <Link
                                    key={index}
                                    href={item.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="text-lg font-medium text-yellow-400 hover:text-white transition-all"
                                >
                                    {item.name}
                                </Link>
                            ))}
                            <a href="/Mohd_Danish_Resume.pdf" download target="_blank">
                                <button className="flex items-center gap-2 bg-transparent border border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black px-4 py-2 rounded-lg transition-all duration-200">
                                    <Download size={16} /> Resume
                                </button>
                            </a>
                        </nav>

                        {/* Close Button */}
                        <button
                            className="absolute top-4 right-4 p-2 text-yellow-400"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            <X size={24} />
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    )
}

export default Header
