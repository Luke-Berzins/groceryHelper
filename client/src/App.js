import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import './App.css';
import Landing from './components/pages/landing/Landing'




function App() {
  return (
        <Router>
          <Switch>
            <Route path='/'>
              <Landing />
            </Route> 
          </Switch>
        </Router>
  );
}

export default App;
