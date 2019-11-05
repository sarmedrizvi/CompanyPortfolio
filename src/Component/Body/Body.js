import React from 'react'
import { InputButton } from '../Input-Button/Button'
import './Body.scss'

const raiseInvoiceClicked=()=>(
    // your axios call here
    // localStorage.setItem("pageData", "Data Retrieved from axios request")
    // route to new page by changing window.location
    window.open("https://gmail.us3.list-manage.com/subscribe/post?u=c8f045533e38a546bd9b77982&amp;id=41ea4d2249", "_blank") //to open new page
)

export const Body = () => (
    
    <div className='main-body' id='body'>
        <div className='main-item'>
            <h1 className='main-title'>“Any time is a good time to start a company.” -Ron Conway</h1>
            <InputButton OnClick={raiseInvoiceClicked} >Join Us</InputButton>
        </div>
    </div>

)