/* eslint-disable react/forbid-prop-types */
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min';
import PropTypes from 'prop-types';
import calculate from '../logic/calculate';

const results = (object, button, setObject) => {
  const recentObject = calculate(object, button);
  setObject(recentObject);
};

const display = (element) => {
  const { next } = element;
  const { operation } = element;
  const { total } = element;
  let result = null;

  if (next === null && total !== null) {
    if (operation !== null && operation !== undefined) {
      result = `${total} ${operation}`;
    } else {
      result = total;
    }
  } else if (next !== null && total === null) {
    result = next;
  } else if (next !== null && total !== null) {
    if (operation !== null && operation !== undefined) {
      result = `${total} ${operation} ${next}`;
    } else {
      result = total;
    }
  } else if (total === null && next === null) {
    result = 0;
  }
  return result;
};

export default function Calculator(props) {
  const {
    total, next, operation, setElement,
  } = props;
  const element = { total, next, operation };

  return (
    <div className="container" id="calculator">
      <div className="row d-flex justify-content-center">
        <div className="col-4">
          <div className="row mt-5">
            <div className="col-12 text-end display-result px-1 border  border-1">
              <p className="py-3 mb-0 fs-4 ">{ display(element) }</p>
            </div>
          </div>
          <div className="row">
            <button type="button" className="col-3 d-flex justify-content-center align-items-center py-3 border  border-1" onClick={() => { results(element, 'AC', setElement); }}>
              AC
            </button>
            <button type="button" className="col-3 d-flex justify-content-center align-items-center py-3 border  border-1" onClick={() => { results(element, '+/-', setElement); }}>
              +/-
            </button>
            <button type="button" className="col-3 d-flex justify-content-center align-items-center py-3 border  border-1" onClick={() => { results(element, '%', setElement); }}>
              %
            </button>
            <button type="button" className="col-3 d-flex justify-content-center align-items-center py-3 mathematical-operator border  border-1" onClick={() => { results(element, '÷', setElement); }}>
              ÷
            </button>
          </div>
          <div className="row">
            <button type="button" className="col-3 d-flex justify-content-center align-items-center py-3 border  border-1" onClick={() => { results(element, '7', setElement); }}>
              7
            </button>
            <button type="button" className="col-3 d-flex justify-content-center align-items-center py-3 border  border-1" onClick={() => { results(element, '8', setElement); }}>
              8
            </button>
            <button type="button" className="col-3 d-flex justify-content-center align-items-center py-3 border  border-1" onClick={() => { results(element, '9', setElement); }}>
              9
            </button>
            <button type="button" className="col-3 d-flex justify-content-center align-items-center py-3 mathematical-operator border  border-1" onClick={() => { results(element, 'x', setElement); }}>
              x
            </button>
          </div>
          <div className="row">
            <button type="button" className="col-3 d-flex justify-content-center align-items-center py-3 border  border-1" onClick={() => { results(element, '4', setElement); }}>
              4
            </button>
            <button type="button" className="col-3 d-flex justify-content-center align-items-center py-3 border  border-1" onClick={() => { results(element, '5', setElement); }}>
              5
            </button>
            <button type="button" className="col-3 d-flex justify-content-center align-items-center py-3 border  border-1" onClick={() => { results(element, '6', setElement); }}>
              6
            </button>
            <button type="button" className="col-3 d-flex justify-content-center align-items-center py-3 mathematical-operator border  border-1" onClick={() => { results(element, '-', setElement); }}>
              -
            </button>
          </div>
          <div className="row">
            <button type="button" className="col-3 d-flex justify-content-center align-items-center py-3 border  border-1" onClick={() => { results(element, '1', setElement); }}>
              1
            </button>
            <button type="button" className="col-3 d-flex justify-content-center align-items-center py-3 border  border-1" onClick={() => { results(element, '2', setElement); }}>
              2
            </button>
            <button type="button" className="col-3 d-flex justify-content-center align-items-center py-3 border  border-1" onClick={() => { results(element, '3', setElement); }}>
              3
            </button>

            <button type="button" className="col-3 d-flex justify-content-center align-items-center py-3 border  border-1 mathematical-operator" onClick={() => { results(element, '+', setElement); }}>
              +
            </button>
          </div>
          <div className="row">
            <button type="button" className="col-6 d-flex justify-content-center align-items-center py-3 border  border-1" onClick={() => { results(element, '0', setElement); }}>
              0
            </button>
            <button type="button" className="col-3 d-flex justify-content-center align-items-center py-3 border  border-1" onClick={() => { results(element, '.', setElement); }}>
              .
            </button>
            <button type="button" className="col-3 d-flex justify-content-center align-items-center py-3 border  border-1 mathematical-operator" onClick={() => { results(element, '=', setElement); }}>
              =
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

Calculator.defaultProps = {
  next: null,
  operation: null,
  total: 0,
};

Calculator.propTypes = {
  next: PropTypes.any,
  operation: PropTypes.any,
  total: PropTypes.any,
  setElement: PropTypes.func.isRequired,
};
