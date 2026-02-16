import Image from 'next/image';

export default function AboutUsHero() {
  return (
    <section className='w-full flex justify-center pt-40 pb-20 px-6 bg-white dark:bg-gray-900'>
      <div className='max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
        {/* LEFT TEXT */}
        <div>
          <h1 className='text-5xl md:text-6xl font-bold text-[#0A2050] dark:text-white leading-tight mb-6'>
            About Us
          </h1>
          <p className='text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-8'>
            Building a community where mental wellness is accessible, supportive, and free from stigma. Learn more about our journey and the team behind HeadStart Connect.
          </p>
        </div>

        {/* RIGHT IMAGE */}
        <div className='flex justify-center'>
          <div className='relative w-full max-w-md aspect-square flex items-center justify-center'>
            <Image
              src='/images/about_us_hero.png'
              alt='About HeadStart Connect'
              width={500}
              height={500}
              className='object-contain rounded-lg'
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
