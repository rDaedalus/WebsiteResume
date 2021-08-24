import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const Body = () => {
  return (
    <p>
      Hello, im <code>rDaedalus</code>
    </p>
  );

};




class Header extends Component {
  render() {
    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Body />
      </header>

    );

  }
}

function App() {
  return (
    <div className="App">

      <Header />


    </div>
  );
}

export default App;
