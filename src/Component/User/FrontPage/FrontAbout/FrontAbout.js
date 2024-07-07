import React from "react";
import "./FrontAbout.css";
import FrontAboutImg from "./img/aboutFront.jpg";
function FrontAbout() {
  return (
    <div className="frontAboutHead container">
      <div className="left">
        <img src={FrontAboutImg} />
      </div>
      <div className="right">
        <h3 className="aboutTitle">About ExternHub Solutions</h3>
        <div className="aboutLineHead">
          <hr className="aboutLine"></hr>
        </div>
        <p className="aboutContent">
          At ExternHub Solutions, we're driven by a passion for technology and a
          commitment to empowering businesses. Our team of dedicated IT experts
          specializes in providing top-notch web development, mobile app
          development, software solutions, cloud computing, and e-commerce
          development. Utilizing the latest technologies and industry best
          practices, we ensure our clients achieve their digital goals
          efficiently and effectively.
        </p>
      </div>
    </div>
  );
}
export default FrontAbout;
