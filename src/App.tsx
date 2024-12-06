import React, { useState } from 'react';
import { Header } from './components/layout/Header';
import { Dashboard } from './components/dashboard/Dashboard';
import { SiteInfoForm } from './components/forms/SiteInfoForm';
import { SiteAnalysisLayout } from './components/analysis/SiteAnalysisLayout';
import { SiteProvider } from './context/SiteContext';
import type { SiteInfo } from './types';

type View = 'dashboard' | 'new-site' | 'analysis';

function App() {
  const [currentView, setCurrentView] = useState<View>('dashboard');

  const handleNewSite = () => {
    setCurrentView('new-site');
  };

  const handleAnalyze = (site: SiteInfo) => {
    setCurrentView('analysis');
  };

  return (
    <SiteProvider>
      <div className="min-h-screen bg-gray-50">
        <Header
          onNavigate={(view) => setCurrentView(view as View)}
          currentView={currentView}
        />
        <main className="container mx-auto px-4 py-8">
          {currentView === 'dashboard' && (
            <Dashboard
              onNewSite={handleNewSite}
              onAnalyze={handleAnalyze}
            />
          )}
          {currentView === 'new-site' && (
            <SiteInfoForm
              onComplete={() => setCurrentView('dashboard')}
            />
          )}
          {currentView === 'analysis' && <SiteAnalysisLayout />}
        </main>
      </div>
    </SiteProvider>
  );
}

export default App;