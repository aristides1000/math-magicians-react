import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: 0,
    };
  }

  render() {
    const { result } = this.state;
    return (
      <div className="container" id="calculator">
        <div className="row d-flex justify-content-center">
          <div className="col-4">
            <div className="row mt-5">
              <div className="col-12 text-end display-result px-1 border  border-1">
                <p className="py-3 mb-0 fs-4 ">{ result }</p>
              </div>
            </div>
            <div className="row">
              <button type="button" className="col-3 d-flex justify-content-center align-items-center py-3 border  border-1">
                AC
              </button>
              <button type="button" className="col-3 d-flex justify-content-center align-items-center py-3 border  border-1">
                +/-
              </button>
              <button type="button" className="col-3 d-flex justify-content-center align-items-center py-3 border  border-1">
                %
              </button>
              <button type="button" className="col-3 d-flex justify-content-center align-items-center py-3 mathematical-operator border  border-1">
                ÷
              </button>
            </div>
            <div className="row">
              <button type="button" className="col-3 d-flex justify-content-center align-items-center py-3 border  border-1">
                7
              </button>
              <button type="button" className="col-3 d-flex justify-content-center align-items-center py-3 border  border-1">
                8
              </button>
              <button type="button" className="col-3 d-flex justify-content-center align-items-center py-3 border  border-1">
                9
              </button>
              <button type="button" className="col-3 d-flex justify-content-center align-items-center py-3 mathematical-operator border  border-1">
                x
              </button>
            </div>
            <div className="row">
              <button type="button" className="col-3 d-flex justify-content-center align-items-center py-3 border  border-1">
                4
              </button>
              <button type="button" className="col-3 d-flex justify-content-center align-items-center py-3 border  border-1">
                5
              </button>
              <button type="button" className="col-3 d-flex justify-content-center align-items-center py-3 border  border-1">
                6
              </button>
              <button type="button" className="col-3 d-flex justify-content-center align-items-center py-3 mathematical-operator border  border-1">
                -
              </button>
            </div>
            <div className="row">
              <button type="button" className="col-3 d-flex justify-content-center align-items-center py-3 border  border-1">
                1
              </button>
              <button type="button" className="col-3 d-flex justify-content-center align-items-center py-3 border  border-1">
                2
              </button>
              <button type="button" className="col-3 d-flex justify-content-center align-items-center py-3 border  border-1">
                3
              </button>

              <button type="button" className="col-3 d-flex justify-content-center align-items-center py-3 border  border-1 mathematical-operator">
                +
              </button>
            </div>
            <div className="row">
              <button type="button" className="col-6 d-flex justify-content-center align-items-center py-3 border  border-1">
                0
              </button>
              <button type="button" className="col-3 d-flex justify-content-center align-items-center py-3 border  border-1">
                .
              </button>
              <button type="button" className="col-3 d-flex justify-content-center align-items-center py-3 border  border-1 mathematical-operator">
                =
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
