import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

export function Contact() {
  return (
    <div id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4 text-purple-900">Contact Us</h2>
        <p className="text-center text-gray-600 mb-12">Have questions? Get in touch with our event coordinators</p>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-6 rounded-lg bg-purple-50">
            <Phone className="w-8 h-8 mx-auto mb-4 text-purple-600" />
            <h3 className="font-bold text-lg mb-2">Phone</h3>
            <p className="text-gray-600">+91 1234567890</p>
            <p className="text-gray-600">+91 9876543210</p>
          </div>
          
          <div className="text-center p-6 rounded-lg bg-purple-50">
            <Mail className="w-8 h-8 mx-auto mb-4 text-purple-600" />
            <h3 className="font-bold text-lg mb-2">Email</h3>
            <p className="text-gray-600">freshers@niat.edu</p>
            <p className="text-gray-600">support@niat.edu</p>
          </div>
          
          <div className="text-center p-6 rounded-lg bg-purple-50">
            <MapPin className="w-8 h-8 mx-auto mb-4 text-purple-600" />
            <h3 className="font-bold text-lg mb-2">Venue</h3>
            <p className="text-gray-600">NIAT Campus</p>
            <p className="text-gray-600">Main Auditorium</p>
          </div>
        </div>
      </div>
    </div>
  );
}