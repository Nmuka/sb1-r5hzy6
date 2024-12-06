import React from 'react';
import { Clock, AlertTriangle, CheckCircle } from 'lucide-react';

interface TimelineEvent {
  id: string;
  date: string;
  title: string;
  description: string;
  status: 'warning' | 'success' | 'info';
}

interface DisasterTimelineProps {
  disasterType: string;
}

export function DisasterTimeline({ disasterType }: DisasterTimelineProps) {
  const events: TimelineEvent[] = [
    {
      id: '1',
      date: '2024-03-15',
      title: 'Initial Warning',
      description: 'First signs of potential disaster detected',
      status: 'warning'
    },
    {
      id: '2',
      date: '2024-03-16',
      title: 'Peak Impact',
      description: 'Maximum intensity recorded',
      status: 'warning'
    },
    {
      id: '3',
      date: '2024-03-17',
      title: 'Recovery Phase',
      description: 'Situation stabilizing, recovery efforts initiated',
      status: 'success'
    }
  ];

  const getStatusIcon = (status: TimelineEvent['status']) => {
    switch (status) {
      case 'warning':
        return <AlertTriangle className="h-5 w-5 text-orange-500" />;
      case 'success':
        return <CheckCircle className="h-5 w-5 text-green-500" />;
      default:
        return <Clock className="h-5 w-5 text-blue-500" />;
    }
  };

  return (
    <div className="border rounded-lg p-4">
      <h3 className="text-lg font-semibold mb-4">Event Timeline</h3>
      <div className="space-y-4">
        {events.map((event) => (
          <div key={event.id} className="flex items-start space-x-3">
            {getStatusIcon(event.status)}
            <div>
              <div className="flex items-center space-x-2">
                <p className="font-medium">{event.title}</p>
                <span className="text-sm text-gray-500">
                  {new Date(event.date).toLocaleDateString()}
                </span>
              </div>
              <p className="text-sm text-gray-600 mt-1">{event.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}