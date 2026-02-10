export default function AboutUsHero() {
  return (
    <section className='bg-[#11254B] mt-20 py-20 px-6 md:px-10 lg:px-20 text-white'>
      <div className='max-w-5xl mx-auto'>
        {/* Page Title */}
        <h1 className='text-4xl md:text-5xl font-bold mb-12'>About Us</h1>

        {/* Two Column Layout */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
          {/* LEFT CONTENT */}
          <div className='space-y-10'>
            <p className='text-base leading-relaxed text-gray-200 max-w-lg'>
              We are HeadStart, an organization that focuses on providing the
              necessary tool that helps bridge the gap that comes with accessing
              mental health care and support.
              <br />
              <br />
              We saw the need to make this available to those in need of it and
              this has been a game changer ever since.
            </p>

            {/* Mission */}
            <div>
              <h2 className='text-lg font-bold tracking-wide'>OUR MISSION</h2>
              <p className='mt-3 text-base text-gray-200 max-w-lg'>
                We care about mental health so we offered to be of service by
                all means necessary.
              </p>
            </div>

            {/* Vision */}
            <div>
              <h2 className='text-lg font-bold tracking-wide'>OUR VISION</h2>
              <p className='mt-3 text-base text-gray-200 max-w-lg'>
                Our vision is to get as many people as possible back on track to
                a stable mental health for improved everyday living.
              </p>
            </div>
          </div>

          {/* RIGHT CONTENT (White Placeholder Box) */}
          <div className='flex justify-center md:justify-end'>
            <div className='bg-white rounded-xl shadow-md w-full h-64 md:h-80 lg:h-[350px]'></div>
          </div>
        </div>
      </div>
    </section>
  );
}
