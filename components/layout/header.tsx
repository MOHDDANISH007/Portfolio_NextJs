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

  // Scroll disable jab mobile menu open ho
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  }, [isMobileMenuOpen])

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-background shadow-md">
      <div className="container px-4 mx-auto">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center">
            <h1 className="text-xl font-bold text-primary">Mohammad Danish</h1>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-8">
            {menuItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="text-primary hover:text-primary transition-colors"
              >
                {item.name}
              </Link>
            ))}
            <a href="/Mohd_Danish_Resume.pdf" download target="_blank">
              <button
                className="text-primary hover:text-secondary border border-primary hover:border-primary px-4 py-2 rounded flex items-center"
              >
                <Download className="mr-2" size={16} /> Resume
              </button>
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden mt-2 cursor-pointer p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="md:hidden fixed top-0 left-0 right-0 bottom-0 z-[9999] bg-background flex flex-col items-center justify-center gap-6 p-4"
          >
            <nav className="flex flex-col items-center justify-center gap-4 mb-4 backdrop:blur">
              {menuItems.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-medium text-muted-foreground hover:text-primary transition-all"
                >
                  {item.name}
                </Link>
              ))}
              <a href="/Mohd_Danish_Resume.pdf" download target="_blank">
                <button
                  className="text-primary hover:text-secondary border border-primary hover:border-primary px-4 py-2 rounded flex items-center"
                >
                  <Download className="mr-2 w-4 h-4" size={16} /> Resume
                </button>
              </a>
            </nav>

            {/* Close Button */}
            <button
              className="absolute top-4 right-4 p-2"
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
