import React, { createContext, useContext, useReducer } from 'react';
import type { Project, SiteInfo } from '../types';
import type { RiskAssessment } from '../types/risk';

interface SiteState {
  projects: Project[];
  currentProject: Project | null;
  currentSite: SiteInfo | null;
  risks: RiskAssessment[];
}

type Action = 
  | { type: 'ADD_PROJECT'; payload: Project }
  | { type: 'SET_CURRENT_PROJECT'; payload: Project }
  | { type: 'ADD_SITE'; payload: { projectId: string; site: SiteInfo } }
  | { type: 'SET_CURRENT_SITE'; payload: SiteInfo }
  | { type: 'ADD_RISK'; payload: RiskAssessment }
  | { type: 'UPDATE_RISK'; payload: RiskAssessment }
  | { type: 'DELETE_RISK'; payload: string };

const initialState: SiteState = {
  projects: [],
  currentProject: null,
  currentSite: null,
  risks: []
};

const SiteContext = createContext<{
  state: SiteState;
  dispatch: React.Dispatch<Action>;
} | undefined>(undefined);

function siteReducer(state: SiteState, action: Action): SiteState {
  switch (action.type) {
    case 'ADD_PROJECT': {
      const existingProjectIndex = state.projects.findIndex(p => p.id === action.payload.id);
      
      if (existingProjectIndex >= 0) {
        const updatedProjects = [...state.projects];
        updatedProjects[existingProjectIndex] = action.payload;
        return {
          ...state,
          projects: updatedProjects,
          currentProject: action.payload
        };
      }
      
      return {
        ...state,
        projects: [...state.projects, action.payload],
        currentProject: action.payload
      };
    }
    case 'SET_CURRENT_PROJECT':
      return {
        ...state,
        currentProject: action.payload,
        currentSite: null // Reset current site when switching projects
      };
    case 'ADD_SITE': {
      const { projectId, site } = action.payload;
      const updatedProjects = state.projects.map(project => {
        if (project.id === projectId) {
          const existingSiteIndex = project.sites.findIndex(s => s.id === site.id);
          if (existingSiteIndex >= 0) {
            const updatedSites = [...project.sites];
            updatedSites[existingSiteIndex] = site;
            return { ...project, sites: updatedSites };
          }
          return { ...project, sites: [...project.sites, site] };
        }
        return project;
      });
      
      return {
        ...state,
        projects: updatedProjects,
        currentSite: site
      };
    }
    case 'SET_CURRENT_SITE':
      return {
        ...state,
        currentSite: action.payload
      };
    case 'ADD_RISK':
      return {
        ...state,
        risks: [...state.risks, action.payload]
      };
    case 'UPDATE_RISK':
      return {
        ...state,
        risks: state.risks.map(risk => 
          risk.id === action.payload.id ? action.payload : risk
        )
      };
    case 'DELETE_RISK':
      return {
        ...state,
        risks: state.risks.filter(risk => risk.id !== action.payload)
      };
    default:
      return state;
  }
}

export function SiteProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(siteReducer, initialState);

  return (
    <SiteContext.Provider value={{ state, dispatch }}>
      {children}
    </SiteContext.Provider>
  );
}

export function useSite() {
  const context = useContext(SiteContext);
  if (context === undefined) {
    throw new Error('useSite must be used within a SiteProvider');
  }
  return context;
}