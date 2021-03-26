const users = [
  {
    id: 1,
    name: 'jane',
    email: 'jane@gmail.com',
    password: 'password',
  },
  { 

    id: 2,
    name: 'jimmy',
    email: 'test@gmail.com',
    password: 'password',
  },
  { 
    id: 3,
    name: 'luke',
    email: 'test@gmail.com',
    password: 'password',
  },
  { 
    id: 4,
    name: 'lizzy',
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

    id: 2,
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
    user: 3,
    ingredients: [ ingredients[0], ingredients[2], ingredients[3] ],
    amount: [3, 3, 3]
  },
  { 

    id: 3,
    name: 'Tomato Soup',
    user: 1,
    ingredients: [ ingredients[0], ingredients[2] ],
    amount: [2, 2]
  },
  {
    id: 3,
    name: 'Kale Salad',
    user: 2,
    ingredients: [ ingredients[0], ingredients[2], ingredients[3] ],
    amount: [1, 1, 3]
  },
  {
    id: 4,
    name: 'Grilled Cheese',
    user: 1,
    ingredients: [ ingredients[0], ingredients[1], ingredients[2] ],
    amount: [1, 2, 2]
  },
  {
    id: 5,
    name: 'Breakfast',
    user: 2,
    ingredients: [ ingredients[0], ingredients[1] ],
    amount: [1, 2]
  },
  {
    id: 6,
    name: 'Butter chicken',
    user: 3,
    ingredients: [ ingredients[0], ingredients[2] ],
    amount: [1, 1]
  }
]


module.exports = {
  users,
  ingredients,
  recipes
}