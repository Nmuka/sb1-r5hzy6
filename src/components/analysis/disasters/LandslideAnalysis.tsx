import React from 'react';
import { Mountain, Droplets, AlertTriangle, Building } from 'lucide-react';

export function LandslideAnalysis() {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold flex items-center">
          <Mountain className="h-5 w-5 mr-2 text-orange-500" />
          Landslide Analysis
        </h3>
        <span className="text-sm text-gray-500">Last updated: {new Date().toLocaleDateString()}</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="border rounded-lg p-4">
          <h4 className="text-sm font-medium mb-3">Soil Composition</h4>
          <div className="h-40 bg-gray-50 rounded flex items-center justify-center">
            Soil Layer Visualization
          </div>
          <div className="mt-3 grid grid-cols-3 gap-2 text-sm">
            <div className="text-center">
              <p className="font-medium">Clay</p>
              <p className="text-orange-600">45%</p>
            </div>
            <div className="text-center">
              <p className="font-medium">Sand</p>
              <p className="text-orange-600">30%</p>
            </div>
            <div className="text-center">
              <p className="font-medium">Rock</p>
              <p className="text-orange-600">25%</p>
            </div>
          </div>
        </div>

        <div className="border rounded-lg p-4">
          <h4 className="text-sm font-medium mb-3">Movement Rate</h4>
          <div className="h-40 bg-gray-50 rounded flex items-center justify-center">
            Movement Rate Chart
          </div>
          <div className="mt-3 text-sm text-center">
            <p className="font-medium">Current Movement Rate</p>
            <p className="text-red-600">5.2 cm/day</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-blue-50 p-4 rounded-lg">
          <div className="flex items-center space-x-2">
            <Droplets className="h-5 w-5 text-blue-500" />
            <div>
              <p className="text-sm font-medium">Precipitation Impact</p>
              <p className="text-xl font-bold text-blue-600">High</p>
            </div>
          </div>
        </div>

        <div className="bg-orange-50 p-4 rounded-lg">
          <div className="flex items-center space-x-2">
            <Building className="h-5 w-5 text-orange-500" />
            <div>
              <p className="text-sm font-medium">Infrastructure Risk</p>
              <p className="text-xl font-bold text-orange-600">8 Buildings</p>
            </div>
          </div>
        </div>

        <div className="bg-red-50 p-4 rounded-lg">
          <div className="flex items-center space-x-2">
            <AlertTriangle className="h-5 w-5 text-red-500" />
            <div>
              <p className="text-sm font-medium">Risk Level</p>
              <p className="text-xl font-bold text-red-600">Critical</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}