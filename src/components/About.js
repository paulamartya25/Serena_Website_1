'use client';

import Image from 'next/image';
import React from 'react';

export default function AboutDrSerena() {
  return (
    <section className="bg-black py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* 🖼️ Left: Headshot Enlarged 2x in Both Dimensions */}
        <div className="flex justify-center md:justify-start">
          <Image
            src="/amar_1.png.jpg" // Ensure this is placed in /public
            alt="Dr. Serena Blake"
            width={800}
            height={1400}
            className="rounded-lg shadow-lg object-cover"
          />
        </div>

        {/* 📝 Right: Bio Info */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Dr. Serena Blake, PsyD
          </h2>
          <p className="text-teal-300 font-medium mb-2">
            Clinical Psychologist | Los Angeles, CA
          </p>

          <p className="text-gray-200 mb-4 leading-relaxed">
            Dr. Serena Blake is a licensed clinical psychologist (PsyD) based in Los Angeles, CA, with eight years of experience and over 500 client sessions. She blends evidence-based approaches—like cognitive-behavioral therapy and mindfulness—with compassionate, personalized care to help you overcome anxiety, strengthen relationships, and heal from trauma.
          </p>
          <p className="text-gray-200 mb-4 leading-relaxed">
            Whether you meet in her Maplewood Drive office or connect virtually via Zoom, Dr. Blake is committed to creating a safe, supportive space for you to thrive.
          </p>

          {/* 🧠 Experience Section */}
          <div className="mt-6">
            <h3 className="text-xl text-white font-semibold mb-2">Experience Highlights</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-1">
              <li>8 years in clinical practice</li>
              <li>Over 500 successful therapy sessions</li>
              <li>Expert in cognitive-behavioral therapy and mindfulness</li>
              <li>Specialized in anxiety, trauma, and relationship counseling</li>
              <li>Licensed to offer virtual therapy across multiple states</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
