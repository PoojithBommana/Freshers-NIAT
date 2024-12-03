import React from 'react';
import { Music, Gift, Utensils, Camera } from 'lucide-react';

export function Highlights() {
  const highlights = [
    {
      icon: <Music className="w-8 h-8" />,
      title: "Live Music",
      description: "Groove to the beats of our amazing DJ and live band performances"
    },
    {
      icon: <Gift className="w-8 h-8" />,
      title: "Exciting Prizes",
      description: "Win amazing prizes in various competitions and lucky draws"
    },
    {
      icon: <Utensils className="w-8 h-8" />,
      title: "Gourmet Food",
      description: "Enjoy a delicious spread of multi-cuisine dishes"
    },
    {
      icon: <Camera className="w-8 h-8" />,
      title: "Photo Booth",
      description: "Capture memories with friends at our themed photo booth"
    }
  ];

  return (
    <div id="highlights" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-purple-800">Event Highlights</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((item, index) => (
            <div key={index} className="text-center p-6 rounded-lg bg-purple-50 hover:bg-purple-100 transition-colors">
              <div className="inline-block p-3 bg-purple-100 rounded-full text-purple-600 mb-4">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold mb-2 text-purple-800">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}