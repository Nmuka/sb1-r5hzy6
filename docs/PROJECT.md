# Site Analysis & Risk Assessment Application Documentation

## Overview
This application is a comprehensive web-based tool for analyzing sites and assessing various risks, particularly focusing on natural disasters. It's built using modern web technologies and provides an interactive interface for managing projects, sites, and performing detailed analysis.

## Project Structure

### Core Components

#### 1. Project Management (`/src/components/dashboard/`)
- **Dashboard.tsx**: Main control center for managing projects
- **ProjectList.tsx**: Displays all projects in an interactive list
- **ProjectDetails.tsx**: Shows detailed information about a specific project
- **NewProjectForm.tsx**: Form for creating new projects

#### 2. Site Management (`/src/components/forms/`)
- **SiteInfoForm.tsx**: Handles site information input including:
  - Basic site details
  - Location mapping
  - Boundary definition
  - Area calculations

#### 3. Analysis Components (`/src/components/analysis/`)
- **SiteAnalysisLayout.tsx**: Main layout for all analysis features
- **SiteOverview.tsx**: General site information display
- **BiodiversityAnalysis.tsx**: Environmental impact assessment
- **RiskAssessmentForm.tsx**: Risk evaluation input form
- **RiskMatrix.tsx**: Visual representation of risk levels

#### 4. Disaster Analysis (`/src/components/analysis/disasters/`)
Each disaster type has its own analysis module:
- **EarthquakeAnalysis.tsx**
- **FloodAnalysis.tsx**
- **AvalancheAnalysis.tsx**
- **LandslideAnalysis.tsx**

##### Detailed Disaster Analysis (`/disasters/detailed/`)
More in-depth analysis tools:
- **DisasterAnalysisLayout.tsx**: Layout for detailed analysis
- **DisasterTimeline.tsx**: Event timeline tracking
- **ImpactAssessment.tsx**: Damage and impact evaluation
- **RiskPrediction.tsx**: Future risk assessment
- **MitigationStrategies.tsx**: Risk reduction planning

### Shared Components (`/src/components/analysis/disasters/shared/`)
- **MetricCard.tsx**: Reusable metric display component
- **EditableMetric.tsx**: Interactive metric editing component

## Key Features

### 1. Project Management
- Create and manage multiple projects
- Track project details and timeline
- Organize sites within projects

### 2. Site Analysis
- Interactive map for site boundary definition
- Area calculation
- Environmental context analysis
- Biodiversity assessment

### 3. Risk Assessment
- Comprehensive risk evaluation
- Risk matrix visualization
- Risk categorization and prioritization

### 4. Disaster Analysis
Each disaster type (Earthquake, Flood, Avalanche, Landslide) includes:
- Real-time metric monitoring
- Impact assessment
- Historical data tracking
- Prediction modeling
- Mitigation planning

### 5. Data Management
- Context-based state management
- Real-time updates
- Data persistence

## User Workflow

1. **Project Creation**
   - Access dashboard
   - Click "New Project"
   - Fill in project details
   - Submit project information

2. **Site Addition**
   - Select project
   - Click "Add Site"
   - Input site details
   - Define site boundary on map
   - Save site information

3. **Analysis**
   - Select site for analysis
   - Choose analysis type:
     - Basic site analysis
     - Risk assessment
     - Disaster analysis
   - View and edit metrics
   - Generate reports

4. **Disaster Analysis Workflow**
   - Select disaster type
   - View basic analysis
   - Access detailed analysis via "Detailed Analysis" button
   - Track timeline
   - Assess impacts
   - Predict risks
   - Plan mitigation strategies

## Technical Implementation

### State Management
- Uses React Context API
- Centralized state through SiteContext
- Type-safe with TypeScript

### UI Components
- Built with React
- Styled using Tailwind CSS
- Interactive elements with real-time updates
- Responsive design for all screen sizes

### Map Integration
- Uses Leaflet for mapping
- Interactive boundary drawing
- Area calculation
- Location marking

### Data Visualization
- Dynamic charts and graphs
- Interactive metrics
- Real-time updates
- Visual risk representation

## Future Enhancements
1. Advanced data analytics
2. Machine learning integration
3. Real-time monitoring
4. Mobile application
5. API integration
6. Automated reporting
7. Collaborative features

## Maintenance
- Regular updates to risk assessment models
- Data backup and security
- Performance optimization
- Bug fixes and improvements