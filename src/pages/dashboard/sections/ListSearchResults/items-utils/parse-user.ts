export const parseUser = (repository)=>{
    return({
        bio: repository?.node?.bio,
        name: repository?.node.name,
        email: repository?.node?.email,
        login: repository?.node?.login,
        company: repository?.node?.company,
        location: repository?.node?.location,
        isViewer: repository?.node?.isViewer,
        avatarUrl: repository?.node?.avatarUrl,
        followers: repository?.node?.followers?.totalCount,
        following: repository?.node?.following?.totalCount,
        repositories: repository?.node?.repositories?.totalCount,
    })
}