import React from 'react'
import { useQuery, gql } from "@apollo/client";



const groceryList = gql`
  {
    recipes {
      name
        ingredients {
          name
          price
        }
      amount
    }
  }  
  `


export default function InitialQuery(props) {
  const { loading, error, data } = useQuery(groceryList);
  console.log(data)

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  let total = 0;
  return data.recipes.map(({ name, amount, ingredients}) => (
    <div >
      <h1>
        {name}:
      </h1>
      <p>
        { 
        ingredients.map( (ingredient, index) => { 
          const ingredientTotal = ingredient.price * amount[index] * .01;
          total += ingredientTotal;

          return <p key={ingredient.name}>{ingredient.name} @ {'$' + ingredient.price * .01} x {amount[index]} : {'$' + ingredientTotal}</p>
        })}
      </p>
      <p>Total : {'$' + total}</p>
          <div style={{ display: 'none' }}>{total = 0}

        </div>
  </div>
  ));
}

