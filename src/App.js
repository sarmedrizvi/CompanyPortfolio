import React from 'react';
import './App.css';
import { Header } from './Component/Header-Component';
import { Body } from './Component/Body/Body'
import {About} from './Component/About/About'
import {Team} from './Component/Team/Team'
class App extends React.Component {

  render() {
    return (
      <div className='Container'>
        <Header />
        <Body />
        <About/>
        <Team/>
      </div>
    );
  }
}

export default App;
