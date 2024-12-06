import React, { useState } from 'react';
import { Activity, Layers, Users, AlertTriangle } from 'lucide-react';
import { MetricCard } from './shared/MetricCard';
import { EditableMetric } from './shared/EditableMetric';

interface EarthquakeMetrics {
  seismicIntensity: string;
  epicenterDepth: string;
  populationImpact: string;
  criticalInfrastructure: string;
  residentialDamage: string;
}

export function EarthquakeAnalysis() {
  const [metrics, setMetrics] = useState<EarthquakeMetrics>({
    seismicIntensity: '7.2',
    epicenterDepth: '15km',
    populationImpact: '250k',
    criticalInfrastructure: '35%',
    residentialDamage: '28%',
  });

  const updateMetric = (key: keyof EarthquakeMetrics, value: string) => {
    setMetrics(prev => ({ ...prev, [key]: value }));
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold flex items-center">
          <Activity className="h-5 w-5 mr-2 text-red-500" />
          Earthquake Analysis
        </h3>
        <span className="text-sm text-gray-500">Last updated: {new Date().toLocaleDateString()}</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <MetricCard
          icon={AlertTriangle}
          label="Seismic Intensity"
          value={metrics.seismicIntensity}
          bgColor="bg-red-50"
          iconColor="text-red-500"
        />
        <MetricCard
          icon={Layers}
          label="Epicenter Depth"
          value={metrics.epicenterDepth}
          bgColor="bg-orange-50"
          iconColor="text-orange-500"
        />
        <MetricCard
          icon={Users}
          label="Population Impact"
          value={metrics.populationImpact}
          bgColor="bg-blue-50"
          iconColor="text-blue-500"
        />
      </div>

      <div className="space-y-4">
        <div className="border rounded-lg p-4">
          <h4 className="text-sm font-medium mb-3">Aftershock Pattern</h4>
          <div className="h-48 bg-gray-50 rounded flex items-center justify-center">
            <EditableMetric
              label="Pattern Intensity"
              value="Moderate"
              onSave={(value) => console.log('Updated pattern:', value)}
            />
          </div>
        </div>

        <div className="border rounded-lg p-4">
          <h4 className="text-sm font-medium mb-3">Structural Damage Assessment</h4>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-3 bg-gray-50 rounded">
              <EditableMetric
                label="Critical Infrastructure"
                value={metrics.criticalInfrastructure}
                onSave={(value) => updateMetric('criticalInfrastructure', value)}
              />
            </div>
            <div className="p-3 bg-gray-50 rounded">
              <EditableMetric
                label="Residential Buildings"
                value={metrics.residentialDamage}
                onSave={(value) => updateMetric('residentialDamage', value)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}