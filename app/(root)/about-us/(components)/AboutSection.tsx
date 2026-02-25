import Image from 'next/image';

export default function AboutSection() {
  return (
    <section className='bg-[#11254B] pt-40 pb-20 px-6 md:px-10 lg:px-20 text-white'>
      <div className='max-w-5xl mx-auto'>
        {/* Section Title */}
        <h2 className='text-3xl md:text-4xl font-bold mb-12'>Who We Are</h2>

        {/* Two Column Layout */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
          {/* LEFT CONTENT */}
          <div className='space-y-10'>
            <p className='text-base leading-relaxed text-gray-200 max-w-lg'>
              We are HeadStart Connect, an organization that focuses on providing the
              necessary tool that helps bridge the gap that comes with accessing
              mental health care and support.
              <br />
              <br />
              We saw the need to make this available to those in need of it and
              this has been a game changer ever since.
            </p>

            {/* Mission */}
            <div>
              <h3 className='text-lg font-bold tracking-wide text-[#7EB694]'>OUR MISSION</h3>
              <p className='mt-3 text-base text-gray-200 max-w-lg'>
                We care about mental health so we offered to be of service by
                all means necessary.
              </p>
            </div>

            {/* Vision */}
            <div>
              <h3 className='text-lg font-bold tracking-wide text-[#7EB694]'>OUR VISION</h3>
              <p className='mt-3 text-base text-gray-200 max-w-lg'>
                Our vision is to get as many people as possible back on track to
                a stable mental health for improved everyday living.
              </p>
            </div>
          </div>

          {/* RIGHT CONTENT (Image) */}
          <div className='flex justify-center md:justify-end'>
            <div className='relative w-full h-64 md:h-80 lg:h-[400px] rounded-xl overflow-hidden shadow-lg bg-white flex items-center justify-center'>
              <Image
                src='/images/about_us_content.png'
                alt='Our Mission and Vision'
                fill
                className='object-cover'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
