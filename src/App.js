import React from 'react';
import Board from './components/Board';
import './App.css'; 

function App() {
  return (
    <div className="App">
      <div className="container">
          <Board title="To Do" />
          <Board title="Doing" />
          <Board title="Done" />
        </div>
      </div>
  );
}

export default App;
