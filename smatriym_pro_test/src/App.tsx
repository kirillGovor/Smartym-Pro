import React from "react";
import "./App.css";
import LogoBlock from "./components/vertical menu/logoBlock/logoBlock";
import MenuElements from "./components/vertical menu/menuElements/MenuElements";
import Header from "./components/header/header";
import Table from "./components/content/table/Table";
import  ContextApp  from "../src/components/contextApp";

const App = () => {
  return (
    <>
      <ContextApp>
        <div
          style={{
            margin: "0",
            width: "240px",
            height: "100vh",
            backgroundColor: "#0086a9",
            float: "left"
          }}
          className="App"
        >
          <LogoBlock />
          <MenuElements />
        </div>
        <Header />

        <Table />
      </ContextApp>
    </>
  );
};

export default App;
