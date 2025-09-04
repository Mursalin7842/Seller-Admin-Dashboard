import React from 'react';

const StatCard = ({ title, value, icon }) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md dark:bg-gray-800">
      <div className="flex items-center">
        <div className="flex items-center justify-center w-12 h-12 text-white bg-blue-500 rounded-full">
          {icon}
        </div>
        <div className="ml-4">
          <p className="text-sm font-medium text-gray-500 dark:text-gray-400">{title}</p>
          <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">{value}</p>
        </div>
      </div>
    </div>
  );
};

export default StatCard;
