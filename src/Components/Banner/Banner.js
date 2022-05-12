import React from 'react';
import './Banner.css';
import { ArrowForwardIos } from '@material-ui/icons'
import { NavLink } from 'react-router-dom';
import Banner1 from './Img/1.png'
import Banner2 from './Img/2.png'
import Banner3 from './Img/3.png'
import Banner4 from './Img/4.png'
import Banner5 from './Img/5.png'
import Banner6 from './Img/6.png'
import Banner7 from './Img/7.png'
import Banner8 from './Img/8.png'
const Banner = () => {
  return (
      <div>
        <div className='Banner'>
            <NavLink to='/computer' className='Links'>
            <img src={Banner1}/>
            <div className="Banner1">
            </div>
            <div className="Banner2">
            <img src={Banner2}/>
            </div>
            </NavLink>  
        
            <NavLink to='/furniture' className='Links'>
            <img src={Banner3}/>
            <div className="Banner1">
            </div>
            <div className="Banner2">
            <img src={Banner4}/>
            </div>
            </NavLink>  
            
            <NavLink to='/pek&ship' className='Links'>
            <img src={Banner5}/>
            <div className="Banner1">
            </div>
            <div className="Banner2">
            <img src={Banner6}/>
            </div>
            </NavLink> 
        </div>
        <div className="Img-Banner">
        <NavLink to='/work-from-anywhere' className='img'>
            <img src={Banner7}/>
         </NavLink> 
        <NavLink to='/clean-an-safe' className='img'>
        <img src={Banner8}/>
         </NavLink> 
        </div> 
        <p className='Tag-line'>The world of work has changed, and we're keeping pace with solutions to keep you productive in every environment.</p>
        <NavLink to='/work-from-anywhere' className='View-Now-btn'> VIEW NOW <ArrowForwardIos style={{fontSize:'small'}}/> </NavLink>
        <p className='Tag-line-two'>Solutions to keep a clean business environment to ensure the safety and wellness of employees and customers.</p>
        <NavLink to='/clean-an-safe' className='View-Now-bttn'> VIEW NOW <ArrowForwardIos style={{fontSize:'small'}}/> </NavLink>        
        <div className="Line">
            <h1 className='h1'>
                <span className='Exl'>Staples Exclusive.</span>
                 Meet the Brands.
            </h1>
        </div>
    </div>
  )
}

export default Banner;