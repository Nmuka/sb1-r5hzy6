import React, { useState } from 'react';
import { Building2, MapPin, Calendar, ChevronDown, ChevronRight } from 'lucide-react';
import type { Project, SiteInfo } from '../../types';

interface ProjectListProps {
  projects: Project[];
  onNewProject: () => void;
  onSelectProject: (project: Project) => void;
  onAnalyze: (site: SiteInfo) => void;
}

export function ProjectList({ projects, onNewProject, onSelectProject, onAnalyze }: ProjectListProps) {
  const [expandedProjects, setExpandedProjects] = useState<Record<string, boolean>>({});

  const toggleProject = (projectId: string) => {
    setExpandedProjects(prev => ({
      ...prev,
      [projectId]: !prev[projectId]
    }));
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">Your Projects</h2>
        <button
          onClick={onNewProject}
          className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition-colors"
        >
          New Project
        </button>
      </div>

      {projects.length === 0 ? (
        <div className="text-center py-8">
          <Building2 className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <p className="text-gray-500">No projects yet. Create your first project!</p>
        </div>
      ) : (
        <div className="space-y-4">
          {projects.map((project) => (
            <div key={project.id} className="border rounded-lg overflow-hidden">
              <div 
                className="flex items-center justify-between p-4 bg-gray-50 cursor-pointer hover:bg-gray-100 transition-colors"
                onClick={() => toggleProject(project.id)}
              >
                <div className="flex items-center space-x-3">
                  {expandedProjects[project.id] ? (
                    <ChevronDown className="h-5 w-5 text-gray-500" />
                  ) : (
                    <ChevronRight className="h-5 w-5 text-gray-500" />
                  )}
                  <div>
                    <h3 className="font-medium">{project.name}</h3>
                    <p className="text-sm text-gray-600">{project.sites.length} sites</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-500">
                    Created: {new Date(project.createdAt).toLocaleDateString()}
                  </span>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelectProject(project);
                    }}
                    className="bg-purple-600 text-white px-3 py-1 rounded-md hover:bg-purple-700 transition-colors"
                  >
                    Add Site
                  </button>
                </div>
              </div>

              {expandedProjects[project.id] && (
                <div className="p-4 border-t">
                  <div className="space-y-4">
                    {project.sites.length > 0 ? (
                      <div className="grid gap-4">
                        {project.sites.map((site) => (
                          <div
                            key={site.id}
                            className="border rounded-lg p-4 hover:border-purple-500 transition-colors"
                          >
                            <div className="flex justify-between items-start">
                              <div>
                                <h5 className="font-medium">{site.name}</h5>
                                <div className="space-y-1 mt-2">
                                  <div className="flex items-center text-sm text-gray-600">
                                    <Building2 className="h-4 w-4 mr-2" />
                                    {site.type.charAt(0).toUpperCase() + site.type.slice(1)}
                                  </div>
                                  <div className="flex items-center text-sm text-gray-600">
                                    <MapPin className="h-4 w-4 mr-2" />
                                    {site.location.address}
                                  </div>
                                  <div className="flex items-center text-sm text-gray-600">
                                    <Calendar className="h-4 w-4 mr-2" />
                                    Area: {site.totalArea.toFixed(2)} hectares
                                  </div>
                                </div>
                              </div>
                              <button
                                onClick={() => onAnalyze(site)}
                                className="bg-purple-600 text-white px-3 py-1 rounded-md hover:bg-purple-700 transition-colors"
                              >
                                Analyze
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p className="text-sm text-gray-500 text-center py-4">
                        No sites added to this project yet.
                      </p>
                    )}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}