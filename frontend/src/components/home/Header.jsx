import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';

const Header = ({ personalInfo }) => {
    return (
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white"
      >
        <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Profile Image */}
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="relative"
            >
              <div className="aspect-w-1 aspect-h-1 rounded-full overflow-hidden shadow-xl">
                <img 
                  src={personalInfo?.photo || "/api/placeholder/400/400"} 
                  alt="Profile" 
                  className="object-cover"
                />
              </div>
            </motion.div>
  
            {/* Header Content */}
            <div className="space-y-6">
              <motion.h1 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-4xl md:text-5xl font-bold"
              >
                {personalInfo?.name || "Sales Professional"}
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-xl md:text-2xl text-blue-100"
              >
                {personalInfo?.title || "Your Partner in Sales Success"}
              </motion.p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-blue-50 transition-colors"
              >
                Get in Touch
              </motion.button>
            </div>
          </div>
        </div>
      </motion.div>
    );
  };

export default Header;