import React from 'react';

const Contact = () => {
  return (
    <div>
      {/* CONTACT SECTION */}
      <div className='py-20 text-center px-4'>
        <h2 className='text-3xl md:text-4xl font-semibold mb-4 text-[#0A2050] dark:text-white'>Contact Us</h2>

        <p className='text-gray-600 dark:text-gray-300 max-w-md mx-auto leading-relaxed'>
          We know the best way to get your concerns tended to. Send us a message
          and we will get right back!
        </p>

        <form className='max-w-xl mx-auto text-left mt-12'>
          {/* Email */}
          <label className='block font-medium text-gray-700 dark:text-gray-200 mb-2'>Enter Email</label>
          <input
            type='email'
            placeholder='johndoe@mail.com'
            className='w-full border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white px-4 py-3 rounded-md mb-6 focus:outline-none focus:ring-2 focus:ring-[#0A2050] dark:focus:ring-blue-500'
          />

          {/* Message */}
          <label className='block font-medium text-gray-700 dark:text-gray-200 mb-2'>Type Message</label>
          <textarea
            placeholder='Enter the content of your message here.'
            className='w-full border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white px-4 py-3 rounded-md h-40 mb-8 resize-none focus:outline-none focus:ring-2 focus:ring-[#0A2050] dark:focus:ring-blue-500'
          />

          {/* Button */}
          <button
            type='submit'
            className='w-full bg-[#13274F] dark:bg-[#13274F] text-white py-3 rounded-full font-medium hover:bg-[#061430] dark:hover:bg-blue-700 transition-colors'
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
