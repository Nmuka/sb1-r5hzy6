import React, { useState } from 'react';
import { AlertTriangle } from 'lucide-react';
import type { RiskCategory, RiskSeverity } from '../../types/risk';
import { useSite } from '../../context/SiteContext';

const riskCategories: RiskCategory[] = ['equipment', 'environmental', 'security', 'operational', 'personnel'];
const severityLevels: RiskSeverity[] = ['high', 'medium', 'low'];

export function RiskAssessmentForm() {
  const { dispatch } = useSite();
  const [formData, setFormData] = useState({
    title: '',
    category: 'equipment' as RiskCategory,
    severity: 'medium' as RiskSeverity,
    description: '',
    probability: 0.5,
    impact: 0.5,
    mitigationSteps: ['']
  });

  const handleAddMitigationStep = () => {
    setFormData({
      ...formData,
      mitigationSteps: [...formData.mitigationSteps, '']
    });
  };

  const handleMitigationStepChange = (index: number, value: string) => {
    const newSteps = [...formData.mitigationSteps];
    newSteps[index] = value;
    setFormData({
      ...formData,
      mitigationSteps: newSteps
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const risk = {
      id: Date.now().toString(),
      title: formData.title,
      category: formData.category,
      severity: formData.severity,
      description: formData.description,
      status: 'active' as const,
      score: {
        probability: formData.probability,
        impact: formData.impact,
        total: formData.probability * formData.impact
      },
      factors: [],
      mitigationSteps: formData.mitigationSteps.filter(step => step.trim() !== ''),
      lastUpdated: new Date().toISOString(),
      nextReview: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString()
    };

    dispatch({ type: 'ADD_RISK', payload: risk });
    setFormData({
      title: '',
      category: 'equipment',
      severity: 'medium',
      description: '',
      probability: 0.5,
      impact: 0.5,
      mitigationSteps: ['']
    });
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center space-x-2 mb-6">
        <AlertTriangle className="h-6 w-6 text-yellow-500" />
        <h2 className="text-xl font-semibold">New Risk Assessment</h2>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Risk Title</label>
          <input
            type="text"
            value={formData.title}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            className="w-full px-3 py-2 border rounded-md focus:ring-purple-500 focus:border-purple-500"
            placeholder="Enter risk title"
            required
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
            <select
              value={formData.category}
              onChange={(e) => setFormData({ ...formData, category: e.target.value as RiskCategory })}
              className="w-full px-3 py-2 border rounded-md focus:ring-purple-500 focus:border-purple-500"
              required
            >
              {riskCategories.map((category) => (
                <option key={category} value={category}>
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Severity</label>
            <select
              value={formData.severity}
              onChange={(e) => setFormData({ ...formData, severity: e.target.value as RiskSeverity })}
              className="w-full px-3 py-2 border rounded-md focus:ring-purple-500 focus:border-purple-500"
              required
            >
              {severityLevels.map((level) => (
                <option key={level} value={level}>
                  {level.charAt(0).toUpperCase() + level.slice(1)}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
          <textarea
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            rows={4}
            className="w-full px-3 py-2 border rounded-md focus:ring-purple-500 focus:border-purple-500"
            placeholder="Describe the risk and its potential impact"
            required
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Probability (0-1)
            </label>
            <input
              type="number"
              min="0"
              max="1"
              step="0.1"
              value={formData.probability}
              onChange={(e) => setFormData({ ...formData, probability: parseFloat(e.target.value) })}
              className="w-full px-3 py-2 border rounded-md focus:ring-purple-500 focus:border-purple-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Impact (0-1)
            </label>
            <input
              type="number"
              min="0"
              max="1"
              step="0.1"
              value={formData.impact}
              onChange={(e) => setFormData({ ...formData, impact: parseFloat(e.target.value) })}
              className="w-full px-3 py-2 border rounded-md focus:ring-purple-500 focus:border-purple-500"
              required
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Mitigation Steps</label>
          {formData.mitigationSteps.map((step, index) => (
            <div key={index} className="flex gap-2 mb-2">
              <input
                type="text"
                value={step}
                onChange={(e) => handleMitigationStepChange(index, e.target.value)}
                className="flex-1 px-3 py-2 border rounded-md focus:ring-purple-500 focus:border-purple-500"
                placeholder={`Step ${index + 1}`}
                required
              />
              {index === formData.mitigationSteps.length - 1 && (
                <button
                  type="button"
                  onClick={handleAddMitigationStep}
                  className="px-3 py-2 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors"
                >
                  +
                </button>
              )}
            </div>
          ))}
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition-colors"
          >
            Add Risk Assessment
          </button>
        </div>
      </form>
    </div>
  );
}