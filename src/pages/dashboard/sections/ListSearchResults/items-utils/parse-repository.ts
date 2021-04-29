export const parseRepository = (repository)=>{
    return({
        name: repository?.node?.name,
        create: repository?.node?.createdAt,
        description: repository?.node?.description,
        isArchive: repository?.node?.isArchived,
        starts: repository?.node?.stargazers?.totalCount,
        primaryLanguage: repository?.node?.primaryLanguage?.name,
        owner: repository?.node?.owner?.url,
        openIssues: repository?.node?.openIssues?.totalCount,
        license: repository?.node?.licenseInfo?.key,
        languages: repository?.node?.languages?.nodes,
        forks: repository?.node?.forks?.totalCount,
        commitComments: repository?.node?.commitComments?.nodes
    })
}