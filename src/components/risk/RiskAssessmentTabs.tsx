import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { 
  DollarSign, 
  Settings, 
  Shield, 
  FileCheck, 
  BarChart3 
} from 'lucide-react';

const tabs = [
  { id: 'financial', label: 'Financial Risk', icon: DollarSign },
  { id: 'operational', label: 'Operational Risk', icon: Settings },
  { id: 'strategic', label: 'Strategic Risk', icon: Shield },
  { id: 'compliance', label: 'Compliance Risk', icon: FileCheck },
  { id: 'market', label: 'Market Risk', icon: BarChart3 },
];

export function RiskAssessmentTabs() {
  const navigate = useNavigate();
  const location = useLocation();
  const currentTab = location.pathname.split('/').pop() || 'financial';

  return (
    <div className="border-b">
      <nav className="flex space-x-4 px-6" aria-label="Risk Assessment Tabs">
        {tabs.map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            onClick={() => navigate(`/risk-assessment/${id}`)}
            className={`flex items-center space-x-2 py-4 px-3 border-b-2 transition-colors ${
              currentTab === id
                ? 'border-purple-500 text-purple-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            <Icon className="h-5 w-5" />
            <span>{label}</span>
          </button>
        ))}
      </nav>
    </div>
  );
}