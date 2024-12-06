import React from 'react';
import { AlertTriangle, CheckCircle, BarChart2 } from 'lucide-react';
import type { RiskMetrics } from '../../types/risk';

interface RiskOverviewProps {
  metrics: RiskMetrics;
}

export function RiskOverview({ metrics }: RiskOverviewProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold">Risk Overview</h2>
        <div className="flex items-center space-x-2">
          <span className="text-sm text-gray-500">Last updated: {new Date().toLocaleDateString()}</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-red-50 rounded-lg p-4">
          <div className="flex items-center space-x-3">
            <AlertTriangle className="h-8 w-8 text-red-500" />
            <div>
              <p className="text-sm text-gray-600">High Priority Risks</p>
              <p className="text-2xl font-bold text-red-600">{metrics.highRisks}</p>
            </div>
          </div>
        </div>

        <div className="bg-green-50 rounded-lg p-4">
          <div className="flex items-center space-x-3">
            <CheckCircle className="h-8 w-8 text-green-500" />
            <div>
              <p className="text-sm text-gray-600">Mitigated Risks</p>
              <p className="text-2xl font-bold text-green-600">{metrics.mitigatedRisks}</p>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 rounded-lg p-4">
          <div className="flex items-center space-x-3">
            <BarChart2 className="h-8 w-8 text-blue-500" />
            <div>
              <p className="text-sm text-gray-600">Total Active Risks</p>
              <p className="text-2xl font-bold text-blue-600">{metrics.totalRisks}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6">
        <h3 className="text-lg font-medium mb-4">Risks by Category</h3>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {Object.entries(metrics.risksByCategory).map(([category, count]) => (
            <div key={category} className="bg-gray-50 rounded p-3">
              <p className="text-sm text-gray-600 capitalize">{category}</p>
              <p className="text-lg font-semibold">{count}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}