import React, { useState } from 'react';
import { TrendingUp, AlertTriangle } from 'lucide-react';
import { EditableMetric } from '../shared/EditableMetric';

interface RiskMetrics {
  probabilityScore: string;
  severityLevel: string;
  timeframe: string;
}

interface RiskPredictionProps {
  disasterType: string;
}

export function RiskPrediction({ disasterType }: RiskPredictionProps) {
  const [metrics, setMetrics] = useState<RiskMetrics>({
    probabilityScore: '75%',
    severityLevel: 'High',
    timeframe: '6 months'
  });

  const updateMetric = (key: keyof RiskMetrics, value: string) => {
    setMetrics(prev => ({ ...prev, [key]: value }));
  };

  return (
    <div className="border rounded-lg p-4">
      <div className="flex items-center space-x-2 mb-4">
        <TrendingUp className="h-5 w-5 text-purple-500" />
        <h3 className="text-lg font-semibold">Risk Prediction</h3>
      </div>

      <div className="space-y-4">
        <div className="p-3 bg-gray-50 rounded-lg">
          <EditableMetric
            label="Probability Score"
            value={metrics.probabilityScore}
            onSave={(value) => updateMetric('probabilityScore', value)}
          />
        </div>

        <div className="p-3 bg-gray-50 rounded-lg">
          <EditableMetric
            label="Severity Level"
            value={metrics.severityLevel}
            onSave={(value) => updateMetric('severityLevel', value)}
          />
        </div>

        <div className="p-3 bg-gray-50 rounded-lg">
          <EditableMetric
            label="Prediction Timeframe"
            value={metrics.timeframe}
            onSave={(value) => updateMetric('timeframe', value)}
          />
        </div>

        <div className="flex items-center space-x-2 mt-4 p-3 bg-yellow-50 rounded-lg">
          <AlertTriangle className="h-5 w-5 text-yellow-500" />
          <p className="text-sm text-yellow-700">
            Risk level indicates potential for significant impact within the prediction timeframe.
          </p>
        </div>
      </div>
    </div>
  );
}