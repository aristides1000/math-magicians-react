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
        <div className="container-fluid px-3 pt-3">
          <div className="row">
            <div className="col-12">
              <h2>Welcome to our page!</h2>
            </div>
            <div className="col-12 pt-2">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus lobortis velit id nibh pretium eleifend.
                Duis laoreet felis mauris, commodo pulvinar diam commodo ac.
                Sed ac ultrices quam, et scelerisque sapien. Sed vulputate dui ligula.
                Vivamus at tempor lacus.
                Praesent sit amet iaculis ipsum, quis feugiat nunc.
                Mauris facilisis condimentum lorem, vel fermentum magna euismod non.
                Aenean interdum enim mauris, vel convallis tortor egestas et.
              </p>
            </div>
            <div className="col-12">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus lobortis velit id nibh pretium eleifend.
                Duis laoreet felis mauris, commodo pulvinar diam commodo ac.
                Sed ac ultrices quam, et scelerisque sapien. Sed vulputate dui ligula.
                Vivamus at tempor lacus.
                Praesent sit amet iaculis ipsum, quis feugiat nunc.
                Mauris facilisis condimentum lorem, vel fermentum magna euismod non.
                Aenean interdum enim mauris, vel convallis tortor egestas et.
              </p>
            </div>
          </div>
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
