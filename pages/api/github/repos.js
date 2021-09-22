import {
    ApolloClient,
    InMemoryCache,
    gql,
    createHttpLink
} from "@apollo/client";

import { setContext } from '@apollo/client/link/context';
// const query = `{
//     viewer {
//       pinnedItems(first: 6) {
//         nodes {
//           ... on Repository {
//             id
//             url
//             name
//             description
//             stargazerCount
//             forkCount
//             primaryLanguage {
//               name
//               color
//             }
//             owner {
//               login
//             }
//           }
//         }
//       }
//     }
//   }`;


export default async (req, res) => {
    // const response = await fetch('https://api.github.com/graphql', {
    //     method: 'POST',
    //     headers: {
    //         authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
    //     },
    //     body: JSON.stringify({ query }),
    // }).then((r) => r.json());

    // return res.status(200).json({ repos: response.data });
    const httpLink = createHttpLink({
        uri: 'https://api.github.com/graphql',
    });

    const authLink = setContext((_, { headers }) => {
        return {
            headers: {
                ...headers,
                authorization: `Bearer ${process.env.GITHUB_TOKEN}`
            }
        }
    });

    const client = new ApolloClient({
        link: authLink.concat(httpLink),
        cache: new InMemoryCache()
    });

    const { data } = await client.query({
        query: gql`
      
    {
          viewer {
            login
            pinnedItems(first: 6) {
              totalCount
              edges {
                node {
                  ... on Repository {
                    id
                    description
                    name
                    url
                    stargazerCount
                    stargazers {
                      totalCount
                    }
                    forkCount
                    primaryLanguage {
                      name
                      color
                    }
                    pushedAt
                    languages(first: 3) {
                      edges {
                        node {
                          color
                          name
                        }
                      }
                      nodes {
                        color
                        name
                      }
                    }
                  }
                }
              }
            }
          }
        }
      `
    })
    // const { data } = await client.query({
    //   query: query
    // })
    // const pinnedItems = viewer?.pinnedItems.edges.map(({ node }) => node)
    // console.log("pinnedItems", pinnedItems)

    return res.json(data)
}


