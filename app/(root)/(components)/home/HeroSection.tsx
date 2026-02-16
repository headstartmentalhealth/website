import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className='w-full flex justify-center py-40 px-6 bg-white dark:bg-gray-900'>
      <div className='max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
        {/* LEFT TEXT */}
        <div>
          <h1 className='text-6xl md:text-7xl font-bold text-[#0A2050] dark:text-white leading-tight'>
            Need Help?
          </h1>

          <p className='text-lg  mt-6 max-w-md text-[#0A2050] dark:text-gray-300 leading-relaxed'>
            Your depressed days are over when you use our application to manage
            your mental health!
          </p>

          <button className='mt-8 bg-[#7EB694] text-[#0A3C2F] px-8 py-3 rounded-full font-medium shadow-sm'>
            Get Started!
          </button>
        </div>

        {/* RIGHT IMAGE + TAGS */}
        <div className='relative flex justify-center'>
          <div className='rounded-xl overflow-hidden shadow-md '>
            <Image
              src='/images/hero.png'
              alt='Mental health'
              width={600}
              height={500}
              className='object-cover'
            />
          </div>

          {/* Floating tags */}
          <span className='absolute -left-4 bottom-20 bg-[#E7F5E8] text-gray-800 text-sm px-4 py-2 rounded-lg shadow rotate-10'>
            Depression
          </span>

          <span className='absolute -right-4 bottom-30 bg-[#FFF2EF] text-gray-800 text-sm px-4 py-2 rounded-lg shadow -rotate-3'>
            Anxiety
          </span>

          <span className='absolute -bottom-3 bg-white text-gray-800 text-sm px-4 py-2 rounded-lg shadow -rotate-3'>
            Low Self-Esteem
          </span>
        </div>
      </div>
    </section>
  );
}
