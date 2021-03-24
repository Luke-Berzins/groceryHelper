const { gql } = require('apollo-server');


// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.


const typeDefs = gql`


# type defines the queryable fields for every book in our data source.

type User {
  id: ID! 
  name: String!
  email: String!
  password: String!
}

type Ingredient {
  id: ID!
  name: String!
  price: Int!
}

type Recipe {
  id: ID!
  name: String!
  user: User
  ingredients: [Ingredient]!
  amount: [Int]
}


# The "Query" type is special: it lists all of the available queries that
# clients can execute, along with the return type for each. In this
# case, the "books" query returns an array of zero or more Books (defined above).
type Query {
  ingredients : [Ingredient]
  recipes : [Recipe]
  users : [User]
}
`;

module.exports = typeDefs;