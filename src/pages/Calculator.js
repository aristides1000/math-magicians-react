import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min';
import App from '../App';

const Calculator = () => (
  <div className="container-fluid px-3">
    <div className="row">
      <div className="col-6 pt-5">
        <h2>Let&apos;s do some math!</h2>
      </div>
      <div className="col-6">
        <App />
      </div>
    </div>
  </div>
);

export default Calculator;
