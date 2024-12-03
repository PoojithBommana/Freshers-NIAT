import React from 'react';
import { Calendar, MapPin } from 'lucide-react';
import { CountdownTimer } from './CountdownTimer';

export function Hero() {
  return (
    <div id="home" className="relative min-h-screen flex items-center justify-center">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1523580494863-6f3031224c94"
          alt="College campus"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/70 to-purple-900/90"></div>
      </div>
      
      <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">NIAT Freshers 2024</h1>
        <p className="text-xl md:text-2xl mb-12">A Day of Games, Arts, Technology, and Celebrations!</p>
        
        <CountdownTimer />
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 mt-12 mb-8">
          <div className="flex items-center">
            <Calendar className="mr-2" />
            <span>March 15, 2024 | 9:00 AM - 8:30 PM</span>
          </div>
          <div className="flex items-center">
            <MapPin className="mr-2" />
            <span>NIAT Campus</span>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#register"
            className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-full transition-colors"
          >
            Register Now
          </a>
          <a
            href="#activities"
            className="inline-block bg-white/10 hover:bg-white/20 text-white font-bold py-3 px-8 rounded-full transition-colors backdrop-blur-sm"
          >
            View Schedule
          </a>
        </div>
      </div>
    </div>
  );
}