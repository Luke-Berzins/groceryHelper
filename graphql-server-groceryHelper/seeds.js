const users = [
  {
    name: 'jimmy3',
    email: 'test3@gmail.com',
    password: 'password',
  },
  {
    name: 'jimmy',
    email: 'test@gmail.com',
    password: 'password',
  },
];

const ingredients = [
  {
    name: 'Garlic',
    price: 100
  },
  {
    name: 'Salt',
    price: 200
  },
  {
    name: 'Pepper',
    price: 300
  },
  {
    name: 'Beans',
    price: 1200
  }
]


const recipes = [
  {
    name: 'Shrimp Pasta',
    user: {
      name: 'jimmy3',
      email: 'test3@gmail.com',
      password: 'password',
    },
    ingredients: [
      {
        name: 'Garlic',
        price: 100
      },
      {
        name: 'Salt',
        price: 200
      },
      {
        name: 'Pepper',
        price: 300
      }
    ],
    amount: [3, 3, 3]
  },
  {
    name: 'Tomato Soup',
    user: {
      name: 'jimmy3',
      email: 'test3@gmail.com',
      password: 'password',
    },
    ingredients: [
      {
        name: 'Salt',
        price: 200
      },
      {
        name: 'Pepper',
        price: 300
      }
    ],
    amount: [2, 2]
  },
  {
    name: 'Kale Salad',
    user: {
      name: 'jimmy',
      email: 'test@gmail.com',
      password: 'password',
    },
    ingredients: [
      {
        name: 'Salt',
        price: 200
      },
      {
        name: 'Pepper',
        price: 300
      }
    ],
    amount: [1, 1]
  },
  {
    name: 'Grilled Cheese',
    user: {
      name: 'jimmy',
      email: 'test@gmail.com',
      password: 'password',
    },
    ingredients: [
      {
        name: 'Salt',
        price: 200
      },
      {
        name: 'Pepper',
        price: 300
      }
    ],
    amount: [1, 2]
  }
]


module.exports = {
  users,
  ingredients,
  recipes
}