import React from 'react';
import { Shield, Heart, Brain } from 'lucide-react';

const values = [
  {
    icon: Shield,
    title: 'Innovation',
    description: 'Embracing cutting-edge solutions for modern legal challenges',
  },
  {
    icon: Heart,
    title: 'Integrity',
    description: 'Upholding the highest ethical standards in all our dealings',
  },
  {
    icon: Brain,
    title: 'Expertise',
    description: 'Deep knowledge in technology law and digital transformation',
  },
];

const About = () => {
  return (
    <section id="about-us" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">About Us</h2>
        
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-xl text-gray-600 mb-8">
            At The Councilors, we bridge the gap between law and technology, providing innovative legal solutions for the digital age. Our team of experienced attorneys combines deep legal knowledge with technical understanding to serve the unique needs of technology-driven businesses.
          </p>
          <p className="text-lg font-semibold text-blue-600">
            "Empowering innovators and businesses with tailored legal solutions to thrive in the digital age."
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {values.map(({ icon: Icon, title, description }) => (
            <div key={title} className="bg-white p-8 rounded-xl shadow-sm text-center">
              <div className="inline-block p-4 bg-blue-100 rounded-full mb-4">
                <Icon size={32} className="text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">{title}</h3>
              <p className="text-gray-600">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;