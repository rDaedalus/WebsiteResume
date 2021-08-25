
import React, { Component } from 'react';
import './App.css';
import Body from './components/Body';
import Header from './components/Header';

export default class App extends Component {

  render() {

    return (
      <div className="App">
        <Header title="Hello from App" myFunc={(a, b) => a + b} />
        <Body text="i am radaedlus" myFunc={(a, b) => a + b} />
      </div>
    );
  }

}
