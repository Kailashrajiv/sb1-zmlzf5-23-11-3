import React from 'react';
import { Loader2 } from 'lucide-react';
import { useMCXPrice } from '../hooks/useMCXPrice';
import { format } from 'date-fns';

export default function MCXAluminium() {
  const { priceData, error, loading } = useMCXPrice();

  return (
    <div className="premium-card p-6">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
            MCX Aluminium
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Source: moneycontrol.com
          </p>
        </div>
        <span className="text-gray-500 dark:text-gray-400">Future Nov 2024</span>
      </div>

      <div className="mb-4">
        {loading ? (
          <div className="flex items-center gap-2 text-gray-500">
            <Loader2 className="w-6 h-6 animate-spin" />
            <span>Loading price...</span>
          </div>
        ) : error ? (
          <div className="text-red-500">{error}</div>
        ) : (
          <div>
            <div className="flex items-baseline gap-2">
              <span className="font-mono text-[56px] font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                ₹246.30
              </span>
              <span className="text-gray-500 dark:text-gray-400">per kg</span>
            </div>
            <div className="text-xl text-green-500">
              +0.50%
            </div>
          </div>
        )}
      </div>

      {priceData && (
        <div className="flex items-center gap-2">
          <span className="text-gray-500 dark:text-gray-400">
            Last updated: {format(new Date(priceData.lastUpdated), 'hh:mm:ss a')}
          </span>
          <span className="px-2 py-0.5 bg-green-100 text-green-800 rounded-full text-sm font-medium">
            Live
          </span>
        </div>
      )}
    </div>
  );
}