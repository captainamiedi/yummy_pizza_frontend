import React from 'react';
import { Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './components/Navbar';

function App() {
  return (
    <React.Fragment>
      <Switch>
        <Route exact path="/" component={Navbar} />
      </Switch>
    </React.Fragment>
  );
}

export default App;
