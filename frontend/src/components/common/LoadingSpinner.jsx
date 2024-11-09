import React from 'react';
import { Loader2 } from 'lucide-react';

const LoadingSpinner = () => {
  return (
    <div className="flex justify-center items-center h-64">
      <Loader2 className="w-8 h-8 text-blue-600 animate-spin" />
    </div>
  );
};

export default LoadingSpinner;