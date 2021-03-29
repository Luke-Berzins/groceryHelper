import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import './App.css';
import Landing from './components/pages/landing/Landing'
import Dashboard from './components/pages/dashboard/Dashboard'




function App() {
  return (
        <Router>
          <Switch>
          <Route path='/dashboard'>
              <Dashboard />
            </Route> 
            <Route path='/'>
              <Landing />
            </Route> 
          </Switch>
        </Router>
  );
}

export default App;
