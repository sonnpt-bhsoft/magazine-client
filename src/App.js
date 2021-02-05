import React, { useEffect } from 'react'
import {
  BrowserRouter as Router,
  Route, Switch
} from 'react-router-dom'
import './App.css';
import { useDispatch, useSelector } from 'react-redux'
import Faculty from './containers/Faculty';
import Home from './containers/Home';
import Login from './containers/Login';
import Contribution from './containers/Contribution';
import { isUserLoggedIn } from './actions/auth.action'
import Profile from './containers/Profile';

function App() {

    const dispatch = useDispatch()
    const auth = useSelector(state => state.auth)

    useEffect(() => {
      if (!auth.authenticate) {
        dispatch(isUserLoggedIn())
      }
    }, [auth.authenticate])

    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/faculty" component={Faculty} />
          <Route path="/login" component={Login} />
          <Route path="/contribution" component={Contribution} />
          <Route path="/profile" component={Profile} />

        </Switch>
      </Router>
    );
  }

export default App;
