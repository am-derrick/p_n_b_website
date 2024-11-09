import React from 'react';
import CaseStudyList from '../components/case-studies/CaseStudyList';

const CaseStudiesPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Success Stories</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore how I've helped businesses achieve their sales goals through strategic partnerships and innovative solutions.
          </p>
        </div>
        <CaseStudyList />
      </div>
    </div>
  );
};

export default CaseStudiesPage;