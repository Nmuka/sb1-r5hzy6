import React from 'react';
import { LucideIcon } from 'lucide-react';

interface MetricCardProps {
  icon: LucideIcon;
  label: string;
  value: string | number;
  bgColor: string;
  iconColor: string;
}

export function MetricCard({ icon: Icon, label, value, bgColor, iconColor }: MetricCardProps) {
  return (
    <div className={`${bgColor} p-4 rounded-lg`}>
      <div className="flex items-center space-x-3">
        <Icon className={`h-5 w-5 ${iconColor}`} />
        <div>
          <p className="text-sm font-medium text-gray-600">{label}</p>
          <p className="text-xl font-bold">{value}</p>
        </div>
      </div>
    </div>
  );
}