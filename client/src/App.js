import './App.css';
import InitialQuery from "./InitialQuery"
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';


const client = new ApolloClient({
  uri: 'http://localhost:4000',
  cache: new InMemoryCache()
})



function App() {
  return (
    <ApolloProvider client={client} >
        <InitialQuery />
    </ApolloProvider  >
  );
}

export default App;
