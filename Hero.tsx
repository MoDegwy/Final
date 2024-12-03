import React from 'react';
import { ChevronRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gray-900/70 backdrop-blur-sm"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Empowering Progress Through Legal Expertise
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Your trusted advisors in navigating technology law and innovation
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg flex items-center hover:bg-blue-700 transition-colors">
            Learn More
            <ChevronRight className="ml-2" size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;