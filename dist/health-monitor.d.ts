import { RepoHealth, HealthConfig } from './types.js';
export declare function collectHealthData(owner: string, repo: string, config: HealthConfig): Promise<RepoHealth>;
