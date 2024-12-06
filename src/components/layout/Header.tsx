import React from 'react';
import { Building2 } from 'lucide-react';

interface HeaderProps {
  onNavigate: (view: string) => void;
  currentView: string;
}

export function Header({ onNavigate, currentView }: HeaderProps) {
  return (
    <header className="bg-purple-800 text-white shadow-lg">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => onNavigate('dashboard')}>
            <Building2 className="h-8 w-8" />
            <h1 className="text-2xl font-bold">Site Analysis & Risk Assessment</h1>
          </div>
          <nav className="flex space-x-8">
            <button
              onClick={() => onNavigate('dashboard')}
              className={`hover:text-purple-200 transition-colors ${
                currentView === 'dashboard' ? 'text-purple-200 border-b-2 border-purple-200' : ''
              }`}
            >
              Dashboard
            </button>
            {currentView === 'new-project' && (
              <button className="text-purple-200 border-b-2 border-purple-200">
                New Project
              </button>
            )}
            {currentView === 'analysis' && (
              <button className="text-purple-200 border-b-2 border-purple-200">
                Analysis
              </button>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
}