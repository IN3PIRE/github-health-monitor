import { DEFAULT_CONFIG } from './types.js';
export function getConfig() {
    return {
        staleBranchDays: parseInt(process.env.STALE_BRANCH_DAYS || '30'),
        oldPRDays: parseInt(process.env.OLD_PR_DAYS || '14'),
        unresponsiveIssueDays: parseInt(process.env.UNRESPONSIVE_ISSUE_DAYS || '7')
    };
}
export function daysBetween(date1, date2) {
    const d1 = new Date(date1).getTime();
    const d2 = new Date(date2).getTime();
    return Math.floor((d2 - d1) / (1000 * 60 * 60 * 24));
}
export function formatHealthSummary(health) {
    return `Health check complete:
- Stale branches: ${health.staleBranches.length}
- Old PRs: ${health.oldPRs.length}
- Unresponsive issues: ${health.unresponsiveIssues.length}
- Security alerts: ${health.securityAlerts.length}`;
}
