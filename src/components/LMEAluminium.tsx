import React from 'react';

export default function LMEAluminium() {
  return (
    <div className="premium-card p-6">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">LME Aluminium</h2>
          <p className="text-sm text-gray-500 dark:text-gray-400">Source: Investing.com</p>
        </div>
        <div className="flex gap-2">
          <button className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-900/50 dark:text-blue-400">
            $
          </button>
          <button className="w-8 h-8 flex items-center justify-center rounded-full text-gray-400">
            ₹
          </button>
        </div>
      </div>

      <div>
        <div className="flex items-baseline gap-2">
          <span className="font-mono text-[64px] font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">$2639.50</span>
          <span className="text-xl text-gray-500 dark:text-gray-400">per MT</span>
        </div>
        <div className="text-2xl text-red-500 mb-6">-16.00 (-0.63%)</div>
      </div>

      <div className="pt-6 border-t border-gray-200 dark:border-gray-700">
        <div className="flex items-baseline gap-2">
          <span className="font-mono text-[64px] font-bold bg-gradient-to-r from-green-500 to-green-600 bg-clip-text text-transparent">₹232.70</span>
          <span className="text-xl text-gray-500 dark:text-gray-400">per kg</span>
        </div>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
          Includes logistics premium (₹3/kg) & duty factor (8.25%)
        </p>
      </div>

      <div className="flex items-center gap-2 mt-4">
        <span className="text-gray-500 dark:text-gray-400">Last updated: Live</span>
        <span className="px-2 py-0.5 bg-green-100 text-green-800 rounded-full text-sm font-medium">
          Live
        </span>
      </div>
    </div>
  );
}