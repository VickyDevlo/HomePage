import React from 'react';
import './SocialMedia.css';
import { LinkedIn, Twitter, Facebook, YouTube,Instagram } from '@material-ui/icons';
import { NavLink } from "react-router-dom";
import Logo_1 from "./Img/bullfrogpower.svg";
import Logo_2 from "./Img/accessibility-logo.svg";


const SocialMedia = () => {
  return (
    <div className='Social-media-Wrapper'>
        <div className="Social-media">
            <span className='Joinus'> Join us on</span>
            <div className="Icons">
                <NavLink to='/linkedin'>
                    <span className='Icons'><abbr title="LinkedIn" style={{cursor:'pointer', textDecoration:'none'}}> <LinkedIn/> </abbr></span> 
                </NavLink>
                <NavLink to='/twitter'>
                    <span className='Icons'><abbr title="Twitter" style={{cursor:'pointer', textDecoration:'none'}}> <Twitter/> </abbr></span> 
                </NavLink>
                <NavLink to='/facebook'>
                    <span className='Icons'><abbr title="Facebook" style={{cursor:'pointer', textDecoration:'none'}}> <Facebook/> </abbr></span> 
                </NavLink>
                <NavLink to='/youtube'>
                    <span className='Icons'><abbr title="YouTube" style={{cursor:'pointer', textDecoration:'none'}}> <YouTube/> </abbr></span> 
                </NavLink>
                <NavLink to='/instagram'>
                    <span className='Icons'><abbr title="Instagram" style={{cursor:'pointer', textDecoration:'none'}}> <Instagram/> </abbr></span> 
                </NavLink>
                <div className="Logo-icons">
                    <NavLink to='company_logo' className='logo-link-one'>
                        <img src={Logo_1} alt=""/>
                    </NavLink>
                    <NavLink to='company_logo' className='logo-link-two'>
                        <img src={Logo_2} alt=""/>
                    </NavLink>
                </div>
               
            </div>
        </div>
    </div>
  )
}

export default SocialMedia;