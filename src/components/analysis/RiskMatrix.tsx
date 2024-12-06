import React from 'react';
import type { RiskAssessment } from '../../types';

interface RiskMatrixProps {
  risks: RiskAssessment[];
}

export function RiskMatrix({ risks }: RiskMatrixProps) {
  const getBackgroundColor = (severity: RiskAssessment['severity']) => {
    switch (severity) {
      case 'high':
        return 'bg-red-100 border-red-500';
      case 'medium':
        return 'bg-yellow-100 border-yellow-500';
      case 'low':
        return 'bg-green-100 border-green-500';
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold mb-6">Risk Assessment Matrix</h2>
      
      <div className="grid gap-4">
        {risks.map((risk, index) => (
          <div
            key={index}
            className={`p-4 border-l-4 rounded ${getBackgroundColor(risk.severity)}`}
          >
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-medium">{risk.category}</h3>
                <p className="text-sm text-gray-600 mt-1">{risk.description}</p>
              </div>
              <span className={`px-2 py-1 rounded text-sm ${
                risk.severity === 'high' ? 'bg-red-500 text-white' :
                risk.severity === 'medium' ? 'bg-yellow-500 text-white' :
                'bg-green-500 text-white'
              }`}>
                {risk.severity.toUpperCase()}
              </span>
            </div>
            
            <div className="mt-4">
              <h4 className="text-sm font-medium mb-2">Mitigation Steps:</h4>
              <ul className="list-disc list-inside text-sm text-gray-600">
                {risk.mitigationSteps.map((step, stepIndex) => (
                  <li key={stepIndex}>{step}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}