import React from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, Users, UserCheck, PackageX, CreditCard } from 'lucide-react';

const navLinkClasses = ({ isActive }) =>
  `flex items-center px-4 py-2 mt-2 text-gray-300 hover:bg-gray-700 rounded-lg ${isActive ? 'bg-gray-700 text-white' : ''}`;

const Sidebar = () => {
  return (
    <aside className="w-64 p-4 text-gray-100 bg-gray-800 dark:bg-gray-950">
      <div className="text-2xl font-bold">Admin Panel</div>
      <nav className="mt-8">
        <NavLink to="/dashboard" className={navLinkClasses}>
          <LayoutDashboard className="w-5 h-5" />
          <span className="mx-4">Dashboard</span>
        </NavLink>
        <NavLink to="/seller-management" className={navLinkClasses}>
          <Users className="w-5 h-5" />
          <span className="mx-4">Consumer & Seller</span>
        </NavLink>
        <NavLink to="/seller-approval" className={navLinkClasses}>
          <UserCheck className="w-5 h-5" />
          <span className="mx-4">Seller Approval</span>
        </NavLink>
        <NavLink to="/product-flagging" className={navLinkClasses}>
          <PackageX className="w-5 h-5" />
          <span className="mx-4">Product Flagging</span>
        </NavLink>
        <NavLink to="/payment-management" className={navLinkClasses}>
          <CreditCard className="w-5 h-5" />
          <span className="mx-4">Payment Management</span>
        </NavLink>
      </nav>
    </aside>
  );
};

export default Sidebar;
