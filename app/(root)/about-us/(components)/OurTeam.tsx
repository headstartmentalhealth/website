export default function OurTeam() {
  return (
    <section className='bg-white py-20 px-6 md:px-10 lg:px-20'>
      <div className='max-w-5xl mx-auto'>
        {/* Title */}
        <h1 className='text-3xl md:text-4xl font-semibold text-[#11254B] mb-12'>
          Our Team
        </h1>

        {/* Cards */}
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10'>
          <div className='h-64 bg-[#E9F2E8] rounded-xl shadow-sm'></div>
          <div className='h-64 bg-[#E9F2E8] rounded-xl shadow-sm'></div>
          <div className='h-64 bg-[#E9F2E8] rounded-xl shadow-sm'></div>
        </div>
      </div>
    </section>
  );
}
