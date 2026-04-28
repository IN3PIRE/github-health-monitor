import { GitHub____get_security_alerts____mcp } from './mcp-github-wrapper.js';
import { SecurityAlert, HealthConfig } from './types.js';
import { daysBetween } from './utils.js';

export async function collectSecurityAlerts(
 owner: string,
 repo: string,
 config: HealthConfig
): Promise<SecurityAlert[]> {
 const now = new Date().toISOString();
 
 try {
   const alerts = await GitHub____get_security_alerts____mcp({ owner, repo });
   
   return alerts.map(alert => ({
     package: alert.package,
     severity: alert.severity,
     daysOpen: daysBetween(alert.createdAt, now)
   }));
 } catch (error) {
   console.warn('Security monitoring disabled:', error);
   return [];
 }
}