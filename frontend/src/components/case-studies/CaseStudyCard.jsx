import React from "react";
import { motion } from 'framer-motion';
import { Briefcase, Target, Trophy } from 'lucide-react';

const CaseStudyCard = ({ caseStudy }) => {
    return (
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
      >
        <div className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-semibold text-gray-900">{caseStudy.title}</h3>
            <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">
              {caseStudy.industry}
            </span>
          </div>
          
          <div className="space-y-6">
            <div className="flex items-start space-x-3">
              <Briefcase className="w-6 h-6 text-blue-600 mt-1" />
              <div>
                <h4 className="font-medium text-gray-900">Challenge</h4>
                <p className="text-gray-600 mt-1">{caseStudy.challenge}</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <Target className="w-6 h-6 text-blue-600 mt-1" />
              <div>
                <h4 className="font-medium text-gray-900">Strategy</h4>
                <p className="text-gray-600 mt-1">{caseStudy.strategy}</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <Trophy className="w-6 h-6 text-blue-600 mt-1" />
              <div>
                <h4 className="font-medium text-gray-900">Results</h4>
                <p className="text-gray-600 mt-1">{caseStudy.results}</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    );
  };

  export default CaseStudyCard;