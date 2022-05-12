import React, { useState } from "react";
import "./DropDownList.css";
import { KeyboardArrowDown } from "@material-ui/icons";
import { NavLink, Route, Routes } from "react-router-dom";
 

const DropDownList = () => {
  const [Isopen, Setisopen] = useState(false)

  const toggleDropdown = () => {
      
  };

  return (
    <div className="Container">
      <div className="Drop-Down">
        <ul className="List">
          <li className="Product">
            <button className="Product-btn" onClick={toggleDropdown}>
              {" "}
              PRODUCTS <KeyboardArrowDown className="rotate" />
            </button>
          </li>
          <li className="Services">
            <button className="Service-btn" onClick={toggleDropdown}>
              {" "}
              SERVICES & SOLUTIONS <KeyboardArrowDown className="rotate" />
            </button>
          </li>
          <li className="Brand">
            <button className="Brand-btn">
              BRANDS <KeyboardArrowDown className="rotate" />
            </button>
          </li>
          <li className="Deal">
            <button className="Deal-btn">
              DEALS <KeyboardArrowDown className="rotate" />
            </button>
          </li>
          <li className="Publications">
            <button className="Pub-btn">
              PUBLICATIONS <KeyboardArrowDown className="rotate" />
            </button>
          </li>
          <li className="User">
            <NavLink to="/become-a-customer">
              <span className="Cus-btn">BECOME A CUSTOMER </span>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DropDownList;
