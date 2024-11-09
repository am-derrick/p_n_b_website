import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const TestimonialCard = ({ testimonial }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="bg-white rounded-xl shadow-lg p-6 relative"
    >
      <Quote className="w-8 h-8 text-blue-200 absolute top-6 left-6" />
      <div className="ml-8">
        <p className="text-gray-600 italic mb-6">{testimonial.quote}</p>
        <div className="flex items-center">
          {testimonial.photo ? (
            <img
              src={testimonial.photo}
              alt={testimonial.client_name}
              className="w-12 h-12 rounded-full object-cover mr-4"
            />
          ) : (
            <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mr-4">
              <span className="text-blue-600 font-semibold">
                {testimonial.client_name.charAt(0)}
              </span>
            </div>
          )}
          <div>
            <h4 className="font-semibold text-gray-900">{testimonial.client_name}</h4>
            <p className="text-gray-500 text-sm">{testimonial.company}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;