'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import Contact from './Contact';

const testimonials = [
  {
    id: 1,
    text: "My friend recommended this App to me when I was a little depressed. Ever since then, I have been so addicted to the features that this App provides.\n\nThank you for creating a masterpiece!",
    name: 'Toyin Adetokunbo',
    role: '19 years',
    image: '/images/testimonial.png',
  },
  {
    id: 2,
    text: 'HeadStart Connect has completely transformed how I track my mental well-being. The daily check-ins are simple yet effective, and I feel more in control of my emotions.',
    name: 'Sarah Jenkins',
    role: '24 years',
    image: '/images/testimonial-2.png',
  },
  {
    id: 3,
    text: 'As a student, the stress can be overwhelming. This app gives me the tools I need to decompress and stay focused. Highly recommended for anyone needing a mental boost.',
    name: 'David Chen',
    role: '28 years',
    image: '/images/testimonial-3.png',
  },
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };
  return (
    <section className='max-w-5xl mx-auto py-24 px-6 relative '>
      {/* TESTIMONIALS HEADER */}
      <h2 className='text-3xl md:text-4xl font-semibold mb-10'>Testimonials</h2>

      {/* TESTIMONIAL CARD */}
      <div className='bg-[#E3F1E9] rounded-xl px-6 py-10 md:px-20 md:py-16 relative min-h-[400px] flex flex-col justify-center'>
        {/* Quote decoration */}
        <div className='absolute -top-6 left-25 flex gap-1'>
          <Image
            src={'/images/quote.png'}
            alt='Quote'
            width={100}
            height={100}
          />
        </div>

        <div className='flex flex-col md:flex-row items-center gap-8 mt-6'>
          {/* PHOTO */}
          <div className='w-40 h-40 rounded-full overflow-hidden border-4 border-[#7FB77E] shadow-md flex-shrink-0'>
            <Image
              src={testimonials[currentIndex].image}
              alt='Testimonial Avatar'
              width={300}
              height={300}
              className='object-cover w-full h-full'
            />
          </div>

          {/* TEXT */}
          <div className='max-w-xl'>
            <p className=' text-gray-700 leading-relaxed mb-3 whitespace-pre-line'>
              {testimonials[currentIndex].text}
            </p>

            <i className='mt-4 text-[#0A2050] font-medium'>
              {testimonials[currentIndex].name} | {testimonials[currentIndex].role}
            </i>
          </div>
        </div>

        {/* Pagination Dots */}
        <div className='flex justify-center mt-8 gap-2'>
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`rounded-full transition-all duration-300 ${index === currentIndex
                ? 'w-6 h-2 bg-[#0A2050]'
                : 'w-2 h-2 bg-[#7EB694] hover:bg-[#0A2050]'
                }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* OUR PARTNERS */}
      {/* <div className='mt-24 mb-40'>
        <h2 className='text-3xl md:text-4xl font-semibold mb-12'>
          Our Partners
        </h2>

        <div className='flex flex-wrap justify-center gap-10 opacity-40'>
          <div className='w-14 h-14 bg-gray-300 rounded-md'></div>
          <div className='w-14 h-14 bg-gray-300 rounded-md'></div>
          <div className='w-14 h-14 bg-gray-300 rounded-md'></div>
          <div className='w-14 h-14 bg-gray-300 rounded-md'></div>
          <div className='w-14 h-14 bg-gray-300 rounded-md'></div>
          <div className='w-14 h-14 bg-gray-300 rounded-md'></div>
          <div className='w-14 h-14 bg-gray-300 rounded-md'></div>
          <div className='w-14 h-14 bg-gray-300 rounded-md'></div>
          <div className='w-14 h-14 bg-gray-300 rounded-md'></div>
          <div className='w-14 h-14 bg-gray-300 rounded-md'></div>
          <div className='w-14 h-14 bg-gray-300 rounded-md'></div>
        </div>
      </div> */}

      {/* CONTACT SECTION */}
      <Contact />
    </section>
  );
}
