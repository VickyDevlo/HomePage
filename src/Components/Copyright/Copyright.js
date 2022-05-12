import React from 'react'
import './Copyright.css'
import { NavLink } from 'react-router-dom'
const Copyright = () => {
  return (
    <div className='Footer-Copyright'>
        <div className="Copyright-Wrap">
            <div className="Copyright-Line">
                <span className='AllRight'>© Copyright 2022 Staples Professional Inc. All rights reserved.</span>
            </div>
            <div className="TermCondition">
                <NavLink to='term&conditions' className='terms'>
                Terms & Conditions
                </NavLink>
                <NavLink to='privacynotice' className='privacy'>
                Privacy Notice
                </NavLink>
                <NavLink to='staplesprofessionals' className='staplesProf'>
                Staples Professional
                </NavLink>
            </div>
        </div>
    </div>
  )
}

export default Copyright