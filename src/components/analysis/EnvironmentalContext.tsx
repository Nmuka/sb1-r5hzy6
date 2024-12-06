import React from 'react';
import { Sun, Wind, Droplets, Thermometer } from 'lucide-react';

export function EnvironmentalContext() {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-lg font-semibold mb-4">Ecological Context</h3>
      
      <div className="grid grid-cols-2 gap-4">
        <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
          <Sun className="h-5 w-5 text-yellow-500" />
          <div>
            <p className="text-sm font-medium">Sun Path</p>
            <p className="text-xs text-gray-600">East to West</p>
          </div>
        </div>
        
        <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
          <Wind className="h-5 w-5 text-blue-500" />
          <div>
            <p className="text-sm font-medium">Wind Direction</p>
            <p className="text-xs text-gray-600">West to East</p>
          </div>
        </div>
        
        <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
          <Droplets className="h-5 w-5 text-blue-500" />
          <div>
            <p className="text-sm font-medium">Average Rainfall</p>
            <p className="text-xs text-gray-600">1,150 mm</p>
          </div>
        </div>
        
        <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
          <Thermometer className="h-5 w-5 text-red-500" />
          <div>
            <p className="text-sm font-medium">Temperature</p>
            <p className="text-xs text-gray-600">25°C average</p>
          </div>
        </div>
      </div>
    </div>
  );
}