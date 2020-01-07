import React from 'react'
import './ContactUs.scss'

import { MessageBox } from '../MessageBox/MessageBox'

const Logo = ({ logoClass, subtitles }) => (
    <div className='logo'>
        <span className={`fa fa-${logoClass} logo1`}></span>
        <p className='logo-subtitle'>{subtitles}</p>
    </div>
)

export class ContactUs extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            waiting:'Please Wait',
            fName: '',
            lName: '',
            email: '',
            subject: '',
            message: '',
        }
    }

    onResponseSubmit = () => {
        this.setState({waiting:'please wait'})
        fetch('https://infinite-fjord-08892.herokuapp.com/email', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                fName: this.state.fName,
                lName: this.state.lName,
                email: this.state.email,
                subject: this.state.subject,
                message: this.state.message,
            })
        }).then(res => res.json()).then(data => {
            console.log(data)
            if (data === "Thank you for response") {
                this.setState({waiting:'Thank you for the response'})
            }
            else {
                this.setState({waiting:'something is wrong'})
            }
        })
    }

    render() {
        return (
            <div className='contactus' id='contactus'>
                <h1 className='contactus-title'>Contact Us</h1>
                <div className='contactus-logos'>
                    <Logo logoClass='map-marker' subtitles='Federal B Area Gulberg Karachi' />
                    <Logo logoClass='phone' subtitles='+923152964742' />
                    <Logo logoClass='envelope' subtitles='softlamp@gmail.com' />
                </div>
                <div className='contactform'>
                    <h2 className='contactform-title'>Contact Form</h2>
                    <div className='contactform-two'>
                        <div className='contactform-two-comp'>
                            <label className='label shrink'>First Name</label>
                            <input onChange={(event) => this.setState({ fName: event.target.value })} type='text' className='textbox shrink' />
                        </div>
                        <div className='contactform-two-comp'>
                            <label className='label shrink'>Last Name</label>
                            <input type='text' className='textbox shrink' onChange={(event) => this.setState({ lName: event.target.value })} />
                        </div>
                    </div>
                    <label className='label'>Email</label>
                    <input type='email' className='textbox' onChange={(event) => this.setState({ email: event.target.value })}></input>
                    <label className='label'>Subject</label>
                    <input type='text' className='textbox' onChange={(event) => this.setState({ subject: event.target.value })}></input>
                    <label className='label'>Message</label>
                    <textarea className='textbox message' placeholder='Write your note or question here' onChange={(event) => this.setState({ message: event.target.value })}></textarea>

                    <MessageBox onContactClick={this.onResponseSubmit} title={'Softlamp'} innerText={this.state.waiting} />
                </div>
            </div>
        )
    }

}