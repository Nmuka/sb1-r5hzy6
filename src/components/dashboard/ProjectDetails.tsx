import React from 'react';
import { Building2, Calendar, Users, Clock } from 'lucide-react';
import type { Project } from '../../types';

interface ProjectDetailsProps {
  project: Project;
  onBack: () => void;
}

export function ProjectDetails({ project, onBack }: ProjectDetailsProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <button
            onClick={onBack}
            className="text-sm text-purple-600 hover:text-purple-700 mb-2"
          >
            ← Back to Projects
          </button>
          <h2 className="text-2xl font-bold">{project.name}</h2>
        </div>
        <div className="text-sm text-gray-500">
          <div className="flex items-center space-x-1">
            <Clock className="h-4 w-4" />
            <span>Last updated: {new Date(project.updatedAt).toLocaleDateString()}</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-purple-50 rounded-lg p-4">
          <div className="flex items-center space-x-3">
            <Building2 className="h-6 w-6 text-purple-600" />
            <div>
              <p className="text-sm text-gray-600">Total Sites</p>
              <p className="text-2xl font-bold text-purple-600">{project.sites.length}</p>
            </div>
          </div>
        </div>

        <div className="bg-purple-50 rounded-lg p-4">
          <div className="flex items-center space-x-3">
            <Calendar className="h-6 w-6 text-purple-600" />
            <div>
              <p className="text-sm text-gray-600">Created On</p>
              <p className="text-lg font-medium text-purple-600">
                {new Date(project.createdAt).toLocaleDateString()}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-purple-50 rounded-lg p-4">
          <div className="flex items-center space-x-3">
            <Users className="h-6 w-6 text-purple-600" />
            <div>
              <p className="text-sm text-gray-600">Team Members</p>
              <p className="text-lg font-medium text-purple-600">3 Members</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Project Description</h3>
        <p className="text-gray-600">{project.description}</p>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Project Timeline</h3>
        <div className="border-l-2 border-purple-200 pl-4 space-y-4">
          <div className="relative">
            <div className="absolute -left-[21px] top-1 h-4 w-4 rounded-full bg-purple-600"></div>
            <p className="font-medium">Project Created</p>
            <p className="text-sm text-gray-600">{new Date(project.createdAt).toLocaleDateString()}</p>
          </div>
          <div className="relative">
            <div className="absolute -left-[21px] top-1 h-4 w-4 rounded-full bg-purple-200"></div>
            <p className="font-medium">Last Updated</p>
            <p className="text-sm text-gray-600">{new Date(project.updatedAt).toLocaleDateString()}</p>
          </div>
        </div>
      </div>
    </div>
  );
}