import React from 'react';
import Calculator from './components/Calculator';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      element: {
        next: null,
        operation: null,
        total: null,
      },
    };
    this.updateState = this.updateState.bind(this);
  }

  updateState(object) {
    this.setState(
      { element: object },
    );
  }

  render() {
    const { element } = this.state;
    return (
      <div>
        <Calculator
          updateState={this.updateState}
          element={element}
        />
      </div>
    );
  }
}
export default App;
