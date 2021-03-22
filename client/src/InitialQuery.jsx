import React from 'react'
import { useQuery, gql } from "@apollo/client";



const bookList = gql`
  query {
    books {
      title
      author
    }
  }
  `
export default function ExchangeRates() {
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