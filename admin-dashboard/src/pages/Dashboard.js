import React from 'react';
import StatCard from '../components/StatCard';
import { Users, UserCheck, PackageX, DollarSign } from 'lucide-react';

const Dashboard = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Dashboard</h1>

      <div className="grid grid-cols-1 gap-4 mt-4 md:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="Total Sellers"
          value="1,234"
          icon={<Users className="w-6 h-6" />}
        />
        <StatCard
          title="Pending Approvals"
          value="56"
          icon={<UserCheck className="w-6 h-6" />}
        />
        <StatCard
          title="Flagged Products"
          value="12"
          icon={<PackageX className="w-6 h-6" />}
        />
        <StatCard
          title="Total Revenue"
          value="$54,382"
          icon={<DollarSign className="w-6 h-6" />}
        />
      </div>

      <div className="mt-8">
        <div className="p-4 bg-white rounded-lg shadow-md dark:bg-gray-800">
          <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100">Sales Analytics</h2>
          <div className="mt-4 h-64 bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center">
            <p className="text-gray-500">Chart will be displayed here</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
