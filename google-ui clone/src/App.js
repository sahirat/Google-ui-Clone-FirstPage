import React from 'react';
import './App.css';
import Home from './Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Search from './Search';

function App()
{
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/Search">
            <Search />
          </Route>
          <Route path="/">
          <Home />
          </Route>
        </Switch>
    </Router>
      
    </div>
  );
}

export default App;
