export type SiteType = 'transformer' | 'industrial' | 'commercial' | 'residential';

export interface Project {
  id: string;
  name: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  sites: SiteInfo[];
}

export interface SiteInfo {
  id: string;
  projectId: string;
  name: string;
  type: SiteType;
  totalArea: number;
  location: {
    latitude: number;
    longitude: number;
    address: string;
  };
  boundary?: {
    coordinates: number[][];
    area: number;
  };
}