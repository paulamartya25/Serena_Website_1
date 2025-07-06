'use client';
import { motion } from "framer-motion";

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  const quotes = [
    '“Sometimes the most productive thing you can do is relax.”',
    '“Healing takes time, and asking for help is a courageous step.”',
    '“Your mental health matters as much as your physical health.”',
    '“It’s okay to not be okay — growth starts there.”',
    '“You are not alone in this journey.”',
  ];

  const [quoteIndex, setQuoteIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setQuoteIndex((prev) => (prev + 1) % quotes.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full min-h-screen overflow-hidden flex px-0 bg-white">
      
      {/* Background Image Blur */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images_10.png"
          alt="Therapy Background"
          className="w-full h-full object-cover opacity-20"
        />
      </div>

      {/* Blurred Overlay */}
      <div className="absolute inset-0 bg-white bg-opacity-30 backdrop-blur-sm z-0" />

      {/* Main Content */}
      <div className="relative z-10 flex flex-col md:flex-row w-full">
        
        {/* LEFT SIDE: Sky Blue Box with Animated Images and Quotes */}
        <div className="w-full md:w-1/2 bg-sky-500 flex flex-col justify-between py-12 px-6 md:min-h-screen">
          
          {/* Top Image + Quote */}
          <div className="flex flex-col items-end">
            <motion.img
              src="/images_11.png"
              alt="Therapy Visual Top"
              className="w-[300px] h-[200px] object-cover rounded-lg shadow-lg mb-2"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            />
            <motion.p
              className="text-gray-800 text-right text-lg font-semibold max-w-xs"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              “Mental peace is the greatest gift you can give yourself.”
            </motion.p>
          </div>

          {/* Bottom Image + Quote */}
          <div className="flex flex-col items-start mt-12">
            <motion.img
              src="/images_9.png"
              alt="Therapy Visual Bottom"
              className="w-[350px] h-[200px] object-cover rounded-lg shadow-lg mb-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            />
            <motion.p
              className="text-gray-800 text-left text-lg font-semibold max-w-xs"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              “Every step you take matters.”
            </motion.p>
          </div>
        </div>

        {/* RIGHT SIDE: Title + Form + Rotating Quote */}
        <div className="w-full md:w-1/2 flex flex-col items-center justify-center text-center md:text-left px-6 py-16 bg-white">
          <motion.h1
            className="text-4xl md:text-5xl font-bold text-gray-800 mb-8"
            style={{ fontFamily: "'Dancing Script', cursive" }}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Welcome to Blake's Therapy
          </motion.h1>

          <motion.form
            className="bg-white bg-opacity-90 p-6 rounded-full shadow-md mb-6 max-w-md w-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <input
              type="text"
              placeholder="SCHEDULE CONSULTATION"
              className="w-full border border-gray-300 rounded-full px-6 py-3 text-center text-lg font-medium text-gray-700 focus:outline-none"
              required
            />
          </motion.form>

          <motion.p
            className="text-xl md:text-2xl italic text-gray-700 font-medium transition-opacity duration-700 ease-in-out"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            {quotes[quoteIndex]}
          </motion.p>
        </div>

      </div>
    </section>
  );
}
