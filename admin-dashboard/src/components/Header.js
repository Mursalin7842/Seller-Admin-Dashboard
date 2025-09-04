import React from 'react';
import useAuth from '../hooks/useAuth';
import { Bell, Sun, Moon } from 'lucide-react';

const Header = () => {
  const { user, logout } = useAuth();
  const [isDark, setIsDark] = React.useState(false);

  const toggleTheme = () => {
    setIsDark(!isDark);
    if (!isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };


  return (
    <header className="flex items-center justify-between h-16 px-4 bg-white border-b dark:bg-gray-800 dark:border-gray-700">
      <div>
        {/* Page title or breadcrumbs can go here */}
      </div>
      <div className="flex items-center space-x-4">
        <button onClick={toggleTheme} className="p-2 text-gray-500 rounded-full hover:bg-gray-200 dark:text-gray-400 dark:hover:bg-gray-700">
          {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
        </button>
        <button className="p-2 text-gray-500 rounded-full hover:bg-gray-200 dark:text-gray-400 dark:hover:bg-gray-700">
          <Bell className="w-5 h-5" />
        </button>
        <div className="flex items-center">
          <span className="mr-2 text-sm font-medium text-gray-700 dark:text-gray-200">{user?.name || user?.preferred_username}</span>
          <button onClick={() => logout()} className="px-4 py-2 text-sm text-white bg-blue-600 rounded-md hover:bg-blue-700">
            Logout
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
