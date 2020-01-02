import React from 'react'
import './Team.scss'
import { TeamCard } from './Team-component/Team-component'
import { TeamArray } from './TeamArray'

export const Team = () => (

    <div className='team' id='team'>
        <h1 className='team-title'>OUR TEAM</h1>
        <span className='team-quote'>"Talent wins games, but teamwork and intelligence win championships." – Michael Jordan</span>
        <div className='team-profile'>
        {TeamArray.map(user => (
            <TeamCard name={user.name} work={user.work} imgUrl={user.imgUrl} fb={user.fb} insta={user.insta} github={user.github} link={user.link} />
        ))}</div>
    </div>
)