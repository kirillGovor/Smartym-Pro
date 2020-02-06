import React from "react";
import advansed from "./image/advansed.jpg";
import brain from "./image/brain.jpg";
import course from "./image/course.jpg";
import dally from "./image/dally.png";
import levelingSystem from "./image/leveling system.jpg";
import streaming from "./image/live streams.jpg";
import users from "./image/user_lists.png";
import videoAnalitics from "./image/video.jpg";
import "./menuElement.css";
// import "../../../fonts/montserrat/montserrat.ttf";


const MenuElements = () => {
  return (
    <>
      <div className="elementsBlock">
        <div className="positionElementBlock">
          <img className="imageElements" src={users} alt="" />
          <span>USERS LIST</span>
        </div>
      </div>
      <div className="elementsBlock">
        <div className="positionElementBlock">
          <img className="imageElements" src={dally} alt="" />
          <span>DAILY</span>
        </div>
      </div>
      <div className="elementsBlock">
        <div className="positionElementBlock">
          <img className="imageElements" src={brain} alt="" />
          <span>BRAINSTORM</span>
        </div>
      </div>
      <div className="elementsBlock">
        <div className="positionElementBlock">
          <img className="imageElements" src={course} alt="" />
          <span>COURSE</span>
        </div>
      </div>
      <div className="elementsBlock">
        <div  className ="positionElementBlock">
          <img className="imageElements" src={levelingSystem} alt="" />
          <span>LEVELING SYSTEM</span>
        </div>
      </div>
      <div className="elementsBlock">
        <div  className ="positionElementBlock">
          <img className="imageElements" src={streaming} alt="" />
          <span>LIVE STREAMS</span>
        </div>
      </div>
      <div className="elementsBlock">
        <div className="positionElementBlock">
          <img className="imageElements" src={advansed} alt="" />
          <span>ADVANCED</span>
        </div>
      </div>
      <div className="elementsBlock">
        <div className="positionElementBlock">
          <img className="imageElements" src={videoAnalitics} alt="" />
          <span>VIDEO ANALYTICS</span>
        </div>
      </div>
    </>
  );
};

export default MenuElements;
