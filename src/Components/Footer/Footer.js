import React from "react";
import { NavLink } from "react-router-dom";
import "./Footer.css";
const Footer = ({ heading, link1, link2, link3, navlink1, navlink2, navlink3 }) => {
    
  return (
    <div className="Footer">
       <div className="Footer-Container">
        <div className="Footer-Wrapper">
          <div className="Footer-Items">
            <span className="Customer-service">{heading}</span>
            <div className="Footer-link">
              <ul className="Ul-List">
                <li>
                  <NavLink to={navlink1}>{link1}</NavLink>
                </li>
                <li>
                  <NavLink to={navlink2}>{link2}</NavLink>
                </li>
                <li>
                  <NavLink to={navlink3}>{link3}</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
