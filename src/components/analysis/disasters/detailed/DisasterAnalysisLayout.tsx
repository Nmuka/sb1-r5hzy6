import React, { useState } from 'react';
import { Activity, Droplets, Mountain, LandPlot } from 'lucide-react';
import { DisasterTimeline } from './DisasterTimeline';
import { ImpactAssessment } from './ImpactAssessment';
import { RiskPrediction } from './RiskPrediction';
import { MitigationStrategies } from './MitigationStrategies';

type DisasterType = 'earthquake' | 'flood' | 'avalanche' | 'landslide';

interface DisasterTab {
  id: DisasterType;
  label: string;
  icon: React.ReactNode;
}

interface DisasterAnalysisLayoutProps {
  initialDisaster: DisasterType;
}

const disasterTabs: DisasterTab[] = [
  { id: 'earthquake', label: 'Earthquake', icon: <Activity className="h-5 w-5" /> },
  { id: 'flood', label: 'Flood', icon: <Droplets className="h-5 w-5" /> },
  { id: 'avalanche', label: 'Avalanche', icon: <Mountain className="h-5 w-5" /> },
  { id: 'landslide', label: 'Landslide', icon: <LandPlot className="h-5 w-5" /> },
];

export function DisasterAnalysisLayout({ initialDisaster }: DisasterAnalysisLayoutProps) {
  const [activeDisaster, setActiveDisaster] = useState<DisasterType>(initialDisaster);

  return (
    <div className="bg-white rounded-lg shadow-md">
      <div className="border-b">
        <nav className="flex space-x-4 p-4" aria-label="Disaster Analysis Tabs">
          {disasterTabs.map(({ id, label, icon }) => (
            <button
              key={id}
              onClick={() => setActiveDisaster(id)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-md transition-colors ${
                activeDisaster === id
                  ? 'bg-purple-100 text-purple-700'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              {icon}
              <span>{label}</span>
            </button>
          ))}
        </nav>
      </div>

      <div className="p-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <DisasterTimeline disasterType={activeDisaster} />
          <ImpactAssessment disasterType={activeDisaster} />
        </div>
        
        <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
          <RiskPrediction disasterType={activeDisaster} />
          <MitigationStrategies disasterType={activeDisaster} />
        </div>
      </div>
    </div>
  );
}