import { gql } from '@apollo/client'

export const searchUsers = gql`
query listRepos($queryString: String!){
    rateLimit{
     cost
     remaining
     resetAt
    }
    search(query:$queryString, type:USER, first:20){  
     repositoryCount
     pageInfo{
      endCursor
      startCursor
     }
     edges{
      node{
       ... on User{
        name,
        email,
        login,
        avatarUrl,
        bio,
        company,
        followers{
            totalCount
        }
        following{
            totalCount
        }
        isViewer,
        location,
        repositories{
            totalCount
        }
        url
       }
      }
     }
    }
   }
`


