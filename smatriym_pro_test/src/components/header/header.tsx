import React from "react";
import "./header.css";

const Header = () => {
  return (
    <header>
      <div className="userHeaderList">
        <p>Users List</p>
        <span>874 users</span>s
      </div>
      <div>
        <input className="search" type="text" placeholder="search"></input>
      </div>

      <div>
        <button className="tableFilterButton">TABLE FILTER</button>
        <select className="headerOption">
          <option>Dale McCormick</option>
          <option>filter 2</option>
          <option>filter 3 </option>
          <option>filter 4</option>
        </select>
      </div>
    </header>
  );
};

export default Header;
