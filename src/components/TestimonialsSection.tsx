'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { TESTIMONIALS } from '@/lib/data';
import { ChevronLeft, ChevronRight, Star, Quote } from '@/components/Icons';

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  const current = TESTIMONIALS[currentIndex];

  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Carousel Container matching reference styling */}
        <div className="relative rounded-3xl bg-slate-50/90 border border-slate-200/80 p-6 sm:p-10 shadow-sm transition-all duration-300">
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8">
            
            {/* Left Nav Arrow & Quote Mark */}
            <div className="flex items-center gap-4 shrink-0">
              <button
                type="button"
                onClick={prevSlide}
                className="w-9 h-9 rounded-full bg-white border border-slate-200 shadow-2xs hover:bg-slate-100 flex items-center justify-center text-slate-600 transition-colors focus:outline-none focus:ring-2 focus:ring-[#F27322]"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <div className="w-12 h-12 rounded-2xl bg-orange-100 text-[#F27322] flex items-center justify-center shrink-0">
                <Quote className="w-6 h-6 fill-current" />
              </div>
            </div>

            {/* Testimonial Quote Content */}
            <div className="flex-1 text-center md:text-left space-y-2">
              <p className="text-sm sm:text-base lg:text-lg text-slate-800 font-medium italic leading-relaxed">
                "{current.quote}"
              </p>
              {current.isDemo && (
                <span className="inline-block text-[10px] text-slate-600 tracking-wider uppercase font-semibold">
                  (Demonstration Client Feedback)
                </span>
              )}
            </div>

            {/* Client Profile & 5 Stars (Right Side) */}
            <div className="flex flex-col sm:flex-row md:flex-col lg:flex-row items-center gap-4 shrink-0 border-t md:border-t-0 md:border-l border-slate-200/80 pt-4 md:pt-0 md:pl-6">
              
              {/* Avatar */}
              <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-white shadow-sm shrink-0">
                <Image
                  src={current.avatarUrl}
                  alt={current.name}
                  fill
                  sizes="48px"
                  className="object-cover"
                />
              </div>

              {/* Identity & Rating */}
              <div className="text-center sm:text-left md:text-center lg:text-left space-y-1">
                <div className="text-sm font-bold text-slate-900">
                  {current.name}
                </div>
                <div className="text-xs text-slate-500">
                  {current.role}, {current.company}
                </div>
                
                {/* 5 Stars in Orange */}
                <div className="flex items-center justify-center sm:justify-start md:justify-center lg:justify-start gap-0.5 text-amber-400">
                  {[...Array(current.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
              </div>

              {/* Right Nav Arrow */}
              <button
                type="button"
                onClick={nextSlide}
                className="w-9 h-9 rounded-full bg-white border border-slate-200 shadow-2xs hover:bg-slate-100 flex items-center justify-center text-slate-600 transition-colors focus:outline-none focus:ring-2 focus:ring-[#F27322] shrink-0"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

            </div>

          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-1.5 mt-6">
            {TESTIMONIALS.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  currentIndex === idx ? 'w-6 bg-[#F27322]' : 'w-2 bg-slate-200 hover:bg-slate-300'
                }`}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
