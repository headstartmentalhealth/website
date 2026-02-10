import Image from 'next/image';
import Contact from './Contact';

export default function TestimonialsSection() {
  return (
    <section className='max-w-5xl mx-auto py-24'>
      {/* TESTIMONIALS HEADER */}
      <h2 className='text-3xl md:text-4xl font-semibold mb-10'>Testimonials</h2>

      {/* TESTIMONIAL CARD */}
      <div className='bg-[#E3F1E9] rounded-xl px-20 py-16 relative'>
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
              src='/images/testimonial.png'
              alt='Testimonial Avatar'
              width={300}
              height={300}
              className='object-cover w-full h-full'
            />
          </div>

          {/* TEXT */}
          <div className='max-w-xl'>
            <p className=' text-gray-700 leading-relaxed mb-3'>
              My friend recommended this App to me when I was a little
              depressed. Ever since then, I have been so addicted to the
              features that this App provides.
              <br />
              <br />
              Thank you for creating a masterpiece!
            </p>

            <i className='mt-4 text-[#0A2050] font-medium'>
              Toyin Adetokunbo | 19 years
            </i>
          </div>
        </div>

        {/* Pagination Dots */}
        <div className='flex justify-center mt-8 gap-2'>
          <span className='w-6 h-2 bg-[#0A2050] rounded-full'></span>
          <span className='w-2 h-2 bg-[#7EB694] rounded-full'></span>
          <span className='w-2 h-2 bg-[#7EB694] rounded-full'></span>
        </div>
      </div>

      {/* OUR PARTNERS */}
      <div className='mt-24 mb-40'>
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
      </div>

      {/* CONTACT SECTION */}
      <Contact />
    </section>
  );
}
