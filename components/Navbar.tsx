'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();
  const isActive = (path: string) =>
    pathname === path ? 'font-bold text-fg-brand' : 'text-heading';

  return (
    <nav className='bg-neutral-primary fixed w-full z-20 top-0 start-0 border-default'>
      <div className='max-w-5xl flex flex-wrap items-center justify-between mx-auto py-4'>
        <Link href='/' className='flex space-x-3 rtl:space-x-reverse'>
          <img src='/icons/icon.png' className='h-10' alt='Headstart Logo' />
        </Link>

        <button
          data-collapse-toggle='navbar-default'
          type='button'
          className='inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-body rounded-base md:hidden hover:bg-neutral-secondary-soft hover:text-heading focus:outline-none focus:ring-2 focus:ring-neutral-tertiary'
        >
          <span className='sr-only'>Open main menu</span>
          <svg
            className='w-6 h-6'
            aria-hidden='true'
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            fill='none'
            viewBox='0 0 24 24'
          >
            <path
              stroke='currentColor'
              strokeLinecap='round'
              strokeWidth='2'
              d='M5 7h14M5 12h14M5 17h14'
            />
          </svg>
        </button>

        <div className='hidden w-full md:block md:w-auto' id='navbar-default'>
          <ul className='font-medium flex flex-col p-4 md:p-0 mt-4 border border-default rounded-base bg-neutral-secondary-soft md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-neutral-primary'>
            <li>
              <Link
                href='/'
                className={`block py-2 px-3 rounded md:p-0 ${isActive('/')}`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href='/how-it-works'
                className={`block py-2 px-3 rounded md:p-0 ${isActive(
                  '/how-it-works'
                )}`}
              >
                How it works
              </Link>
            </li>
            <li>
              <Link
                href='/about-us'
                className={`block py-2 px-3 rounded md:p-0 ${isActive(
                  '/about-us'
                )}`}
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href='/contact-us'
                className={`block py-2 px-3 rounded md:p-0 ${isActive(
                  '/contact-us'
                )}`}
              >
                Contact Us
              </Link>
            </li>
            <li>
              <Link
                href='/blog'
                className={`block py-2 px-3 rounded md:p-0 ${isActive(
                  '/blog'
                )}`}
              >
                Blog
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
