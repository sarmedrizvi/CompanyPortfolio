import React from 'react';
import './App.css';
import { Header } from './Component/Header-Component';
import { Body } from './Component/Body/Body'
import { About } from './Component/About/About'
import { Team } from './Component/Team/Team'
import { Service } from './Component/Services/Service'
import { Testimonial } from './Component/Testimonial/Testimonial'
import 'aos/dist/aos.css';
import { ContactUs } from './Component/ContactUs/ContactUs'
import { Portfolio } from './Component/Portfolio/Portfolio'
import {Footer} from './Component/Footer/Footer'
class App extends React.Component {

  render() {
    return (
      <div className='Container'>
        <Header />
        <Body />
        <About />
        <Team />
        <Service />
        <Testimonial />
        <Portfolio />
        <ContactUs />
        <Footer/>
      </div>
    );
  }
}

export default App;
