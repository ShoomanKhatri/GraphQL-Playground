import { ApolloServer, gql } from "apollo-server";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";

const typeDefs = gql`
  type Query {
    greet: String
  }
`;

const resolvers = {
  Query: {
    greet: () => "hello world",
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
  formatError: (err) => {
    console.error("GraphQL Error:", err);
    return err;
  },
  formatResponse: (response) => {
    console.log("GraphQL Response:", response);
    return response;
  },
});

server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`);
});
