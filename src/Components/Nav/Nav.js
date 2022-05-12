import React, { useState, useRef } from "react";
import { NavLink } from "react-router-dom";
import {
  PersonOutlineOutlined,
  SearchOutlined,
  ChatBubbleOutlineRounded,
  ShoppingCartOutlined,
    
} from "@material-ui/icons";
import Logo from "./img/Logo.png";
import "./Nav.css";

const Nav = () => {
  const dropdownRef = useRef(null);

  const [isActive, setIsActive] = useState(dropdownRef,false);
  const [isOpen, setIsOpen] = useState(dropdownRef,false);

  const onmouseover = () => setIsActive(!isActive);
  const signmouseover = () => setIsOpen(!isOpen);

  const searchHandle = (e) => {
    console.log(e.target.value);
  };

  return (
    <div className="container-fuild">
      <div className="Header-Top">
        <select className="Select_Opt">
          <option value="">EN</option>
          <option value="">FR</option>
        </select>
        <span c>Live Chat</span>
      </div>
      <div className="Middle-Section">
        <div className="Logo-Wrapper">
          <NavLink to="/">
            <img src={Logo} alt="" className="Img" />
          </NavLink>
        </div>
        <input
          type="text"
          placeholder="Search for your all business needs"
          className="Serach-Field"
          onChange={searchHandle}
        />
        <button className="Search-Btn">
          <SearchOutlined style={{ fontSize: "36px" }} />
        </button>
        <NavLink to="/ink tonner">
          <button className="Ink-Toner">Ink & Toner</button>
        </NavLink>
        <ul className="Menu">
          <li>
            <button className="Sign-btn">
              <PersonOutlineOutlined onMouseEnter={ signmouseover }/>
              <span className="Sign-text">Sign in</span>
            </button>
          </li>

          <li>
            <div className="menu-container" >
              <button onMouseEnter={ onmouseover }  className="menu-trigger">
                <ChatBubbleOutlineRounded className="Chat-icon" />
                <span className="Help-text">Help</span>
              </button>
              <nav ref={dropdownRef} className={`menu ${isActive ? "inactive" : "active"}`}>             
               <div className="Link-Btn">
                    <NavLink to="/contactus">Contact Us</NavLink>               
                    <NavLink to="/helpcenter">Help Center</NavLink>             
                    <NavLink to="/recallinformation"> Recall Information </NavLink>
            
                  </div>
              </nav>
            </div>
          </li> 
          
          <li className="Cart">
            <button className="Cart-btn">
              <ShoppingCartOutlined className="Cart-Icon" />
              <span className="Cart-text">Cart</span>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
