import React from "react";
import "./Slider.css";
import { Carousel } from "react-bootstrap";
import Slide_1 from "./Img/Slide_1.png";
import Slide_2 from "./Img/Slide_2.png";
import Slide_3 from "./Img/Slide_3.png";
import Slide_4 from "./Img/Slide_4.png";
import { NavLink } from "react-router-dom";

const Slider = () => {
  return (
    <div className="Slider">
      <Carousel>
        <Carousel.Item interval={1500}>
          <NavLink to="/banner">
            <abbr title="Banner" style={{ cursor: "pointer" }}>
              <img className="d-block w-100" src={Slide_1} alt="Slide-one" />
            </abbr>
          </NavLink>
        </Carousel.Item>
        <Carousel.Item interval={1500}>
          <NavLink to="/banner">
            <abbr title="Banner" style={{ cursor: "pointer" }}>
              <img className="d-block w-100" src={Slide_2} alt="Slide-two" />
            </abbr>
          </NavLink>
        </Carousel.Item>
        <Carousel.Item interval={1500}>
          <NavLink to="/banner">
            <abbr title="Banner" style={{ cursor: "pointer" }}>
              <img className="d-block w-100" src={Slide_3} alt="Slide-three" />
            </abbr>
          </NavLink>
        </Carousel.Item>
        <Carousel.Item interval={1500}>
          <NavLink to="/banner">
            <abbr title="Banner" style={{ cursor: "pointer" }}>
              <img className="d-block w-100" src={Slide_4} alt="Slide-four" />
            </abbr>
          </NavLink>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Slider;
