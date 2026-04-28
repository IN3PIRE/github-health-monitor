export declare function GitHub____list_branches____mcp({ owner, repo, perPage }: {
    owner: string;
    repo: string;
    perPage?: number;
}): Promise<any>;
export declare function GitHub____list_pull_requests____mcp({ owner, repo, state, perPage }: {
    owner: string;
    repo: string;
    state?: 'open' | 'closed' | 'all';
    perPage?: number;
}): Promise<any>;
export declare function GitHub____search_issues____mcp({ query, perPage }: {
    query: string;
    perPage?: number;
}): Promise<any>;
export declare function GitHub____get_commit____mcp({ owner, repo, sha }: {
    owner: string;
    repo: string;
    sha: string;
}): Promise<any>;
export declare function GitHub____get_security_alerts____mcp({ owner, repo }: {
    owner: string;
    repo: string;
}): Promise<any>;
