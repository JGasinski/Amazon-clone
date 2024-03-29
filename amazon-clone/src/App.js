import React, { useEffect } from "react";
import './App.css';
import Header from './Header';
import Home from './Home' ;
import { BrowserRouter as Router, Switch, Route }
from "react-router-dom";
import Checkout from "./Checkout"
import Login from "./Login"
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";


function App() {
  const [{}, dispatch] = useStateValue();

  React.useEffect(() => {
    // will only run once when the app component loads
    
    auth.onAuthStateChanged(authUser => {
      console.log('The User is >>>', authUser);

      if (authUser) {
        // the user just logeed in / was logged in
        dispatch({
          type: 'SET_USER',
          user: authUser,
        });

      } else {
        //the user is logged out
        dispatch({
          type: 'SET_USER',
          user: null,
        });
      }
    })
  }, [])
  return (
    // BEM
    <Router>
      <div className="app">
         {/*puting header outside switch cuz it will be repeated at firs*/}

        <Switch>
          <Route path="/login">
            <Login />
            <h1>Login page</h1>
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/">
          <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
