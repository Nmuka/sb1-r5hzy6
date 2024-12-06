import React from 'react';
import { Leaf, Fish, Bird } from 'lucide-react';

export function BiodiversityAnalysis() {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-lg font-semibold mb-4">Biodiversity Analysis</h3>
      
      <div className="grid grid-cols-2 gap-6">
        <div>
          <h4 className="text-sm font-medium mb-3 flex items-center">
            <Leaf className="h-4 w-4 mr-2 text-green-500" />
            Flora
          </h4>
          <div className="grid grid-cols-3 gap-3">
            {['Malabar Nut', 'Apple of Sodom', 'Desert Needle-Grass'].map((plant) => (
              <div key={plant} className="text-center">
                <div className="h-20 bg-gray-100 rounded-lg mb-2"></div>
                <p className="text-xs">{plant}</p>
              </div>
            ))}
          </div>
        </div>
        
        <div>
          <h4 className="text-sm font-medium mb-3 flex items-center">
            <Bird className="h-4 w-4 mr-2 text-blue-500" />
            Fauna
          </h4>
          <div className="grid grid-cols-3 gap-3">
            {['Monkeys', 'Fishes', 'Ducks'].map((animal) => (
              <div key={animal} className="text-center">
                <div className="h-20 bg-gray-100 rounded-lg mb-2"></div>
                <p className="text-xs">{animal}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}