import React from 'react';
import FAQs from './(components)/Faqs';
import Contact from '../(components)/home/Contact';

const ContactUs = () => {
  return (
    <>
      <main className='dark:bg-gray-900 mt-4'>
        <FAQs />
        <Contact />
      </main>
    </>
  );
};

export default ContactUs;
