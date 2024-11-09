import { motion } from 'framer-motion';

const About = ({ personalInfo }) => {
    return (
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="bg-gray-50 py-16"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">About Me</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              {personalInfo?.bio || 
                "As a dedicated sales professional, I specialize in high-ticket closing and building lasting client relationships. My approach combines strategic thinking with genuine connection to deliver exceptional results for both clients and organizations."}
            </p>
          </div>
        </div>
      </motion.div>
    );
  };

  export default About;