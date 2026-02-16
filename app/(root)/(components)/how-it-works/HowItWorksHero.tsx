import Image from 'next/image';

export default function HowItWorksHero() {
  return (
    <section className='w-full flex justify-center pt-30 pb-20 px-6 bg-[#F3F4F6] dark:bg-gray-900'>
      <div className='max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
        {/* LEFT TEXT */}
        <div>
          <h1 className='text-4xl md:text-5xl font-bold text-[#0A2050] dark:text-white leading-tight mb-6'>
            How It Works
          </h1>

          <p className='text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-8'>
            Discover how HeadStart Connect helps you prioritize your mental well-being through simple, daily actions. It's easier than you think to get started.
          </p>
        </div>

        {/* RIGHT IMAGE */}
        <div className='flex justify-center'>
          <div className='relative w-full max-w-md aspect-square rounded-2xl overflow-hidden shadow-lg bg-white dark:bg-gray-800 flex items-center justify-center'>
            <Image
              src='/images/how_it_works_hero.png'
              alt='How HeadStart Connect Works'
              width={500}
              height={500}
              className='object-cover'
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
