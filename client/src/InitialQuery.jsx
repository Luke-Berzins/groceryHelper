import React from 'react'
import { useQuery, gql } from "@apollo/client";
import { ApolloProvider } from '@apollo/client';


export const bookList = gql`
  {
    books {
      title
      author
    }
  }  
  `


export function InitialQuery(props) {
  
  const { loading, error, data } = useQuery(bookList);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return data.books.map(({ title, author }) => (
    <div key={title}>
      <p>
        {title}: {author}
      </p>
  </div>
  ));
}

