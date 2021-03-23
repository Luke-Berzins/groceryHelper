const { books, ingredients } = require('./seeds')

const resolvers = {
  Query: {
    books: () => books,
    ingredients: () => ingredients,
  },
};

module.exports = resolvers;