import React from "react";
import "./header.css";

const Header = () => {
  return (
    <header>
      <div>
        <p>Users List</p>
        <span>874 users</span>s
      </div>
      <div>
        <input type="text" placeholder="search"></input>
      </div>

      <div>
        <button>TAble FILTER</button>
        <select>
          <option>Электроник</option>
          <option>Сыроежкин</option>
          <option>Чижиков</option>
          <option>Кукушкина</option>
        </select>
      </div>
    </header>
  );
};

export default Header;
