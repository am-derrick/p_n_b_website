import { motion } from 'framer-motion';
import { ChartBarIcon, BriefcaseIcon, GroupIcon } from 'lucide-react';

const Metrics = ({ personalInfo }) => {
    const metrics = [
      { 
        icon: <BriefcaseIcon className="w-8 h-8" />,
        value: personalInfo?.years_experience || "10+",
        label: "Years Experience" 
      },
      { 
        icon: <ChartBarIcon className="w-8 h-8" />,
        value: personalInfo?.revenue_closed ? `$${personalInfo.revenue_closed}M+` : "$50M+",
        label: "Revenue Closed" 
      },
      { 
        icon: <GroupIcon className="w-8 h-8" />,
        value: personalInfo?.clients_served || "100+",
        label: "Clients Served" 
      },
    ];
  
    return (
      <div className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {metrics.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="text-center p-6 rounded-xl bg-gray-50 hover:shadow-lg transition-shadow"
              >
                <div className="flex justify-center text-blue-600 mb-4">
                  {metric.icon}
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  {metric.value}
                </div>
                <div className="text-gray-600">
                  {metric.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  export default Metrics;