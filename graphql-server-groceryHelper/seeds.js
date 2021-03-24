const users = [
  {
    id: 1,
    name: 'jimmy3',
    email: 'test3@gmail.com',
    password: 'password',
  },
  { 

    id: 2,
    name: 'jimmy',
    email: 'test@gmail.com',
    password: 'password',
  },
];

const ingredients = [
  {
    id: 1,
    name: 'Garlic',
    price: 100
  },
  { 

    id: 3,
    name: 'Salt',
    price: 200
  },
  {
    id: 3,
    name: 'Pepper',
    price: 300
  },
  {
    id: 4,
    name: 'Beans',
    price: 1200
  }
]


const recipes = [
  {
    id: 1,
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

    id: 3,
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
    id: 3,
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
    id: 4,
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