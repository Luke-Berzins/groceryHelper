const { users, recipes, ingredients } = require('./seeds')

const resolvers = {
  Query: {
    users: () => users,
    ingredients: () => ingredients,
    recipes: () => recipes,
  },
};

module.exports = resolvers;