import React from 'react'
import './LowerSection.css'
import img from './Img/Busimg.png'
import { NavLink } from 'react-router-dom'
import { ArrowForwardIos} from '@material-ui/icons'
const LowerSection = () => {
  return (
    <div className='Section'>
        <NavLink to='/update'>
            <img src={img} alt="bs" />
        </NavLink>
        <span className='Update-line'>Staples Professional is here to serve you. Read our latest updates.</span>
        <NavLink to='/updatepage'>
            <button className='Learn-more'>LEARN MORE <ArrowForwardIos style={{fontSize:'small'}} /> </button>
        </NavLink>
    </div>
  )
}

export default LowerSection