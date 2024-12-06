import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { RiskAssessmentTabs } from '../components/risk/RiskAssessmentTabs';
import { RiskAssessmentForm } from '../components/risk/RiskAssessmentForm';
import { RiskTable } from '../components/risk/RiskTable';

export function RiskAssessment() {
  const handleSubmit = (data: any) => {
    console.log('Form submitted:', data);
    // TODO: Implement risk submission logic
  };

  const handleEdit = (risk: any) => {
    console.log('Edit risk:', risk);
    // TODO: Implement risk editing logic
  };

  // Mock data for demonstration
  const mockRisks = [
    {
      id: '1',
      title: 'Market Volatility Impact',
      impactLevel: 'High',
      probability: 'Likely',
      owner: 'John Doe',
      status: 'Open',
      targetDate: '2024-12-31'
    }
  ];

  return (
    <div className="bg-white rounded-lg shadow-md">
      <RiskAssessmentTabs />
      
      <Routes>
        <Route path="/" element={<Navigate to="/risk-assessment/financial" replace />} />
        <Route
          path="/financial"
          element={
            <div>
              <RiskAssessmentForm riskType="Financial" onSubmit={handleSubmit} />
              <RiskTable risks={mockRisks} onEdit={handleEdit} />
            </div>
          }
        />
        <Route
          path="/operational"
          element={
            <div>
              <RiskAssessmentForm riskType="Operational" onSubmit={handleSubmit} />
              <RiskTable risks={mockRisks} onEdit={handleEdit} />
            </div>
          }
        />
        <Route
          path="/strategic"
          element={
            <div>
              <RiskAssessmentForm riskType="Strategic" onSubmit={handleSubmit} />
              <RiskTable risks={mockRisks} onEdit={handleEdit} />
            </div>
          }
        />
        <Route
          path="/compliance"
          element={
            <div>
              <RiskAssessmentForm riskType="Compliance" onSubmit={handleSubmit} />
              <RiskTable risks={mockRisks} onEdit={handleEdit} />
            </div>
          }
        />
        <Route
          path="/market"
          element={
            <div>
              <RiskAssessmentForm riskType="Market" onSubmit={handleSubmit} />
              <RiskTable risks={mockRisks} onEdit={handleEdit} />
            </div>
          }
        />
      </Routes>
    </div>
  );
}