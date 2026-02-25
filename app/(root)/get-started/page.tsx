'use client';

import Link from 'next/link';
import { Smartphone, Bell, Rocket } from 'lucide-react';

export default function GetStartedPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 pt-32 pb-20 px-6 flex flex-col items-center justify-center text-center">
      <div className="max-w-2xl w-full space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
        <div className="flex justify-center">
          <div className="w-20 h-20 bg-[#E7F5E8] dark:bg-[#0A3C2F]/30 rounded-full flex items-center justify-center">
            <Rocket className="w-10 h-10 text-[#7EB694]" />
          </div>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-[#0A2050] dark:text-white leading-tight">
          HeadStart is Coming Soon!
        </h1>

        <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
          We are currently putting the finishing touches on our mobile app to bring you the best experience possible.
          The HeadStart app will empower you with tools for mental wellness, growth, and connection—right in your pocket.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-2xl border border-gray-100 dark:border-gray-700 flex flex-col items-center">
            <Smartphone className="w-8 h-8 text-[#7EB694] mb-3" />
            <h3 className="font-semibold text-[#0A2050] dark:text-white">Mobile Focused</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">Launching on both iOS and Android stores.</p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-2xl border border-gray-100 dark:border-gray-700 flex flex-col items-center">
            <Bell className="w-8 h-8 text-[#7EB694] mb-3" />
            <h3 className="font-semibold text-[#0A2050] dark:text-white">Get Notified</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">Be the first to know when we go live.</p>
          </div>
        </div>

        <div className="pt-10 flex flex-col items-center gap-4">
          <Link
            href="https://headstartconnect.com"
            className="bg-[#7EB694] hover:bg-[#6da886] text-[#0A3C2F] px-10 py-4 rounded-full font-semibold shadow-lg transition-all transform hover:scale-105"
          >
            Join the Waitlist
          </Link>
          <Link href="/" className="text-[#0A2050] dark:text-gray-400 hover:underline text-sm font-medium">
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
