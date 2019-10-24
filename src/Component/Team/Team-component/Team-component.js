import React from 'react'
import './Team-component.scss'
import 'aos/dist/aos.css'; // You can also use <link> for styles
// AOS.init();

export const TeamCard = ({ imgUrl, name, work }) => (
    <div className='team-card' data-aos='fade-up'>
        <div style={{backgroundImage:`url(https://robohash.org/${imgUrl}?set=set2&size=180x180)`}}  alt="pro" className='team-card-image'>
            <div className='team-card-image-icons'>
                <span className='icon '></span>
                <span className='icon'></span>
                <span className='icon'></span>
                <span className='icon'></span>
            </div>
        </div>
        <h4 className='team-card-name' >{name}</h4>
        <span className='team-card-work'>{work}</span>
    </div>
)