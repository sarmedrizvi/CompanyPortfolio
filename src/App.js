import React from 'react';
import './App.css';
import { Header } from './Component/Header-Component';
import { Body } from './Component/Body/Body'
import {About} from './Component/About/About'
import {Team} from './Component/Team/Team'
import {Service} from './Component/Services/Service'
import {Testimonial} from './Component/Testimonial/Testimonial'
import 'aos/dist/aos.css';
import {ContactUs} from './Component/ContactUs/ContactUs'
class App extends React.Component {

  render() {
    return (
      <div className='Container'>
        <Header />
        <Body />
        <About/>
        <Team/>
        <Service/>
        <Testimonial/>
        <ContactUs/>
      </div>
    );
  }
}

export default App;
