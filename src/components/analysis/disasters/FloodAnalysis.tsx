import React, { useState } from 'react';
import { Droplets, Map, Building, DollarSign } from 'lucide-react';
import { MetricCard } from './shared/MetricCard';
import { EditableMetric } from './shared/EditableMetric';

interface FloodMetrics {
  currentLevel: string;
  peakLevel: string;
  criticalLevel: string;
  affectedArea: string;
  evacuationZones: string;
  infrastructureImpact: string;
  economicImpact: string;
}

export function FloodAnalysis() {
  const [metrics, setMetrics] = useState<FloodMetrics>({
    currentLevel: '2.5m',
    peakLevel: '4.8m',
    criticalLevel: '5.0m',
    affectedArea: '125 km²',
    evacuationZones: '12',
    infrastructureImpact: '45%',
    economicImpact: '$2.5M',
  });

  const updateMetric = (key: keyof FloodMetrics, value: string) => {
    setMetrics(prev => ({ ...prev, [key]: value }));
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold flex items-center">
          <Droplets className="h-5 w-5 mr-2 text-blue-500" />
          Flood Analysis
        </h3>
        <span className="text-sm text-gray-500">Last updated: {new Date().toLocaleDateString()}</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="border rounded-lg p-4">
          <h4 className="text-sm font-medium mb-3">Water Level Measurements</h4>
          <div className="h-40 bg-gray-50 rounded flex items-center justify-center">
            Water Level Chart
          </div>
          <div className="mt-3 grid grid-cols-3 gap-2 text-sm">
            <EditableMetric
              label="Current"
              value={metrics.currentLevel}
              onSave={(value) => updateMetric('currentLevel', value)}
            />
            <EditableMetric
              label="Peak"
              value={metrics.peakLevel}
              onSave={(value) => updateMetric('peakLevel', value)}
            />
            <EditableMetric
              label="Critical"
              value={metrics.criticalLevel}
              onSave={(value) => updateMetric('criticalLevel', value)}
            />
          </div>
        </div>

        <div className="border rounded-lg p-4">
          <h4 className="text-sm font-medium mb-3">Affected Area</h4>
          <div className="h-40 bg-gray-50 rounded flex items-center justify-center">
            Flood Zone Map
          </div>
          <div className="mt-3">
            <EditableMetric
              label="Total Affected Area"
              value={metrics.affectedArea}
              onSave={(value) => updateMetric('affectedArea', value)}
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <MetricCard
          icon={Map}
          label="Evacuation Zones"
          value={metrics.evacuationZones}
          bgColor="bg-blue-50"
          iconColor="text-blue-500"
        />
        <MetricCard
          icon={Building}
          label="Infrastructure Impact"
          value={metrics.infrastructureImpact}
          bgColor="bg-orange-50"
          iconColor="text-orange-500"
        />
        <MetricCard
          icon={DollarSign}
          label="Economic Impact"
          value={metrics.economicImpact}
          bgColor="bg-green-50"
          iconColor="text-green-500"
        />
      </div>
    </div>
  );
}