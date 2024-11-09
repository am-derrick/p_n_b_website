// pages/HomePage.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Header from '../components/home/Header';
import Metrics from '../components/home/Metrics';
import About from '../components/home/About';
import Skills from '../components/home/Skills';
import { ArrowRight, Star } from 'lucide-react';

const HomePage = () => {
  // Animation variants for staggered animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen">
      {/* Main content sections */}
      <Header />
      <Metrics />
      <About />
      <Skills />

      {/* Featured Case Studies Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-12"
          >
            <div className="text-center">
              <motion.h2 
                variants={childVariants}
                className="text-3xl font-bold text-gray-900 mb-4"
              >
                Featured Success Stories
              </motion.h2>
              <motion.p 
                variants={childVariants}
                className="text-lg text-gray-600 max-w-2xl mx-auto"
              >
                Discover how we've helped businesses transform their sales performance 
                and achieve remarkable growth.
              </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* This would typically map over featured case studies */}
              <motion.div
                variants={childVariants}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="p-6">
                  <div className="text-blue-600 mb-4">
                    <Star className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Tech Startup Growth
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Helped a SaaS startup increase sales by 300% in 6 months through 
                    strategic sales process optimization.
                  </p>
                  <Link 
                    to="/case-studies" 
                    className="inline-flex items-center text-blue-600 hover:text-blue-700"
                  >
                    Read more <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </motion.div>

              <motion.div
                variants={childVariants}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="p-6">
                  <div className="text-blue-600 mb-4">
                    <Star className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Enterprise Deal Closure
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Successfully closed a $2M enterprise deal through strategic 
                    negotiation and relationship building.
                  </p>
                  <Link 
                    to="/case-studies" 
                    className="inline-flex items-center text-blue-600 hover:text-blue-700"
                  >
                    Read more <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </motion.div>

              <motion.div
                variants={childVariants}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="p-6">
                  <div className="text-blue-600 mb-4">
                    <Star className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Sales Team Training
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Developed and implemented a training program that improved team 
                    performance by 150%.
                  </p>
                  <Link 
                    to="/case-studies" 
                    className="inline-flex items-center text-blue-600 hover:text-blue-700"
                  >
                    Read more <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </motion.div>
            </div>

            <motion.div 
              variants={childVariants}
              className="text-center"
            >
              <Link
                to="/case-studies"
                className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10 transition-colors"
              >
                View All Case Studies
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Featured Testimonials Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-12"
          >
            <div className="text-center">
              <motion.h2 
                variants={childVariants}
                className="text-3xl font-bold text-gray-900 mb-4"
              >
                What Clients Say
              </motion.h2>
              <motion.p 
                variants={childVariants}
                className="text-lg text-gray-600 max-w-2xl mx-auto"
              >
                Hear directly from our clients about their experience working with us.
              </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Featured testimonials */}
              <motion.div
                variants={childVariants}
                className="bg-gray-50 rounded-xl p-6"
              >
                <div className="space-y-4">
                  <p className="text-gray-600 italic">
                    "Working with this sales professional transformed our business. 
                    The strategic insights and dedication to our success were invaluable."
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                      <span className="text-blue-600 font-semibold">J</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">John Smith</h4>
                      <p className="text-gray-500">CEO, Tech Innovations</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                variants={childVariants}
                className="bg-gray-50 rounded-xl p-6"
              >
                <div className="space-y-4">
                  <p className="text-gray-600 italic">
                    "The results exceeded our expectations. Our sales team's performance 
                    improved dramatically after implementing the strategies."
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                      <span className="text-blue-600 font-semibold">S</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Sarah Johnson</h4>
                      <p className="text-gray-500">Sales Director, Growth Corp</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            <motion.div 
              variants={childVariants}
              className="text-center"
            >
              <Link
                to="/testimonials"
                className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-blue-100 hover:bg-blue-200 md:py-4 md:text-lg md:px-10 transition-colors"
              >
                View All Testimonials
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center text-white space-y-8"
          >
            <h2 className="text-3xl font-bold">Ready to Transform Your Sales?</h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Let's discuss how we can help you achieve your sales goals and drive 
              sustainable growth for your business.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-3 border-2 border-white text-base font-medium rounded-md text-white hover:bg-white hover:text-blue-600 md:py-4 md:text-lg md:px-10 transition-colors"
            >
              Get Started
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;