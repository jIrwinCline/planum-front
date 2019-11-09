import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

//pages
import home from './pages/home';
import login from './pages/login';


function App() {
  return (
    <div className="App">
    <Router>
      <Switch>
        <Route exact path='/' component={home}/>
        <Route path='/login' component={login}/>
      </Switch>
    </Router>
    </div>
  );
}

export default App;
