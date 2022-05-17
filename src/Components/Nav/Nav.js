import React, { useState, useRef } from "react";
import { NavLink } from "react-router-dom";
import {
  PersonOutlineOutlined,
  SearchOutlined,
  ChatBubbleOutlineRounded,
  ShoppingCartOutlined,
  KeyboardArrowDown
} from "@material-ui/icons";
import Logo from "./img/Logo.png";
import "./Nav.css";

const Nav = () => {
  const dropdownRef = useRef(null);

  const [isActive, setIsActive] = useState(dropdownRef, false);
  const [isOpen, setIsOpen] = useState(dropdownRef, false);
  const [isLoad, setIsLoad] = useState(dropdownRef, false);
  const [LiveChat, setLiveChat] = useState(dropdownRef, false);
  
  const onmouseover = () => setIsActive(!isActive);
  const signmouseover = () => setIsOpen(!isOpen);
  const cartmouseover = () => setIsLoad(!isLoad);
  const ChatHandler = () => setLiveChat(!LiveChat);

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
        <span onClick={ChatHandler}>Live Chat</span>
        <div  ref={dropdownRef} className={`Chat ${LiveChat ? "close" : "open"}`}> 
          <div className="Chat-Ofline">
            <h5>Chat Offline</h5>
            <KeyboardArrowDown onClick={()=>setLiveChat(!LiveChat)} style={{cursor:'pointer'}}/>
          </div>
          <div className="Line-Div-One">
            <span className="line-one">Staples Professional Live Chat</span>
          </div>
          <div className="Line-Div-Two">
            <span className="line-two">Sorry, there are no chat agents currently available. Please visit our Contact Us page for alternate contact options.</span>
          </div>
        </div>
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
          <SearchOutlined style={{  fontSize: "36px" }} />
        </button>
        <NavLink to="/inktonner">
          <button className="Ink-Toner">Ink & Toner</button>
        </NavLink>
        <ul className="Menu">
          <li className="Form">
            <div className="Signup-Container">
              <button onMouseEnter={signmouseover} onMouseLeave={() => setIsOpen(!isOpen)} className="Sign-btn">
                <PersonOutlineOutlined className="Sign" />
                <span className="Sign-text">Sign in</span>
              </button>
              <div
                ref={dropdownRef} 
                className={`form ${isOpen ? "close" : "open"}`}
              
              >
                <div className="Form-Container">
                  <div className="Header">
                    <span className="Signin-span">Sign in</span>
                    <span
                      className="Close-btn-span"
                      onClick={() => setIsOpen(!isOpen)}
                    >
                      Close
                    </span>
                  </div>
                  <div className="Input-Field">
                    <span className="User-Span">User ID</span> <br />
                    <input type="text" className="Pass" /> <br />
                    <span className="Pass-Span">Password</span> <br />
                    <input type="Password" className="Pass" /> <br />
                    <br />
                    <input type="checkbox" className="Check-box" />{" "}
                    <span className="Save-User">Save User ID</span>
                  </div>
                  <button className="Signup-btn">Sign in</button> <br />
                  <div className="Lower-sec">
                    <label className="Forgot">
                      Forget<span className="Forgot-User">User ID</span>
                      <label className="Or">or</label>
                      <span className="Forgot-Password">Password?</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </li>

          <li>
            <div className="menu-container">
              <button onMouseEnter={onmouseover}  onMouseLeave={() => setIsActive(!isActive)}
              className="menu-trigger">
                <ChatBubbleOutlineRounded className="Chat-icon" />
                <span className="Help-text">Help</span>
              </button>
              <nav
                ref={dropdownRef}
                className={`menu ${isActive ? "inactive" : "active"}`}
                
                >
                <div className="Link-Btn" >
                  <NavLink to="/contactus">Contact Us</NavLink>
                  <NavLink to="/helpcenter">Help Center</NavLink>
                  <NavLink to="/recallinformation">Recall Information</NavLink>
                </div>
              </nav>
            </div>
          </li>

          <li className="Cart">
            <button onMouseEnter={ cartmouseover } onMouseLeave={() => setIsLoad(!isLoad)}  className="Cart-btn">
              <ShoppingCartOutlined className="Cart-Icon" />
              <span className="Cart-text">Cart</span>
            </button>
             <div
                ref={dropdownRef}
                className={`cart ${isLoad ? "hide" : "show"}`}
              >
                <div className="Cart-Data">
                <label className="Cart-msg">To use this feature, please sign in or become a customer</label>
                </div>
             </div>

          </li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
