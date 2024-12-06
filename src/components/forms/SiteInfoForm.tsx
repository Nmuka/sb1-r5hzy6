import React, { useState } from 'react';
import { Building, Factory, Home, Zap, MapPin } from 'lucide-react';
import type { SiteType } from '../../types';
import { useSite } from '../../context/SiteContext';
import { LocationMap } from '../location/LocationMap';

interface SiteTypeOption {
  value: SiteType;
  label: string;
  icon: React.ReactNode;
}

const siteTypes: SiteTypeOption[] = [
  { value: 'transformer', label: 'Transformer Center', icon: <Zap className="h-5 w-5" /> },
  { value: 'industrial', label: 'Industrial Facility', icon: <Factory className="h-5 w-5" /> },
  { value: 'commercial', label: 'Commercial Building', icon: <Building className="h-5 w-5" /> },
  { value: 'residential', label: 'Residential Complex', icon: <Home className="h-5 w-5" /> },
];

interface SiteInfoFormProps {
  onComplete: () => void;
}

export function SiteInfoForm({ onComplete }: SiteInfoFormProps) {
  const { state, dispatch } = useSite();
  const [formData, setFormData] = useState({
    name: '',
    type: '' as SiteType,
    totalArea: '',
    address: '',
    location: {
      latitude: 0,
      longitude: 0,
    },
    boundary: {
      coordinates: [] as number[][],
      area: 0
    }
  });

  const handleLocationChange = (lat: number, lng: number) => {
    setFormData(prev => ({
      ...prev,
      location: {
        latitude: lat,
        longitude: lng
      }
    }));
  };

  const handleBoundaryChange = (coordinates: number[][], area: number) => {
    setFormData(prev => ({
      ...prev,
      boundary: {
        coordinates,
        area
      },
      totalArea: (area / 10000).toFixed(2) // Convert to hectares
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!state.currentProject) {
      console.error('No current project selected');
      return;
    }

    const site = {
      id: Date.now().toString(),
      projectId: state.currentProject.id,
      name: formData.name,
      type: formData.type,
      totalArea: Number(formData.totalArea),
      location: {
        latitude: formData.location.latitude,
        longitude: formData.location.longitude,
        address: formData.address
      },
      boundary: formData.boundary
    };

    dispatch({
      type: 'ADD_SITE',
      payload: {
        projectId: state.currentProject.id,
        site
      }
    });
    onComplete();
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold mb-6">Site Information</h2>
      
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Site Type</label>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {siteTypes.map((type) => (
              <button
                type="button"
                key={type.value}
                onClick={() => setFormData({ ...formData, type: type.value })}
                className={`flex flex-col items-center p-4 border rounded-lg transition-colors ${
                  formData.type === type.value
                    ? 'border-purple-500 bg-purple-50'
                    : 'hover:border-purple-500 hover:bg-purple-50'
                }`}
              >
                {type.icon}
                <span className="mt-2 text-sm">{type.label}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Site Name</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-3 py-2 border rounded-md focus:ring-purple-500 focus:border-purple-500"
              placeholder="Enter site name"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Total Area (hectares)
            </label>
            <input
              type="number"
              value={formData.totalArea}
              onChange={(e) => setFormData({ ...formData, totalArea: e.target.value })}
              className="w-full px-3 py-2 border rounded-md focus:ring-purple-500 focus:border-purple-500"
              placeholder="Draw on map to calculate"
              readOnly
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Address</label>
          <textarea
            value={formData.address}
            onChange={(e) => setFormData({ ...formData, address: e.target.value })}
            className="w-full px-3 py-2 border rounded-md focus:ring-purple-500 focus:border-purple-500"
            rows={3}
            placeholder="Enter site address"
            required
          />
        </div>

        <div>
          <div className="flex items-center space-x-2 mb-4">
            <MapPin className="h-5 w-5 text-gray-500" />
            <label className="text-sm font-medium text-gray-700">Site Location & Boundary</label>
          </div>
          <div className="border rounded-lg overflow-hidden">
            <LocationMap
              onLocationChange={handleLocationChange}
              onBoundaryChange={handleBoundaryChange}
            />
          </div>
          <p className="mt-2 text-sm text-gray-500">
            Draw a polygon on the map to define the site boundary. The area will be calculated automatically.
          </p>
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition-colors"
          >
            Save Site Information
          </button>
        </div>
      </div>
    </form>
  );
}