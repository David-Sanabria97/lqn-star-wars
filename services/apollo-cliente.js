import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://swapi-graphql.eskerda.vercel.app/",
  cache: new InMemoryCache(),
});
