/* --- STATE --- */
export interface GithubState {
    users: Array<any>;
    repositories: Array<any>;
    profile: object;
    scope_search?: scopeSearchType;
}

export enum scopeSearchType {
    "USER",
    "REPOSITORIES",
    "ALL"
}
