import { React, useState, useEffect } from "react";

const Appearance = () => {
    const [isDarkMode, setIsDarkMode] = useState(() => {
        const storedTheme = localStorage.getItem('theme');
        return storedTheme === 'dark';
      });
      
      useEffect(() => {
        if (isDarkMode) {
          document.documentElement.classList.add('dark');
          localStorage.setItem('theme', 'dark');
        } else {
          document.documentElement.classList.remove('dark');
          localStorage.setItem('theme', 'light');
        }
      }, [isDarkMode]);
      
      const handleToggleTheme = () => {
        setIsDarkMode(prev => !prev);
      };

        return (
          <div
          className="w-full h-full px-5 pt-3">
            <h2 className="text-2xl font-semibold mb-6 dark:text-white">Appearance Settings</h2>

            <div className="flex items-center justify-between w-full border border-gray-300 dark:border-gray-600 rounded-lg p-4 bg-white dark:bg-gray-800 shadow-sm">
              
              <div>
                <p className="text-sm font-medium text-gray-700 dark:text-gray-200">Theme Mode</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">Switch between light and dark mode</p>
              </div>
              
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="sr-only peer"
                  checked={isDarkMode}
                  onChange={handleToggleTheme}
                />
                <div className="w-11 h-6 bg-gray-300 dark:bg-gray-600 peer-checked:bg-blue-600 rounded-full transition-all duration-300"></div>
                <div className="absolute left-0.5 top-0.5 bg-white w-5 h-5 rounded-full transition-transform peer-checked:translate-x-full"></div>
              </label>
            </div>
          </div>
       );
}

export default Appearance