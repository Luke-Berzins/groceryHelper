const { users, recipes, ingredients } = require('./seeds')

const resolvers = {
  Query: {
    user: () => users,
    ingredients: () => ingredients,
    recipe: () => recipes,
  },
};

module.exports = resolvers;