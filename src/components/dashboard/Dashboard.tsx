import React, { useState } from 'react';
import { ProjectList } from './ProjectList';
import { ProjectDetails } from './ProjectDetails';
import { NewProjectForm } from './NewProjectForm';
import { useSite } from '../../context/SiteContext';
import type { Project, SiteInfo } from '../../types';

interface DashboardProps {
  onNewSite: () => void;
  onAnalyze: (site: SiteInfo) => void;
}

export function Dashboard({ onNewSite, onAnalyze }: DashboardProps) {
  const { state, dispatch } = useSite();
  const [showNewProject, setShowNewProject] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleCreateProject = (project: Project) => {
    dispatch({ type: 'ADD_PROJECT', payload: project });
    setShowNewProject(false);
  };

  const handleSelectProject = (project: Project) => {
    dispatch({ type: 'SET_CURRENT_PROJECT', payload: project });
    onNewSite();
  };

  const handleAnalyze = (site: SiteInfo) => {
    dispatch({ type: 'SET_CURRENT_SITE', payload: site });
    onAnalyze(site);
  };

  if (selectedProject) {
    return (
      <ProjectDetails
        project={selectedProject}
        onBack={() => setSelectedProject(null)}
      />
    );
  }

  return (
    <div className="space-y-6">
      {showNewProject ? (
        <NewProjectForm
          onSubmit={handleCreateProject}
          onCancel={() => setShowNewProject(false)}
        />
      ) : (
        <ProjectList
          projects={state.projects}
          onNewProject={() => setShowNewProject(true)}
          onSelectProject={handleSelectProject}
          onAnalyze={handleAnalyze}
        />
      )}
    </div>
  );
}