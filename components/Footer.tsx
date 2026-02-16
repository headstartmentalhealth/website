'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='bg-[#10264B] text-white py-12'>
      <div className='max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8'>
        {/* LOGO & DESCRIPTION */}
        <div className='col-span-1 md:col-span-1'>
          <Link href='/' className='flex items-center gap-2 mb-4'>
            <Image
              src='/logo-white.png'
              alt='HeadStart Logo'
              width={150}
              height={50}
              className='h-auto'
            />
          </Link>
          <p className='text-gray-300 text-sm leading-relaxed'>
            We help you prioritize your mental health with ease and consistency.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div className='col-span-1'>
          <h3 className='font-semibold text-lg mb-4'>Quick Links</h3>
          <ul className='space-y-2 text-gray-300 text-sm'>
            <li>
              <Link href='/' className='hover:text-white transition-colors'>
                Home
              </Link>
            </li>
            <li>
              <Link
                href='/about-us'
                className='hover:text-white transition-colors'
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href='/how-it-works'
                className='hover:text-white transition-colors'
              >
                Features
              </Link>
            </li>
            <li>
              <Link
                href='/contact-us'
                className='hover:text-white transition-colors'
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* CONTACT INFO */}
        <div className='col-span-1'>
          <h3 className='font-semibold text-lg mb-4'>Contact</h3>
          <ul className='space-y-2 text-gray-300 text-sm'>
            <li>headstartconnectmentalhealth@gmail.com</li>
            <li>+234 812 345 6789</li>
            <li>Lagos, Nigeria</li>
          </ul>
        </div>

      </div>

      {/* SOCIAL LINKS - Moved to bottom */}
      <div className='max-w-5xl mx-auto px-6 mt-12 mb-8 flex flex-col items-center'>
        <h3 className='font-semibold text-lg mb-4'>Follow Us</h3>
        <div className='flex gap-4'>
          {/* Facebook */}
          <a
            href='#'
            className='w-8 h-8 bg-[#7EB694] rounded-full flex items-center justify-center hover:opacity-80 transition-opacity text-[#10264B]'
            aria-label='Facebook'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='18'
              height='18'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
            >
              <path d='M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z' />
            </svg>
          </a>
          {/* Instagram */}
          <a
            href='#'
            className='w-8 h-8 bg-[#7EB694] rounded-full flex items-center justify-center hover:opacity-80 transition-opacity text-[#10264B]'
            aria-label='Instagram'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='18'
              height='18'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
            >
              <rect width='20' height='20' x='2' y='2' rx='5' ry='5' />
              <path d='M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z' />
              <line x1='17.5' x2='17.51' y1='6.5' y2='6.5' />
            </svg>
          </a>
          {/* X (formerly Twitter) */}
          <a
            href='#'
            className='w-8 h-8 bg-[#7EB694] rounded-full flex items-center justify-center hover:opacity-80 transition-opacity text-[#10264B]'
            aria-label='X (Twitter)'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='16'
              height='16'
              viewBox='0 0 24 24'
              fill='currentColor'
            >
              <path d='M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z' />
            </svg>
          </a>
          {/* TikTok */}
          <a
            href='#'
            className='w-8 h-8 bg-[#7EB694] rounded-full flex items-center justify-center hover:opacity-80 transition-opacity text-[#10264B]'
            aria-label='TikTok'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='18'
              height='18'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
            >
              <path d='M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5' />
            </svg>
          </a>
          {/* LinkedIn */}
          <a
            href='#'
            className='w-8 h-8 bg-[#7EB694] rounded-full flex items-center justify-center hover:opacity-80 transition-opacity text-[#10264B]'
            aria-label='LinkedIn'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='18'
              height='18'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
            >
              <path d='M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z' />
              <rect width='4' height='12' x='2' y='9' />
              <circle cx='4' cy='4' r='2' />
            </svg>
          </a>
        </div>
      </div>

      <div className='max-w-5xl mx-auto px-6 pt-8 border-t border-gray-700 text-center text-gray-400 '>
        <p>&copy; {currentYear} HeadStart Connect. All rights reserved.</p>
      </div>
    </footer>
  );
}
