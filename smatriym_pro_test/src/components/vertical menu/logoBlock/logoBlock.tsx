import React from 'react';
import './logoBlock.css';
import logo from "../image/full_logo2.jpg"
// import "../../../fonts/montserrat/montserrat.ttf";

const LogoBlock = () => {
  return (
    <div className="LogoBlock">
        <div className="blockImage">
      <img className="logoImage" src={logo} alt=""/>
  
      </div>
    </div>
  );
}

export default LogoBlock;
