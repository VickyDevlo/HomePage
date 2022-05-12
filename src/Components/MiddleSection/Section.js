import React from 'react';
import './Sections.css';
import { NavLink } from 'react-router-dom';
import { ArrowForwardIos} from '@material-ui/icons';
import Img1 from './Img/Img_1.png'
import Img2 from './Img/Img_2.png';
import Img3 from './Img/Img_3.png';
import Img4 from './Img/Img_4.png';
import Img5 from './Img/Img_5.png';
import Img6 from './Img/Img_6.png';

const Section = () => {
  return (
    <div>
      <div className='Section-one'>
        <NavLink to='/ssp' className='Img-one'>
          <img src={Img1} alt="" />     
        </NavLink>
    
        <NavLink to='/ssp' className='Img-two'>
          <img src={Img2} alt="" />     
        </NavLink>   
        </div>  
        <div className="Section-two">
        <NavLink to='/guide' className='Img-three'>
          <img src={Img3} alt="" />     
        </NavLink>
        <NavLink to='/guide' className='Img-four'>
          <img src={Img4} alt="" />     
        </NavLink>    
      </div>
        <div className="section-three">
      
          <img src={Img5} alt="" />
      
        <div className="Get_Product">
        <p>
        <strong>Flyers</strong>
        </p> 
        <p className='Txt-Line'>Get the latest deals on the products your business needs.</p>
        <NavLink to='/view'>
        <button className='View-btn'>VIEW NOW < ArrowForwardIos style={{fontSize:'15px'}}/></button>
        </NavLink>
        </div>    
        </div>
        <div className="section-four">

          <img src={Img6} alt="" />
      
        <div className="Categaries">
        <p className='Cat'>
        <strong className='Cat-Product'>Catalogues & Product Guides</strong>
        </p> 
        <p className='Product-line'>Browse our wide range of products and solutions for your business.</p>
        <NavLink to='/view'>
        <button className='View-bttn'>VIEW NOW < ArrowForwardIos style={{fontSize:'15px'}}/></button>
        </NavLink>
        </div>    
        </div>
        <h1 className='Product-title'>Explore our Products</h1>
      
    </div>
  )
}

export default Section;