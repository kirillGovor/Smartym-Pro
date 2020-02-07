import React from "react";
import Table from "./table/Table";

const Content = () => {
  return (
    <header>
      <div className="BlockContent">
        <Table/>
        <button>Show more</button>
      </div>
    </header>
  );
};

export default Content;
