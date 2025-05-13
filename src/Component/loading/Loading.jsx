import React from 'react'

const Loading = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-900 text-white">
      <div className="flex flex-col items-center space-y-4">
        <div className="relative w-16 h-16">
          <div className="absolute inset-0 rounded-full border-4 border-t-blue-500 border-r-transparent border-b-transparent border-l-transparent animate-spin"></div>
          <div className="absolute inset-3 bg-gray-900 rounded-full"></div>
        </div>
        <p className="text-lg font-semibold tracking-wider animate-pulse">
          Loading, please wait...
        </p>
      </div>
    </div>
  )
}

export default Loading