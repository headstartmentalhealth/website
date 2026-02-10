'use client';

import { useState } from 'react';

export default function FAQs() {
  const faqs = [
    {
      question: 'How do I download the app?',
      answer:
        'You can download the app from the App Store or Google Play Store.',
    },
    {
      question: 'Will I get a confidence boost when I use the app?',
      answer:
        'Absolutely! The app is designed to improve your emotional wellbeing and boost your confidence.',
    },
    {
      question: 'Do I get to use the app for free?',
      answer:
        'Yes, you have access to our free tier. The premium tier comes with a cost that gives you unlimited access to awesome features that will blow your mind.',
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(2); // Last FAQ open by default

  return (
    <section className='bg-white py-20 px-6'>
      <div className='max-w-4xl mx-auto'>
        {/* Image Section */}
        <div className='flex justify-center'>
          <img
            src='/images/contact.png'
            alt='FAQ Hero'
            className='rounded-xl w-full max-w-3xl object-cover'
          />
        </div>

        {/* Title */}
        <h1 className='text-center text-4xl font-bold mt-16 mb-10'>FAQs</h1>

        {/* FAQ List */}
        <div className='space-y-5'>
          {faqs.map((faq, index) => (
            <div
              key={index}
              className='border border-gray-300 rounded-lg p-5 cursor-pointer transition'
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              {/* Question Row */}
              <div className='flex justify-between items-center'>
                <p className='font-semibold text-lg'>{faq.question}</p>

                {/* Icon */}
                <span className='text-2xl'>
                  {openIndex === index ? '−' : '+'}
                </span>
              </div>

              {/* Answer */}
              {openIndex === index && (
                <p className='text-gray-600 mt-4 text-sm leading-relaxed'>
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
