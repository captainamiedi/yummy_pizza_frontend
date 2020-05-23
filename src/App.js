import React from 'react';
import { Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './components/Navbar';
import PizzaList from './components/PizzaList';
import Details from './components/Details';
import Cart from './components/Cart/Cart';
import Modal from './components/Modal';
import Default from './components/Default';
import Checkout from './components/Checkout/Checkout';

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Switch>
        <Route exact path="/" component={PizzaList} />
        <Route path="/details" component={Details} />
        <Route path="/cart" component={Cart} />
        <Route path="/order" component={Checkout} />
        <Route component={Default} />
      </Switch>
      <Modal />
    </React.Fragment>
  );
}

export default App;
