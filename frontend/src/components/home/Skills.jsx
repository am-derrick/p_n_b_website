import { TrophyIcon } from 'lucide-react';
import { motion } from 'framer-motion';

const Skills = ({ skills }) => {
    return (
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Expertise & Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills?.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center mb-4">
                  <TrophyIcon className="w-6 h-6 text-blue-600 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900">{skill.name}</h3>
                </div>
                <p className="text-gray-600">{skill.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default Skills;