const { ApolloServer } = require('apollo-server');
const  typeDefs = require('./schema')
// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.


const books = [
  {
    title: 'The Awakening',
    author: 'Kate Chopin',
  },
  {
    title: 'City of Glass',
    author: 'Paul Auster',
  },
];

const ingredients = [
  {
    title: 'Garlic'
  },
  {
    title: 'Salt'
  },
  {
    title: 'Pepper'
  },
  {
    title: 'Garlic'
  }
]

const resolvers = {
  Query: {
    books: () => books,
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});