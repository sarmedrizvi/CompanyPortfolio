import React from 'react';
import './App.css';
import { Header } from './Component/Header-Component';
import { Body } from './Component/Body/Body'
class App extends React.Component {

  render() {
    return (
      <div className='Container'>
        <Header />
        <Body />
      </div>
    );
  }
}

export default App;
