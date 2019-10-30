import React from 'react'
import './ContactUs.scss'
import { InputButton } from '../Input-Button/Button'
const Logo = ({ logoClass, subtitles }) => (
    <div className='logo'>
        <span className={`fa fa-${logoClass} logo1`}></span>
        <span className='logo-subtitle'>{subtitles}</span>
    </div>
)

const ContactForm = () => (
    <div className='contactform'>
        <h2 className='contactform-title'>Contact Form</h2>
        <div className='contactform-two'>
            <div className='contactform-two-comp'>
                <label className='label shrink'>First Name</label>
                <input type='text' className='textbox shrink' ></input>
            </div>
            <div className='contactform-two-comp'>
                <label className='label shrink'>Last Name</label>
                <input type='text' className='textbox shrink'></input>
            </div>
        </div>
        <label className='label'>Email</label>
        <input type='email' className='textbox'></input>
        <label className='label'>Subject</label>
        <input type='text' className='textbox'></input>
        <label className='label'>Message</label>
        <textarea className='textbox message' placeholder='Write your note or question here'></textarea>
        <InputButton type='submit'> Send Message</InputButton>
    </div>
)
export const ContactUs = () => (
    <div className='contactus'>
        <h1 className='contactus-title'>Contact Us</h1>
        <div className='contactus-logos'>
            <Logo logoClass='map-marker' subtitles='Hello' />
            <Logo logoClass='phone' subtitles='Hello' />
            <Logo logoClass='envelope' subtitles='Hello' />
        </div>
        <ContactForm />
    </div>
)