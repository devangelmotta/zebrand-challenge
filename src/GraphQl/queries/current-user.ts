import { gql } from '@apollo/client'

export const infoCurrentUser = gql`
query userInfo{ 
    viewer { 
      login
      avatarUrl
      bio
      company
      email
      location
      name
      projectsUrl
      repositories(first: 10){
        nodes{
          name
        }
      }
  
      
    }
  }
`

