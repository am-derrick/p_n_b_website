import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CaseStudyCard from './CaseStudyCard';
import LoadingSpinner from '../common/LoadingSpinner';

const CaseStudyList = () => {
  const [caseStudies, setCaseStudies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCaseStudies = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/case-studies/');
        setCaseStudies(response.data);
      } catch (error) {
        console.error('Error fetching case studies:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCaseStudies();
  }, []);

  if (loading) return <LoadingSpinner />;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {caseStudies.map((caseStudy) => (
        <CaseStudyCard key={caseStudy.id} caseStudy={caseStudy} />
      ))}
    </div>
  );
};

export default CaseStudyList;