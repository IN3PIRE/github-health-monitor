import { RepoHealth, HealthConfig } from './types.js';
export declare function getConfig(): HealthConfig;
export declare function daysBetween(date1: string, date2: string): number;
export declare function formatHealthSummary(health: RepoHealth): string;
