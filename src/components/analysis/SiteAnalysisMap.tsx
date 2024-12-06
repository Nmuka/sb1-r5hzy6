import React from 'react';
import { MapContainer, TileLayer, Polygon } from 'react-leaflet';
import type { SiteInfo } from '../../types';
import 'leaflet/dist/leaflet.css';

interface SiteAnalysisMapProps {
  site: SiteInfo;
}

export function SiteAnalysisMap({ site }: SiteAnalysisMapProps) {
  // Convert boundary coordinates from [lng, lat] to [lat, lng] for Leaflet
  const polygonCoords = site.boundary?.coordinates.map(([lng, lat]) => [lat, lng]) || [];
  const center = site.location ? [site.location.latitude, site.location.longitude] : [0, 0];

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-lg font-semibold mb-4">Site Context Analysis</h3>
      
      <div className="space-y-4">
        <div className="h-[400px] rounded-lg overflow-hidden">
          <MapContainer
            center={center as [number, number]}
            zoom={15}
            className="h-full w-full"
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {site.boundary && (
              <Polygon
                positions={polygonCoords as [number, number][]}
                pathOptions={{
                  color: '#6b46c1',
                  fillColor: '#6b46c1',
                  fillOpacity: 0.2,
                }}
              />
            )}
          </MapContainer>
        </div>

        <div className="grid grid-cols-3 gap-4 text-sm">
          <div className="p-3 bg-gray-50 rounded-lg">
            <h4 className="font-medium mb-1">Total Area</h4>
            <p className="text-gray-600">{(site.totalArea || 0).toFixed(2)} hectares</p>
          </div>
          <div className="p-3 bg-gray-50 rounded-lg">
            <h4 className="font-medium mb-1">Location</h4>
            <p className="text-gray-600">
              {site.location.latitude.toFixed(4)}, {site.location.longitude.toFixed(4)}
            </p>
          </div>
          <div className="p-3 bg-gray-50 rounded-lg">
            <h4 className="font-medium mb-1">Site Type</h4>
            <p className="text-gray-600">{site.type.charAt(0).toUpperCase() + site.type.slice(1)}</p>
          </div>
        </div>
      </div>
    </div>
  );
}