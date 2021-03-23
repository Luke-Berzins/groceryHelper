import { act, render, screen } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';
// The component AND the query need to be exported
import { bookList, InitialQuery } from './InitialQuery';
import { waitForElementToBeRemoved } from "@testing-library/react";


const mocks = [
  {
    request: {
      query: bookList
    },
    result: {
      data: {
        books:  [
          {
            "title": "The Awakening",
            "author": "Kate Chopin"
          },
          {
            "title": "City of Glass",
            "author": "Paul Auster"
          }
        ]
      
      },
    },
  },
];

describe("InitialTests", () => {
  it('should render responses from the database', async () => {
    
    const { getByText } = render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <InitialQuery/>
      </MockedProvider>,
    );
  
    await waitForElementToBeRemoved(() => screen.getByText(/loading/i))
    expect(getByText("Kate Chopin", {exact: false})).toBeInTheDocument();
   
  
  });
})

