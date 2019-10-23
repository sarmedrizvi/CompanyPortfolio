import React from 'react';
import './App.css';
import { Header } from './Component/Header-Component';
import { Body } from './Component/Body/Body'
import {About} from './Component/About/About'
import {Team} from './Component/Team/Team'
import {Service} from './Component/Services/Service'
class App extends React.Component {

  render() {
    return (
      <div className='Container'>
        <Header />
        <Body />
        <About/>
        <Team/>
        <Service/>
      </div>
    );
  }
}

export default App;
