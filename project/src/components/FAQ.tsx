import React from 'react';

const faqs = [
  {
    question: "What is the dress code for the event?",
    answer: "The dress code is smart casual. Feel free to dress comfortably while maintaining a presentable appearance."
  },
  {
    question: "Can I participate in multiple activities?",
    answer: "Yes, you can participate in multiple activities as long as their timings don't overlap."
  },
  {
    question: "Are refreshments provided?",
    answer: "Yes, lunch and refreshments will be provided throughout the day for all participants."
  },
  {
    question: "Do I need to bring any equipment for the activities?",
    answer: "All necessary equipment will be provided. Just bring your enthusiasm!"
  },
  {
    question: "Is there a registration fee?",
    answer: "No, the event is free for all NIAT students."
  },
  {
    question: "Can I bring guests?",
    answer: "Unfortunately, the event is exclusively for NIAT students and faculty."
  }
];

export function FAQ() {
  return (
    <div id="faq" className="py-20 bg-purple-50">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4 text-purple-900">Frequently Asked Questions</h2>
        <p className="text-center text-gray-600 mb-12">Got questions? We've got answers!</p>
        
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-bold text-purple-800 mb-2">{faq.question}</h3>
              <p className="text-gray-600">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}