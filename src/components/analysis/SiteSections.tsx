import React from 'react';

export function SiteSections() {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-lg font-semibold mb-4">Site Sections</h3>
      
      <div className="space-y-6">
        <div>
          <h4 className="text-sm font-medium mb-2">Section at AA'</h4>
          <div className="h-32 bg-gray-100 rounded-lg relative">
            <div className="absolute inset-0 flex items-center justify-center text-gray-500">
              Site Section Visualization
            </div>
          </div>
          <div className="mt-2 grid grid-cols-3 text-sm">
            <p>Elevation: 2188m</p>
            <p className="text-center">Site Level</p>
            <p className="text-right">Elevation: 2441m</p>
          </div>
        </div>
        
        <div>
          <h4 className="text-sm font-medium mb-2">Section at BB'</h4>
          <div className="h-32 bg-gray-100 rounded-lg relative">
            <div className="absolute inset-0 flex items-center justify-center text-gray-500">
              Site Section Visualization
            </div>
          </div>
          <div className="mt-2 grid grid-cols-3 text-sm">
            <p>Elevation: 2325m</p>
            <p className="text-center">Site Level</p>
            <p className="text-right">Elevation: 2475m</p>
          </div>
        </div>
      </div>
    </div>
  );
}