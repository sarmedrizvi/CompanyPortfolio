import React from 'react'
import './Team-component.scss'
import 'aos/dist/aos.css'; // You can also use <link> for styles
// AOS.init();
export const TeamCard = ({ imgUrl, name, work }) => (
    <div className='team-card' data-aos='fade-up'>
        <img src={`https://robohash.org/${imgUrl}?set=set2&size=180x180`}  alt="pro" className='team-card-image'></img>
        <h5 className='team-card-name' >{name}</h5>
        <span className='team-card-work'>{work}</span>
    </div>
)