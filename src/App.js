import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min';
import Calculator from './components/Calculator';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      operatingVariable: true,
    };
  }

  render() {
    const { operatingVariable } = this.state;
    if (operatingVariable) {
      return (
        <Calculator />
      );
    }
    return (
      <Calculator />
    );
  }
}

export default App;
