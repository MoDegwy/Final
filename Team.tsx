import React from 'react';
import { Linkedin } from 'lucide-react';

const team = [
  {
    id: 1,
    name: 'Eman Gamil',
    role: 'Managing Partner',
    image: 'src/components/emangamil.jpg',
    expertise: 'Digital Forensics',
  },
  {
    id: 2,
    name: 'Abeer Hussien',
    role: 'Managing Partner',
    image:'src/components/Abeer edited.JPG',
    expertise: 'Intellectual Property',
  },
  {
    id: 3,
    name: 'Mohamed El Degwy',
    role: 'Managing Partner',
    image: 'src/components/degwyyyyy.jpeg',
    expertise: 'AI Law',
  },
  {
    id: 4,
    name: 'Shady Abdelsalam',
    role: 'Managing Partner',
    image: 'src/components/shadyyyyyy.jpeg',
    expertise: 'Contracts Law',
  },
];

const Team = () => {
  return (
    <section id="our-team" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Our Team</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map(({ id, name, role, image, expertise }) => (
            <div key={id} className="bg-white rounded-xl overflow-hidden shadow-sm">
              <img
                src={image}
                alt={name}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{name}</h3>
                <p className="text-blue-600 mb-2">{role}</p>
                <p className="text-gray-600 mb-4">{expertise}</p>
                <button className="flex items-center text-gray-600 hover:text-blue-600 transition-colors">
                  <Linkedin size={20} className="mr-2" />
                  Connect on LinkedIn
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;