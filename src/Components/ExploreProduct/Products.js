import React from 'react'
import './Products.css'
import { NavLink } from 'react-router-dom';
import { ArrowForwardIos} from '@material-ui/icons'
const Products = ({image,name,link}) => {
  return (
    <div className='Wrapper'>
        <div className="Card">
          <div className="Card-img">
            <NavLink to={link} className='Img-Link'>
            <img src={image} alt="" className='Product-img'/>
            <div className="name"> {name}
              <ArrowForwardIos style={{ fontSize:"15px"}}/>
            </div>
            </NavLink>
          </div>
        </div>
    </div>
  )
}

export default Products