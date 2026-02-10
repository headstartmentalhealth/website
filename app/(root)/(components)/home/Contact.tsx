import React from 'react';

const Contact = () => {
  return (
    <div>
      {/* CONTACT SECTION */}
      <div className='my-20 text-center'>
        <h2 className='text-3xl md:text-4xl font-semibold mb-4'>Contact Us</h2>

        <p className='text-gray-600 max-w-md mx-auto leading-relaxed'>
          We know the best way to get your concerns tended to. Send us a message
          and we will get right back!
        </p>

        <form className='max-w-xl mx-auto text-left mt-12'>
          {/* Email */}
          <label className=' font-medium text-gray-600'>Enter Email</label>
          <input
            type='email'
            placeholder='johndoe@mail.com'
            className='w-full border border-gray-300 px-4 py-3 rounded-md mt-2 mb-6 focus:outline-none'
          />

          {/* Message */}
          <label className=' font-medium text-gray-600'>Type Message</label>
          <textarea
            placeholder='Enter the content of your message here.'
            className='w-full border border-gray-300 px-4 py-3 rounded-md h-40 mt-2 mb-8 resize-none focus:outline-none'
          />

          {/* Button */}
          <button
            type='submit'
            className='w-full bg-[#0A2050] text-white py-3 rounded-full'
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
