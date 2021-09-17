/* eslint-disable react/forbid-prop-types */
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min';
import PropTypes from 'prop-types';
import calculate from '../logic/calculate';

export default class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.display = this.display.bind(this);
    this.calculate = this.calculate.bind(this);
  }

  display() {
    const { element } = this.props;
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
  }

  calculate(object, button) {
    const { updateState } = this.props;
    let recentObject;
    try {
      recentObject = calculate(object, button);
    } catch {
      recentObject = {
        total: 'Module operation by 0 cannot be executed',
      };
    }

    this.element = recentObject;
    updateState(recentObject);
  }

  render() {
    const { element } = this.props;
    return (
      <div className="container" id="calculator">
        <div className="row d-flex justify-content-center">
          <div className="col-4">
            <div className="row mt-5">
              <div className="col-12 text-end display-result px-1 border  border-1">
                <p className="py-3 mb-0 fs-4 ">{ this.display() }</p>
              </div>
            </div>
            <div className="row">
              <button type="button" className="col-3 d-flex justify-content-center align-items-center py-3 border  border-1" onClick={() => { this.calculate(element, 'AC'); }}>
                AC
              </button>
              <button type="button" className="col-3 d-flex justify-content-center align-items-center py-3 border  border-1" onClick={() => { this.calculate(element, '+/-'); }}>
                +/-
              </button>
              <button type="button" className="col-3 d-flex justify-content-center align-items-center py-3 border  border-1" onClick={() => { this.calculate(element, '%'); }}>
                %
              </button>
              <button type="button" className="col-3 d-flex justify-content-center align-items-center py-3 mathematical-operator border  border-1" onClick={() => { this.calculate(element, '÷'); }}>
                ÷
              </button>
            </div>
            <div className="row">
              <button type="button" className="col-3 d-flex justify-content-center align-items-center py-3 border  border-1" onClick={() => { this.calculate(element, '7'); }}>
                7
              </button>
              <button type="button" className="col-3 d-flex justify-content-center align-items-center py-3 border  border-1" onClick={() => { this.calculate(element, '8'); }}>
                8
              </button>
              <button type="button" className="col-3 d-flex justify-content-center align-items-center py-3 border  border-1" onClick={() => { this.calculate(element, '9'); }}>
                9
              </button>
              <button type="button" className="col-3 d-flex justify-content-center align-items-center py-3 mathematical-operator border  border-1" onClick={() => { this.calculate(element, 'x'); }}>
                x
              </button>
            </div>
            <div className="row">
              <button type="button" className="col-3 d-flex justify-content-center align-items-center py-3 border  border-1" onClick={() => { this.calculate(element, '4'); }}>
                4
              </button>
              <button type="button" className="col-3 d-flex justify-content-center align-items-center py-3 border  border-1" onClick={() => { this.calculate(element, '5'); }}>
                5
              </button>
              <button type="button" className="col-3 d-flex justify-content-center align-items-center py-3 border  border-1" onClick={() => { this.calculate(element, '6'); }}>
                6
              </button>
              <button type="button" className="col-3 d-flex justify-content-center align-items-center py-3 mathematical-operator border  border-1" onClick={() => { this.calculate(element, '-'); }}>
                -
              </button>
            </div>
            <div className="row">
              <button type="button" className="col-3 d-flex justify-content-center align-items-center py-3 border  border-1" onClick={() => { this.calculate(element, '1'); }}>
                1
              </button>
              <button type="button" className="col-3 d-flex justify-content-center align-items-center py-3 border  border-1" onClick={() => { this.calculate(element, '2'); }}>
                2
              </button>
              <button type="button" className="col-3 d-flex justify-content-center align-items-center py-3 border  border-1" onClick={() => { this.calculate(element, '3'); }}>
                3
              </button>

              <button type="button" className="col-3 d-flex justify-content-center align-items-center py-3 border  border-1 mathematical-operator" onClick={() => { this.calculate(element, '+'); }}>
                +
              </button>
            </div>
            <div className="row">
              <button type="button" className="col-6 d-flex justify-content-center align-items-center py-3 border  border-1" onClick={() => { this.calculate(element, '0'); }}>
                0
              </button>
              <button type="button" className="col-3 d-flex justify-content-center align-items-center py-3 border  border-1" onClick={() => { this.calculate(element, '.'); }}>
                .
              </button>
              <button type="button" className="col-3 d-flex justify-content-center align-items-center py-3 border  border-1 mathematical-operator" onClick={() => { this.calculate(element, '='); }}>
                =
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Calculator.propTypes = {
  updateState: PropTypes.func.isRequired,
  element: PropTypes.object.isRequired,
};
