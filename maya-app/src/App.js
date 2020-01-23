import React, { Component } from 'react';
import Ninjas from './Ninjas';

function App() {
  return (
    <div className="App">
      <h1>My first react app</h1>
      <p>Welcome!</p>
      <Ninjas name="Bob" age="250" belt="pink"/>
    </div>
  );
}

export default App;
