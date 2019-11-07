import React from 'react'
import './ServiceCard.scss'
import 'aos/dist/aos.css';
export const ServiceCard = ({icon,title,subtitles}) => (
    <div className='service-card' data-aos='fade-up'>
        <div className='service-card-icon' style={{backgroundImage:`url(${icon})`}}/>
        <h3 className='service-card-title'>{title}</h3>
        <span className='service-card-subtitles'>{subtitles}</span>
        {/* <a href='' className='fa fa-paper-plane service-readme'>Read me</a> */}
    </div>

)