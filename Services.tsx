import React from 'react';
import { Code, Brain, Lightbulb, Shield, FileText } from 'lucide-react';

const services = [
  {
    icon: Code,
    title: 'Technology Law',
    description: 'Navigating the complexities of tech regulations and compliance.',
  },
  {
    icon: Brain,
    title: 'Artificial Intelligence',
    description: 'Legal guidance on AI development, deployment, and ethics.',
  },
  {
    icon: Lightbulb,
    title: 'Intellectual Property',
    description: 'Protecting your innovations with robust IP strategies.',
  },
  {
    icon: Shield,
    title: 'Data Privacy',
    description: 'Ensuring compliance with data protection laws and regulations.',
  },
  {
    icon: FileText,
    title: 'Contract Law',
    description: 'Drafting and negotiating technology-related contracts.',
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Our Services</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
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

export default Services;