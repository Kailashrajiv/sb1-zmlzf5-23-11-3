import React from 'react';

export default function RBIReference() {
  return (
    <div className="premium-card p-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">RBI Reference Rate</h2>
        <p className="text-sm text-gray-500 dark:text-gray-400">Source: ceicdata.com</p>
      </div>
      
      <div className="flex items-center gap-2 mb-4">
        <span className="text-green-500 text-2xl">$</span>
        <span className="text-2xl text-gray-700 dark:text-gray-300">1</span>
        <span className="text-2xl text-gray-700 dark:text-gray-300">=</span>
        <span className="text-blue-500 text-2xl">₹</span>
        <span className="font-mono text-[64px] font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">84.4063</span>
      </div>

      <div className="text-gray-500 dark:text-gray-400 mb-4">15 Nov 2024</div>

      <div className="flex items-center gap-2">
        <span className="text-gray-500 dark:text-gray-400">Last updated: 12:30 PM IST</span>
        <span className="px-2 py-0.5 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium">
          Daily
        </span>
      </div>
    </div>
  );
}