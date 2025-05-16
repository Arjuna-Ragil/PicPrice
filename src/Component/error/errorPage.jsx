import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ErrorPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timeout = setTimeout(() => {
      navigate('/');
    }, 2000);

    return () => clearTimeout(timeout);
  }, [navigate]);

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-[#161E36] text-white font-poppins">
      <div className="relative w-20 h-20 mb-6">
        <div className="absolute inset-0 rounded-full border-4 border-t-blue-500 border-r-transparent border-b-transparent border-l-transparent animate-spin"></div>
        <div className="absolute inset-3 bg-gray-900 rounded-full"></div>
      </div>
      <h1 className="text-3xl font-semibold mb-2">Oops! Something went wrong</h1>
      <p className="text-sm text-gray-400">Redirecting you back to safety...</p>
    </div>
  );
};

export default ErrorPage;