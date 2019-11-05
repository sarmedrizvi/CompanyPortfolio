import React from 'react'
import './Service.scss'
import { ServiceArray } from './ServiceArray'
import { ServiceCard } from './Service-card/ServiceCard'
import 'aos/dist/aos.css';
export const Service = () => (
    <div className='service' data-aos='fade-up' id='services'>
        <h1 className='service-title' data-aos='fade-down'>OUR SERVICES</h1>
        <div className='service-cards'>
        {ServiceArray.map(user => (
            <ServiceCard icon={user.icon} title={user.title} subtitles={user.subtitle} />
        ))}
        </div>
    </div>

)
