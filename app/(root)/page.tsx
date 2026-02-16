import React from 'react';
import HeroSection from './(components)/home/HeroSection';
import HowItWorksSection from './(components)/home/HowItWorksSection';
import TestimonialsSection from './(components)/home/TestimonialsSection';

export const metadata = {
  title: 'HeadStart | Start Early, Grow Strong',
  description: 'Start Early, Grow Strong',
  openGraph: {
    title: 'HeadStart | Start Early, Grow Strong',
    description: '',
    url: 'https://healthstartmentalhealth.com/',
    images: [
      {
        url: '',
        width: 1200,
        height: 630,
        alt: 'HeadStart | Home',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HeadStart',
    description: '',
    images: [''],
  },
  alternates: {
    canonical: 'https://headstartmentalhealth.com/',
  },
};

const page = () => {
  return (
    <main className="text-neutral-primary dark:text-white ">
      <HeroSection />
      <HowItWorksSection />
      <div className='dark:bg-gray-900'>
        <TestimonialsSection />
      </div>
    </main>
  );
};

export default page;
