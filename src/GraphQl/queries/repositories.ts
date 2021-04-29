import { gql, useQuery, NetworkStatus } from '@apollo/client'

export const searchRepositories = gql`
query listRepos($queryString: String!){
    rateLimit{
     cost
     remaining
     resetAt
    }
    search(query:$queryString, type:REPOSITORY, first:20){  
     repositoryCount
     pageInfo{
      endCursor
      startCursor
     }
     edges{
      node{
       ... on Repository{
        id
        url
        name
        createdAt 
        description 
        isArchived
        isPrivate
        homepageUrl
        commitComments(first: 100) {
          nodes {
            commit {
              repository {
                nameWithOwner
              }
              abbreviatedOid
            }
            body
          }
        }
        languages(first: 5){
          nodes{
            name
          }
        }
        primaryLanguage{
          name
        }
        forks{
          totalCount
        }
        url
        stargazers {
          totalCount
        }
        openIssues: issues(states: OPEN) {
            totalCount
          }
        owner{
         login
         id
         __typename
         url
        }
        assignableUsers{
         totalCount
        }
        licenseInfo{
         key
        }
        defaultBranchRef{
         target{
          ... on Commit{
           history(first:10){
            totalCount
            edges{
             node{
              ... on Commit{
               committedDate
              }
             }
            }
           }
          }
         }
        }
       }
      }
     }
    }
   }
`