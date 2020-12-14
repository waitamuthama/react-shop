import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import './bootstrap/bootstrap.css';
import '@fortawesome/fontawesome-free/css/all.css';
import Cart from './Components/Cart'
import Details from './Components/Details';
import Productlist from './Components/ProductList';
import Navbar from './Components/Navbar';
import Default from './Components/Default';
import Modal from './Components/Modal';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Productlist} />
          <Route path="/details" component={Details} />
          <Route path="/cart" component={Cart} />
          <Route component={Default} />
        </Switch>
        <Modal />
      </React.Fragment>
    );
  }
}
export default App;