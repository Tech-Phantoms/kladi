import React from 'react';
import './App.css';
import Counter from './components/Counter'
import JoinUs from './components/JoinUs';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h3>Welcome to Kladi!</h3>
        <Counter/>
        <p>
          A easy to use state management library for React.
        </p>
      </header>
      <JoinUs/>
    </div>
  );
}

export default App;
