import React, { useState } from 'react';
import { Shield, Plus, X } from 'lucide-react';

interface Strategy {
  id: string;
  title: string;
  description: string;
  status: 'planned' | 'in-progress' | 'completed';
}

interface MitigationStrategiesProps {
  disasterType: string;
}

export function MitigationStrategies({ disasterType }: MitigationStrategiesProps) {
  const [strategies, setStrategies] = useState<Strategy[]>([
    {
      id: '1',
      title: 'Early Warning System',
      description: 'Implementation of advanced detection and alert systems',
      status: 'in-progress'
    },
    {
      id: '2',
      title: 'Infrastructure Reinforcement',
      description: 'Strengthening critical infrastructure against potential impacts',
      status: 'planned'
    }
  ]);

  const [newStrategy, setNewStrategy] = useState({
    title: '',
    description: '',
    status: 'planned' as const
  });

  const addStrategy = () => {
    if (newStrategy.title && newStrategy.description) {
      setStrategies(prev => [...prev, {
        id: Date.now().toString(),
        ...newStrategy
      }]);
      setNewStrategy({
        title: '',
        description: '',
        status: 'planned'
      });
    }
  };

  const removeStrategy = (id: string) => {
    setStrategies(prev => prev.filter(strategy => strategy.id !== id));
  };

  const getStatusColor = (status: Strategy['status']) => {
    switch (status) {
      case 'completed':
        return 'bg-green-100 text-green-800';
      case 'in-progress':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="border rounded-lg p-4">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          <Shield className="h-5 w-5 text-purple-500" />
          <h3 className="text-lg font-semibold">Mitigation Strategies</h3>
        </div>
        <button
          onClick={addStrategy}
          className="flex items-center space-x-1 px-3 py-1 bg-purple-100 text-purple-700 rounded-md hover:bg-purple-200"
        >
          <Plus className="h-4 w-4" />
          <span>Add Strategy</span>
        </button>
      </div>

      <div className="space-y-4">
        <div className="grid gap-4">
          {strategies.map((strategy) => (
            <div key={strategy.id} className="p-3 border rounded-lg">
              <div className="flex items-start justify-between">
                <div>
                  <h4 className="font-medium">{strategy.title}</h4>
                  <p className="text-sm text-gray-600 mt-1">{strategy.description}</p>
                </div>
                <div className="flex items-center space-x-2">
                  <span className={`px-2 py-1 rounded-full text-xs ${getStatusColor(strategy.status)}`}>
                    {strategy.status}
                  </span>
                  <button
                    onClick={() => removeStrategy(strategy.id)}
                    className="text-gray-400 hover:text-red-500"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4 space-y-3">
          <input
            type="text"
            value={newStrategy.title}
            onChange={(e) => setNewStrategy(prev => ({ ...prev, title: e.target.value }))}
            placeholder="Strategy Title"
            className="w-full px-3 py-2 border rounded-md"
          />
          <textarea
            value={newStrategy.description}
            onChange={(e) => setNewStrategy(prev => ({ ...prev, description: e.target.value }))}
            placeholder="Strategy Description"
            className="w-full px-3 py-2 border rounded-md"
            rows={3}
          />
          <select
            value={newStrategy.status}
            onChange={(e) => setNewStrategy(prev => ({ ...prev, status: e.target.value as Strategy['status'] }))}
            className="w-full px-3 py-2 border rounded-md"
          >
            <option value="planned">Planned</option>
            <option value="in-progress">In Progress</option>
            <option value="completed">Completed</option>
          </select>
        </div>
      </div>
    </div>
  );
}