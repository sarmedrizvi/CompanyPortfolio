import React from 'react'
import './ContactUs.scss'
import {InputButton} from '../Input-Button/Button'
const Logo=({logoClass,subtitles})=>(
    <div className='logo'>
        <span className={`fa fa-${logoClass} logo1`}></span>
        <span className='logo-subtitle'>{subtitles}</span>
    </div>
)
const ContactForm=()=>(
    <div className='contactform'>
        <h2 className='contactform-title'>Contact Form</h2>
        <label>first Name</label>
        <input type='text'></input>
        <label>Last Name</label>
        <input type='text'></input>
        <label>Email</label>
        <input type='email'></input>
        <label>Subject</label>
        <input type='text'></input>
        <label>Message</label>
        <input type='text'></input>
        <InputButton type='submit'> Send Message</InputButton>
    </div>
)
export const ContactUs =()=>(
    <div className='contactus'>
        <h1 className='contactus-title'>Contact Us</h1>
        <div className='contactus-logos'>
            <Logo logoClass='map-marker' subtitles='Hello'/>
            <Logo logoClass='phone' subtitles='Hello'/>
            <Logo logoClass='envelope' subtitles='Hello'/>
        </div>
        <ContactForm/>
    </div>
)