import React, { useEffect, useRef } from 'react';
import { MapContainer, TileLayer, FeatureGroup } from 'react-leaflet';
import { EditControl } from 'react-leaflet-draw';
import { LatLng } from 'leaflet';
import area from '@turf/area';
import 'leaflet/dist/leaflet.css';
import 'leaflet-draw/dist/leaflet.draw.css';

interface LocationMapProps {
  onLocationChange: (lat: number, lng: number) => void;
  onBoundaryChange: (coordinates: number[][], area: number) => void;
}

export function LocationMap({ onLocationChange, onBoundaryChange }: LocationMapProps) {
  const groupRef = useRef<any>(null);

  useEffect(() => {
    // Fix Leaflet icons
    delete (window as any)._leaflet_id;
  }, []);

  const handleCreated = (e: any) => {
    const layer = e.layer;
    if (layer.getLatLngs) {
      const coordinates = layer.getLatLngs()[0].map((latlng: LatLng) => [
        latlng.lng,
        latlng.lat,
      ]);
      
      // Calculate area using turf.js
      const polygon = {
        type: 'Feature',
        properties: {},
        geometry: {
          type: 'Polygon',
          coordinates: [coordinates],
        },
      };
      
      const areaInSquareMeters = area(polygon);
      onBoundaryChange(coordinates, areaInSquareMeters);
    }

    const center = layer.getBounds().getCenter();
    onLocationChange(center.lat, center.lng);
  };

  return (
    <MapContainer
      center={[51.505, -0.09]}
      zoom={13}
      className="h-[400px] w-full rounded-lg"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <FeatureGroup ref={groupRef}>
        <EditControl
          position="topright"
          onCreated={handleCreated}
          draw={{
            rectangle: false,
            circle: false,
            circlemarker: false,
            marker: false,
            polyline: false,
            polygon: {
              allowIntersection: false,
              drawError: {
                color: '#e1e4e8',
                message: '<strong>Error:</strong> Shape edges cannot cross!'
              },
              shapeOptions: {
                color: '#6b46c1'
              }
            }
          }}
        />
      </FeatureGroup>
    </MapContainer>
  );
}