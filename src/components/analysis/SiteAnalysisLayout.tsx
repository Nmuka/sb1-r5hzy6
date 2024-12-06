import React, { useState } from 'react';
import { useSite } from '../../context/SiteContext';
import { SiteOverview } from './SiteOverview';
import { SiteAnalysisMap } from './SiteAnalysisMap';
import { EnvironmentalContext } from './EnvironmentalContext';
import { SiteSections } from './SiteSections';
import { BiodiversityAnalysis } from './BiodiversityAnalysis';
import { RiskAssessmentForm } from './RiskAssessmentForm';
import { RiskMatrix } from './RiskMatrix';
import { RiskOverview } from './RiskOverview';
import { EarthquakeAnalysis } from './disasters/EarthquakeAnalysis';
import { FloodAnalysis } from './disasters/FloodAnalysis';
import { AvalancheAnalysis } from './disasters/AvalancheAnalysis';
import { LandslideAnalysis } from './disasters/LandslideAnalysis';
import { DisasterAnalysisLayout } from './disasters/detailed/DisasterAnalysisLayout';

type DisasterTab = 'earthquake' | 'flood' | 'avalanche' | 'landslide';

export function SiteAnalysisLayout() {
  const { state } = useSite();
  const [activeDisaster, setActiveDisaster] = useState<DisasterTab>('earthquake');
  const [showDetailedAnalysis, setShowDetailedAnalysis] = useState(false);

  if (!state.currentSite) {
    return (
      <div className="flex items-center justify-center h-[calc(100vh-200px)]">
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-gray-600 mb-4">No Site Selected</h2>
          <p className="text-gray-500">Please select a site to perform analysis.</p>
        </div>
      </div>
    );
  }

  const metrics = {
    totalRisks: state.risks.length,
    highRisks: state.risks.filter(r => r.severity === 'high').length,
    mediumRisks: state.risks.filter(r => r.severity === 'medium').length,
    lowRisks: state.risks.filter(r => r.severity === 'low').length,
    mitigatedRisks: state.risks.filter(r => r.status === 'mitigated').length,
    risksByCategory: state.risks.reduce((acc, risk) => {
      acc[risk.category] = (acc[risk.category] || 0) + 1;
      return acc;
    }, {} as Record<string, number>)
  };

  if (showDetailedAnalysis) {
    return (
      <div className="space-y-6">
        <button
          onClick={() => setShowDetailedAnalysis(false)}
          className="mb-4 flex items-center text-purple-600 hover:text-purple-700"
        >
          ← Back to Overview
        </button>
        <DisasterAnalysisLayout initialDisaster={activeDisaster} />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <SiteOverview site={state.currentSite} />
        <RiskOverview metrics={metrics} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <SiteAnalysisMap site={state.currentSite} />
        <EnvironmentalContext />
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex justify-between items-center mb-6">
          <div className="flex space-x-4">
            <button
              onClick={() => setActiveDisaster('earthquake')}
              className={`px-4 py-2 rounded-md transition-colors ${
                activeDisaster === 'earthquake'
                  ? 'bg-purple-600 text-white'
                  : 'hover:bg-purple-50'
              }`}
            >
              Earthquake
            </button>
            <button
              onClick={() => setActiveDisaster('flood')}
              className={`px-4 py-2 rounded-md transition-colors ${
                activeDisaster === 'flood'
                  ? 'bg-purple-600 text-white'
                  : 'hover:bg-purple-50'
              }`}
            >
              Flood
            </button>
            <button
              onClick={() => setActiveDisaster('avalanche')}
              className={`px-4 py-2 rounded-md transition-colors ${
                activeDisaster === 'avalanche'
                  ? 'bg-purple-600 text-white'
                  : 'hover:bg-purple-50'
              }`}
            >
              Avalanche
            </button>
            <button
              onClick={() => setActiveDisaster('landslide')}
              className={`px-4 py-2 rounded-md transition-colors ${
                activeDisaster === 'landslide'
                  ? 'bg-purple-600 text-white'
                  : 'hover:bg-purple-50'
              }`}
            >
              Landslide
            </button>
          </div>
          <button
            onClick={() => setShowDetailedAnalysis(true)}
            className="px-4 py-2 bg-white border border-purple-500 text-purple-700 rounded-md hover:bg-purple-50 transition-colors"
          >
            Detailed Analysis
          </button>
        </div>

        <div>
          {activeDisaster === 'earthquake' && <EarthquakeAnalysis />}
          {activeDisaster === 'flood' && <FloodAnalysis />}
          {activeDisaster === 'avalanche' && <AvalancheAnalysis />}
          {activeDisaster === 'landslide' && <LandslideAnalysis />}
        </div>
      </div>

      <RiskAssessmentForm />
      
      {state.risks.length > 0 && <RiskMatrix risks={state.risks} />}

      <div className="grid grid-cols-1 gap-6">
        <SiteSections />
        <BiodiversityAnalysis />
      </div>
    </div>
  );
}