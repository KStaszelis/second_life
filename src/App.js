import './App.css';
import React, { useState, useEffect, useContext, createContext } from "react";

import {
  BrowserRouter,
  Route,
  Switch,

} from 'react-router-dom';

import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import SignOut from "./components/SignOut"
import "./scss/main.scss";
import {FirebaseContext} from "./components/Firebase";

export const AuthContext = createContext(null)

const App = () => {
    const [authUserState, setAuthUserState] = useState (null);
    const firebase = useContext(FirebaseContext);

    useEffect(() => {
        const unsubscribe = firebase.auth.onAuthStateChanged(authUser => {
            authUser
                ? setAuthUserState( authUser )
                : setAuthUserState(null);
        })
    }, [])

  return (
      <BrowserRouter>
        <AuthContext.Provider value={authUserState}>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/logowanie" component={Login}/>
          <Route path="/rejestracja" component={Register}/>
          <Route path="/wylogowanie" component={SignOut}/>

        </Switch>
        </AuthContext.Provider>
      </BrowserRouter>

  );

};

export default App;

