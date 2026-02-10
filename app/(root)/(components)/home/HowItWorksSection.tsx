import Image from 'next/image';

export default function HowItWorksSection() {
  return (
    <section className='w-full bg-[#10264B] py-24 px-6 flex justify-center'>
      <div className='max-w-5xl w-full'>
        {/* HEADER */}
        <h2 className='text-white text-3xl md:text-4xl font-semibold mb-16'>
          How it works
        </h2>

        {/* STEP 1 */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24'>
          {/* Left Text */}
          <div className='flex flex-col items-start'>
            <div className='flex items-center gap-3'>
              <div className='w-7 h-7 rounded-full bg-[#7EB694] text-white flex items-center justify-center font-semibold'>
                1
              </div>
              <span className='text-white font-semibold'>
                DOWNLOAD <br /> THE APP
              </span>
            </div>

            <p className='text-gray-300 mt-4 max-w-xs leading-relaxed'>
              The very first step to making you a super champion with the
              available features to help you stay healthy.
            </p>
          </div>

          {/* Right white box - screenshot or placeholder */}
          <div className='rounded-lg overflow-hidden bg-white h-64 shadow-md'>
            <Image
              src='/images/pic.png'
              alt='Step 1'
              width={800}
              height={600}
              className='w-full h-full object-cover'
            />
          </div>
        </div>

        {/* STEP 2 */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-12  mb-24'>
          {/* Left white box */}
          <div className='rounded-lg overflow-hidden bg-white h-64 shadow-md'>
            <Image
              src='/images/pic.png'
              alt='Step 2'
              width={800}
              height={600}
              className='w-full h-full object-cover'
            />
          </div>

          {/* Right Text */}
          <div>
            <div className='flex items-center gap-3'>
              <div className='w-7 h-7 rounded-full bg-[#7EB694] text-white flex items-center justify-center font-semibold'>
                2
              </div>
              <span className='text-white font-semibold'>
                FILL IN YOUR <br /> DETAILS
              </span>
            </div>

            <p className='text-gray-300 mt-4 max-w-xs leading-relaxed'>
              A crucial part that helps us get to serve you better as you
              progress in-app.
            </p>
          </div>
        </div>

        {/* STEP 3 */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
          {/* Left Text */}
          <div>
            <div className='flex items-center gap-3'>
              <div className='w-7 h-7 rounded-full bg-[#7EB694] text-white flex items-center justify-center font-semibold'>
                3
              </div>
              <span className='text-white font-semibold'>
                CHECK-IN DAILY <br /> TO WIN REWARDS
              </span>
            </div>

            <p className='text-gray-300 mt-4 max-w-xs leading-relaxed'>
              Loads of reward await you as you use our app daily. Referring a
              friend gets you even more reward.
            </p>
          </div>

          {/* Right white box */}
          <div className='rounded-lg overflow-hidden bg-white h-64 shadow-md'>
            <Image
              src='/images/pic.png'
              alt='Step 3'
              width={800}
              height={600}
              className='w-full h-full object-cover'
            />
          </div>
        </div>
      </div>
    </section>
  );
}
