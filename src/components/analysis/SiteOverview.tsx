import React from 'react';
import { MapPin, Ruler, Building2, Calendar } from 'lucide-react';
import type { SiteInfo } from '../../types';

interface SiteOverviewProps {
  site: SiteInfo;
}

export function SiteOverview({ site }: SiteOverviewProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold text-purple-900 mb-6">{site.name}</h2>
      
      <div className="grid grid-cols-2 gap-4">
        <div className="flex items-start space-x-3">
          <MapPin className="h-5 w-5 text-purple-600" />
          <div>
            <p className="text-sm font-medium text-gray-600">Location</p>
            <p className="text-base">{site.location.address}</p>
          </div>
        </div>
        
        <div className="flex items-start space-x-3">
          <Ruler className="h-5 w-5 text-purple-600" />
          <div>
            <p className="text-sm font-medium text-gray-600">Site Area</p>
            <p className="text-base">{site.totalArea.toFixed(2)} hectares</p>
          </div>
        </div>
        
        <div className="flex items-start space-x-3">
          <Building2 className="h-5 w-5 text-purple-600" />
          <div>
            <p className="text-sm font-medium text-gray-600">Site Type</p>
            <p className="text-base">{site.type.charAt(0).toUpperCase() + site.type.slice(1)}</p>
          </div>
        </div>
        
        <div className="flex items-start space-x-3">
          <Calendar className="h-5 w-5 text-purple-600" />
          <div>
            <p className="text-sm font-medium text-gray-600">Analysis Date</p>
            <p className="text-base">{new Date().toLocaleDateString()}</p>
          </div>
        </div>
      </div>
    </div>
  );
}