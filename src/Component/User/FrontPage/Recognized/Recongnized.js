import React from "react";
import "./Recognized.css";
import Msme from "./img/msme.jpg";
import SkillIndia from "./img/skill-india.png";
import StartUp from "./img/Startup-India.png";

function Recognized() {
  return (
    <div className="container Reco">
      <h1 className="recoHeading">Recognized And Listed </h1>
      <div className="RecoImg">
        <img src={Msme} />
        {/* <img src={SkillIndia} /> */}
        {/* <img src={StartUp} /> */}
      </div>
    </div>
  );
}
export default Recognized;
