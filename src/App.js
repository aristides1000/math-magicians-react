import React, { useState } from 'react';
import Calculator from './components/Calculator';

function App() {
  const [element, setElement] = useState(0);

  return (
    <div>
      <Calculator
        next={element.next}
        operation={element.operation}
        total={element.total}
        setElement={setElement}
      />
    </div>
  );
}

export default App;
