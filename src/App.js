import React from 'react';
import Hello from './sayHello'

function App() {

  const sayHello = () => {
    console.log("Hello");
  };

  return (
    <div>
      <h1>This is the app component</h1>
      <Hello />
    </div>
  );
}

export default App;