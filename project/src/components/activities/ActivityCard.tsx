import React from 'react';
import { Clock, User } from 'lucide-react';

interface ActivityCardProps {
  title: string;
  time: string;
  description: string;
  location: string;
  category: 'cultural' | 'sports' | 'technical' | 'fun';
  poc?: string;
  subPoc?: string;
}

const categoryColors = {
  cultural: 'bg-pink-100 text-pink-800',
  sports: 'bg-green-100 text-green-800',
  technical: 'bg-blue-100 text-blue-800',
  fun: 'bg-yellow-100 text-yellow-800'
};

export function ActivityCard({ title, time, description, location, category, poc, subPoc }: ActivityCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-1">{title}</h3>
            <div className="flex items-center text-gray-600">
              <Clock className="w-4 h-4 mr-1" />
              <span>{time}</span>
            </div>
          </div>
          <span className={`px-3 py-1 rounded-full text-sm font-medium ${categoryColors[category]}`}>
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </span>
        </div>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex flex-col gap-1">
          <div className="text-sm text-gray-500">
            📍 {location}
          </div>
          {poc && (
            <div className="text-sm text-gray-500 flex items-center">
              <User className="w-4 h-4 mr-1" />
              POC: {poc}
              {subPoc && ` (Sub-POC: ${subPoc})`}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}