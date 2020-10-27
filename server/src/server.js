require('dotenv').config();
const { ApolloServer } = require('apollo-server');
const mongoose = require('mongoose');

const gql = require('graphql-tag');

const typeDefs = gql`
  type Query {
    sayHi: String!
  }
`;

const resolvers = {
  Query: {
    sayHi: () => 'Hello World!',
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

mongoose.connect(process.env.MONGO_CONNECTION, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

server
  .listen({ port: process.env.PORT })
  .then((res) => console.log(`Server is running on ${res.url}`));
