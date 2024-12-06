import React from 'react';
import { Snowflake, Mountain, Wind, AlertTriangle } from 'lucide-react';

export function AvalancheAnalysis() {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold flex items-center">
          <Snowflake className="h-5 w-5 mr-2 text-blue-500" />
          Avalanche Analysis
        </h3>
        <span className="text-sm text-gray-500">Last updated: {new Date().toLocaleDateString()}</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="border rounded-lg p-4">
          <h4 className="text-sm font-medium mb-3">Snow Pack Conditions</h4>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-sm">Depth</span>
              <span className="font-medium">2.5m</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm">Density</span>
              <span className="font-medium">350 kg/m³</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm">Temperature</span>
              <span className="font-medium">-5°C</span>
            </div>
          </div>
        </div>

        <div className="border rounded-lg p-4">
          <h4 className="text-sm font-medium mb-3">Slope Analysis</h4>
          <div className="h-40 bg-gray-50 rounded flex items-center justify-center">
            Slope Visualization
          </div>
          <div className="mt-3 text-sm text-center">
            <p className="font-medium">Average Slope Angle</p>
            <p className="text-blue-600">35°</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-blue-50 p-4 rounded-lg">
          <div className="flex items-center space-x-2">
            <Wind className="h-5 w-5 text-blue-500" />
            <div>
              <p className="text-sm font-medium">Weather Conditions</p>
              <p className="text-xl font-bold text-blue-600">High Wind</p>
            </div>
          </div>
        </div>

        <div className="bg-orange-50 p-4 rounded-lg">
          <div className="flex items-center space-x-2">
            <Mountain className="h-5 w-5 text-orange-500" />
            <div>
              <p className="text-sm font-medium">Path Length</p>
              <p className="text-xl font-bold text-orange-600">1.2 km</p>
            </div>
          </div>
        </div>

        <div className="bg-red-50 p-4 rounded-lg">
          <div className="flex items-center space-x-2">
            <AlertTriangle className="h-5 w-5 text-red-500" />
            <div>
              <p className="text-sm font-medium">Risk Level</p>
              <p className="text-xl font-bold text-red-600">High</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 border rounded-lg p-4">
        <h4 className="text-sm font-medium mb-3">Trigger Factors</h4>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-3 bg-gray-50 rounded">
            <p className="text-sm font-medium">Recent Snowfall</p>
            <p className="text-lg text-blue-600">45cm</p>
          </div>
          <div className="p-3 bg-gray-50 rounded">
            <p className="text-sm font-medium">Wind Speed</p>
            <p className="text-lg text-blue-600">65 km/h</p>
          </div>
          <div className="p-3 bg-gray-50 rounded">
            <p className="text-sm font-medium">Temperature Change</p>
            <p className="text-lg text-red-600">+8°C</p>
          </div>
          <div className="p-3 bg-gray-50 rounded">
            <p className="text-sm font-medium">Layer Bonding</p>
            <p className="text-lg text-orange-600">Weak</p>
          </div>
        </div>
      </div>
    </div>
  );
}