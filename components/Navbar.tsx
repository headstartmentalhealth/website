'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const isActive = (path: string) =>
    pathname === path
      ? 'text-primary-600 dark:text-primary-400 font-semibold'
      : 'text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors';

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'How it works', href: '/how-it-works' },
    { name: 'About Us', href: '/about-us' },
    { name: 'Contact Us', href: '/contact-us' },
    { name: 'Blog', href: '/blog' },
  ];

  return (
    <nav className='bg-white/80 dark:bg-gray-900/80 backdrop-blur-md fixed w-full z-50 top-0 start-0 border-b border-gray-100 dark:border-gray-800 transition-all duration-300'>
      <div className='max-w-5xl flex flex-wrap items-center justify-between mx-auto py-5 px-6 md:px-0'>
        <Link href='/' className='flex items-center space-x-2' onClick={closeMenu}>
          <img
            src='/logo.png'
            className='h-9 dark:hidden'
            alt='HeadStart Logo'
          />
          <img
            src='/logo-white.png'
            className='h-9 hidden dark:block'
            alt='HeadStart Logo'
          />
        </Link>

        {/* Mobile menu button */}
        <button
          type='button'
          onClick={toggleMenu}
          className='inline-flex items-center p-2 w-10 h-10 justify-center text-gray-500 rounded-lg md:hidden hover:bg-gray-50 dark:hover:bg-gray-800 focus:outline-none transition-colors'
          aria-controls='navbar-default'
          aria-expanded={isMenuOpen}
        >
          <span className='sr-only'>Open main menu</span>
          {isMenuOpen ? (
            <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M6 18L18 6M6 6l12 12' />
            </svg>
          ) : (
            <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h16m-7 6h7' />
            </svg>
          )}
        </button>

        {/* Desktop & Mobile Menu */}
        <div className={`${isMenuOpen ? 'max-h-96 opacity-100 border-b md:border-b-0 py-4 md:py-0' : 'max-h-0 opacity-0 md:max-h-full md:opacity-100'} overflow-hidden md:overflow-visible transition-all duration-300 ease-in-out w-full md:block md:w-auto`} id='navbar-default'>
          <ul className='font-medium flex flex-col md:flex-row md:space-x-10 rtl:space-x-reverse items-center'>
            {navLinks.map((link) => (
              <li key={link.href} className='w-full md:w-auto text-center py-2 md:py-0'>
                <Link
                  href={link.href}
                  onClick={closeMenu}
                  className={`block md:inline whitespace-nowrap text-[15px] ${isActive(link.href)}`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
