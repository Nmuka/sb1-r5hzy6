# Technical Documentation

## Core Technologies Used

### 1. TypeScript
TypeScript is a programming language that adds static types to JavaScript. This means:
- Variables and functions must declare what kind of data they work with
- Helps catch errors before running the code
- Makes code more maintainable and self-documenting

Example from our code:
```typescript
interface FloodMetrics {
  currentLevel: string;
  peakLevel: string;
  criticalLevel: string;
}
```
This defines exactly what data a flood analysis needs.

### 2. React
React is a library for building user interfaces:
- Uses components to break down complex UIs into manageable pieces
- Manages how data flows through the application
- Updates the screen efficiently when data changes

Example component:
```typescript
function MetricCard({ icon, label, value }) {
  return (
    <div className="bg-white p-4">
      {icon}
      <p>{label}</p>
      <p>{value}</p>
    </div>
  );
}
```

### 3. Tailwind CSS
A utility-first CSS framework:
- Provides pre-built classes for styling
- Makes responsive design easier
- Allows quick styling without writing custom CSS

Example usage:
```html
<div className="flex items-center justify-between mb-6">
```
This creates a flexbox container with centered items and margin bottom.

### 4. Leaflet
An open-source mapping library:
- Displays interactive maps
- Allows drawing shapes on maps
- Calculates geographical areas

## Project Structure Explained

### 1. File Organization

```
src/
├── components/           # UI components
│   ├── analysis/        # Analysis-related components
│   ├── dashboard/       # Project management
│   ├── forms/          # Input forms
│   └── layout/         # Page layout components
├── context/            # State management
├── types/              # TypeScript type definitions
└── main.tsx           # Application entry point
```

### 2. Key Files and Their Purpose

#### Entry Point (main.tsx)
```typescript
import { createRoot } from 'react-dom/client';
import App from './App';

createRoot(document.getElementById('root')!).render(<App />);
```
This starts the application by rendering the main App component.

#### State Management (SiteContext.tsx)
```typescript
const SiteContext = createContext<{
  state: SiteState;
  dispatch: React.Dispatch<Action>;
} | undefined>(undefined);
```
- Creates a central store for application data
- Makes data available throughout the application
- Manages how data can be updated

#### Component Types

1. **Container Components**
   - Manage data and state
   - Pass data to presentation components
   - Handle user interactions
   Example: `SiteAnalysisLayout.tsx`

2. **Presentation Components**
   - Display data
   - Receive props from containers
   - Focus on UI
   Example: `MetricCard.tsx`

3. **Form Components**
   - Handle user input
   - Validate data
   - Submit data to state
   Example: `SiteInfoForm.tsx`

### 3. Data Flow

1. **State Management**
   ```typescript
   const { state, dispatch } = useSite();
   ```
   - Components access shared state
   - Update state through dispatch actions
   - State changes trigger re-renders

2. **Props Flow**
   ```typescript
   <MetricCard
     icon={Droplets}
     label="Water Level"
     value="2.5m"
   />
   ```
   - Data passes from parent to child
   - Children communicate up through callbacks

3. **Event Handling**
   ```typescript
   const handleSubmit = (e: React.FormEvent) => {
     e.preventDefault();
     // Process form data
   };
   ```
   - Captures user interactions
   - Updates state accordingly
   - Triggers UI updates

### 4. Key Features Implementation

#### Interactive Maps
```typescript
<MapContainer center={center} zoom={15}>
  <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
  <FeatureGroup>
    <EditControl position="topright" />
  </FeatureGroup>
</MapContainer>
```
- Uses Leaflet for map display
- Enables drawing site boundaries
- Calculates area automatically

#### Disaster Analysis
```typescript
function DisasterAnalysisLayout({ initialDisaster }) {
  const [activeDisaster, setActiveDisaster] = useState(initialDisaster);
  // Render appropriate analysis component
}
```
- Switches between disaster types
- Manages detailed analysis views
- Handles metric updates

#### Risk Assessment
```typescript
interface RiskAssessment {
  severity: 'high' | 'medium' | 'low';
  probability: number;
  impact: number;
}
```
- Structured data modeling
- Standardized risk evaluation
- Visual risk representation

### 5. Best Practices Implemented

1. **Component Organization**
   - Single responsibility principle
   - Reusable components
   - Clear component hierarchy

2. **Type Safety**
   - Interface definitions
   - Enum usage
   - Strict type checking

3. **State Management**
   - Centralized state
   - Immutable updates
   - Action-based modifications

4. **Performance Optimization**
   - Memoization where needed
   - Efficient re-renders
   - Lazy loading of components

### 6. Common Patterns Used

1. **Compound Components**
   ```typescript
   <DisasterAnalysis>
     <DisasterTimeline />
     <ImpactAssessment />
   </DisasterAnalysis>
   ```

2. **Render Props**
   ```typescript
   <EditableMetric
     render={(value, onChange) => (
       <input value={value} onChange={onChange} />
     )}
   />
   ```

3. **Custom Hooks**
   ```typescript
   function useMetrics() {
     const [metrics, setMetrics] = useState({});
     // Custom logic
     return { metrics, updateMetric };
   }
   ```

### 7. Error Handling

```typescript
try {
  // Risky operation
} catch (error) {
  console.error('Operation failed:', error);
  // Handle error appropriately
}
```
- Graceful error handling
- User-friendly error messages
- Error boundary implementation

### 8. Testing Considerations

```typescript
test('renders metric card', () => {
  render(<MetricCard label="Test" value="100" />);
  expect(screen.getByText('Test')).toBeInTheDocument();
});
```
- Component testing
- Integration testing
- State management testing