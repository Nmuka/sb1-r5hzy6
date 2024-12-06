// Risk Assessment Types
export type RiskSeverity = 'high' | 'medium' | 'low';
export type RiskCategory = 'equipment' | 'environmental' | 'security' | 'operational' | 'personnel';
export type RiskStatus = 'active' | 'mitigated' | 'monitoring';

export interface RiskFactor {
  id: string;
  name: string;
  weight: number;
  category: RiskCategory;
  description: string;
}

export interface RiskScore {
  probability: number;
  impact: number;
  total: number;
}

export interface RiskAssessment {
  id: string;
  category: RiskCategory;
  title: string;
  description: string;
  severity: RiskSeverity;
  status: RiskStatus;
  score: RiskScore;
  factors: RiskFactor[];
  mitigationSteps: string[];
  lastUpdated: string;
  nextReview: string;
}

export interface RiskMetrics {
  totalRisks: number;
  highRisks: number;
  mediumRisks: number;
  lowRisks: number;
  mitigatedRisks: number;
  risksByCategory: Record<RiskCategory, number>;
}