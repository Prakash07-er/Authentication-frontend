import React from 'react'
import Login from "./components/Login"
import Navbar from "./components/Navbar"
import './App.css'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import SignUp from './components/SignUp';
import ResetPassword from './components/ResetPassword';
import NewPassword from './components/NewPassword';
import Home from './components/Home';

function App() {
  return (
    <Router>
          <Navbar />
        <div className="App">
        <Switch>
          <Route path="/" component={Home} exact /> 
          <Route path="/login" component={Login} exact /> 
          <Route path="/signup" component={SignUp} exact /> 
          <Route path="/resetpassword" component={ResetPassword} exact /> 
          <Route path="/newpassword/:token" component={NewPassword} exact /> 
        </Switch>
        </div>
    </Router>
  );
}

export default App;

