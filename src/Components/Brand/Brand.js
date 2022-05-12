import React from 'react';
import { NavLink } from 'react-router-dom';
import './Brand.css';

const Brand = ({image,link}) => {
  return (
    <div className='Brand-Name'>
        <div className='brand'>
          <NavLink to={link}>
             <img src={image} alt="image" />
          </NavLink>
        </div>
    </div>
  )
}

export default Brand;