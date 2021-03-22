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

export default function InitialQuery() {
  const { loading, error, data } = useQuery(bookList);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return data.books.map(({ title, author }) => (
    <div >
      <p>
        {title}: {author}
      </p>
    </div>
  ));
}