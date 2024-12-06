import React, { useState } from 'react';
import { Building2, Users, DollarSign } from 'lucide-react';
import { EditableMetric } from '../shared/EditableMetric';

interface ImpactMetrics {
  infrastructureDamage: string;
  populationAffected: string;
  economicLoss: string;
}

interface ImpactAssessmentProps {
  disasterType: string;
}

export function ImpactAssessment({ disasterType }: ImpactAssessmentProps) {
  const [metrics, setMetrics] = useState<ImpactMetrics>({
    infrastructureDamage: 'Severe',
    populationAffected: '15,000',
    economicLoss: '$25M'
  });

  const updateMetric = (key: keyof ImpactMetrics, value: string) => {
    setMetrics(prev => ({ ...prev, [key]: value }));
  };

  return (
    <div className="border rounded-lg p-4">
      <h3 className="text-lg font-semibold mb-4">Impact Assessment</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-3 bg-gray-50 rounded-lg">
          <div className="flex items-center space-x-2 mb-2">
            <Building2 className="h-5 w-5 text-purple-500" />
            <h4 className="font-medium">Infrastructure</h4>
          </div>
          <EditableMetric
            label="Damage Level"
            value={metrics.infrastructureDamage}
            onSave={(value) => updateMetric('infrastructureDamage', value)}
          />
        </div>

        <div className="p-3 bg-gray-50 rounded-lg">
          <div className="flex items-center space-x-2 mb-2">
            <Users className="h-5 w-5 text-blue-500" />
            <h4 className="font-medium">Population</h4>
          </div>
          <EditableMetric
            label="Affected People"
            value={metrics.populationAffected}
            onSave={(value) => updateMetric('populationAffected', value)}
          />
        </div>

        <div className="p-3 bg-gray-50 rounded-lg">
          <div className="flex items-center space-x-2 mb-2">
            <DollarSign className="h-5 w-5 text-green-500" />
            <h4 className="font-medium">Economic</h4>
          </div>
          <EditableMetric
            label="Estimated Loss"
            value={metrics.economicLoss}
            onSave={(value) => updateMetric('economicLoss', value)}
          />
        </div>
      </div>
    </div>
  );
}