import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min';
import { Route, Switch } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Calculator from './Calculator';
import Quote from './Quote';

const Home = () => (
  <>
    <Navbar />
    <Switch>
      <Route exact path="/">
        <div>
          <h1>Hello from Home page</h1>
        </div>
      </Route>
      <Route path="/Calculator">
        <Calculator />
      </Route>
      <Route path="/Quote">
        <Quote />
      </Route>
    </Switch>
  </>
);

export default Home;
