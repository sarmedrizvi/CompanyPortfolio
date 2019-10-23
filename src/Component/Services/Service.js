import React from 'react'
import './Service.scss'
import { ServiceArray } from './ServiceArray'
import { ServiceCard } from './Service-card/ServiceCard'
import { setUseProxies } from 'immer'
export const Service = () => (
    <div className='service'>
        <h1 className='service-title'>OUR SERVICES</h1>
        <div className='service-cards'>
        {ServiceArray.map(user => (
            <ServiceCard icon={user.icon} title={user.title} subtitles={user.subtitle} />
        ))}
        </div>
    </div>

)
