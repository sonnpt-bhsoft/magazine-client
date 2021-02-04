import {
  BrowserRouter as Router,
  Route, Switch
} from 'react-router-dom'
import './App.css';
import Faculty from './containers/Faculty';
import Home from './containers/Home';
import Login from './containers/Login';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route  path="/faculty" component={Faculty} />
        <Route  path="/login" component={Login} />
        
      </Switch>
    </Router>
  );
}

export default App;
