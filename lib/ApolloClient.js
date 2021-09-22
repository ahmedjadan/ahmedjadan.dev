
// import {
//     ApolloClient,
//     InMemoryCache,
//     gql,
//     createHttpLink
// } from "@apollo/client";
// import { setContext } from '@apollo/client/link/context';


// const httpLink = createHttpLink({
//     uri: 'https://api.github.com/graphql',
// });

// const authLink = setContext((_, { headers }) => {
//     // get the authentication token from local storage if it exists
//     // return the headers to the context so httpLink can read them
//     return {
//         headers: {
//             ...headers,
//             authorization: `Bearer ${process.env.GITHUB_TOKEN}`
//         }
//     }
// });

// export const client = new ApolloClient({
//     link: authLink.concat(httpLink),
//     cache: new InMemoryCache()
// });

// export const query = gql`
// {
//     viewer {
//       login
//       pinnedItems(first: 6) {
//         totalCount
//         edges {
//           node {
//             ... on Repository {
//               id
//               description
//               name
//               url
//               stargazerCount
//               stargazers {
//                 totalCount
//               }
//               forkCount
//               primaryLanguage {
//                 name
//                 color
//               }
//               pushedAt
//               languages(first: 3) {
//                 edges {
//                   node {
//                     color
//                     name
//                   }
//                 }
//                 nodes {
//                   color
//                   name
//                 }
//               }
//             }
//           }
//         }
//       }
//     }
//   }

//  `
