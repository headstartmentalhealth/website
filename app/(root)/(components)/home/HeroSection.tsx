'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';

const slides = [
  {
    image: '/images/hero.png',
    title: 'Embrace Your Journey',
    description:
      'Discover the strength within you. Mental wellness is a path we walk together.',
    tags: ['Depression', 'Anxiety', 'Self-Care'],
  },
  {
    image: '/images/hero_black_teen_female.png',
    title: 'You Are Not Alone',
    description:
      "Growing up is tough, but you don't have to do it by yourself. We're here to listen.",
    tags: ['Peer Pressure', 'School Stress', 'Identity'],
  },
  {
    image: '/images/hero_black_adult_male.png',
    title: 'Redefine Strength',
    description:
      'True resilience is knowing when to ask for help. Take charge of your mental health.',
    tags: ['Work Stress', 'Burnout', 'Anxiety'],
  },
  {
    image: '/images/hero_black_kid_male.png',
    title: 'Happy Minds',
    description:
      'Building emotional confidence from the start. Tools for a brighter future.',
    tags: ['Big Emotions', 'Making Friends', 'Confidence'],
  },
];

export default function HeroSection() {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlideIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const currentSlide = slides[currentSlideIndex];

  return (
    <section className='w-full flex justify-center pt-24 pb-32 md:py-40 px-6 bg-white dark:bg-gray-900'>
      <div className='max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
        {/* LEFT TEXT */}
        <div>
          <h1 className='text-4xl md:text-7xl font-bold text-[#0A2050] dark:text-white leading-tight transition-all duration-500'>
            {currentSlide.title}
          </h1>

          <p className='text-lg  mt-6 max-w-md text-[#0A2050] dark:text-gray-300 leading-relaxed transition-all duration-500'>
            {currentSlide.description}
          </p>

          <Link href='/get-started'>
            <button className='mt-8 bg-[#7EB694] text-[#0A3C2F] px-8 py-3 rounded-full font-medium shadow-sm cursor-pointer hover:bg-[#6da886] transition-colors'>
              Get Started!
            </button>
          </Link>
        </div>

        {/* RIGHT IMAGE + TAGS */}
        <div className='relative flex justify-center'>
          <div className='w-full max-w-[400px] md:w-[600px] h-[350px] md:h-[500px] rounded-xl overflow-hidden shadow-md relative'>
            <div
              className='flex transition-transform duration-700 ease-in-out h-full'
              style={{ transform: `translateX(-${currentSlideIndex * 100}%)` }}
            >
              {slides.map((slide, index) => (
                <div key={index} className='min-w-full h-full relative'>
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    fill
                    className='object-cover'
                    priority={index === 0}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Floating tags - Dynamic */}
          <span className='absolute -left-4 bottom-20 bg-[#E7F5E8] text-gray-800 text-sm px-4 py-2 rounded-lg shadow rotate-10 z-10 transition-all duration-500'>
            {currentSlide.tags[0]}
          </span>

          <span className='absolute -right-4 bottom-30 bg-[#FFF2EF] text-gray-800 text-sm px-4 py-2 rounded-lg shadow -rotate-3 z-10 transition-all duration-500'>
            {currentSlide.tags[1]}
          </span>

          <span className='absolute -bottom-3 bg-white text-gray-800 text-sm px-4 py-2 rounded-lg shadow -rotate-3 z-10 transition-all duration-500'>
            {currentSlide.tags[2]}
          </span>
        </div>
      </div>
    </section>
  );
}
