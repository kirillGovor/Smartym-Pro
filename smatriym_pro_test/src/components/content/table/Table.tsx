import React, { useEffect, useState } from "react";
import User from "./User";
import { AppContext } from "../../contextApp";
import { IUser } from "../../../types/types";
import "./table.css";
const Table: React.FC = () => {
  const { state, getUsers } = React.useContext(AppContext);
 


  useEffect(() => {
    if (getUsers) getUsers();
  }, []);

  return (
    <div className="tableBlock">
    <table className="userList table tableStriped" cellSpacing={"0"} cellPadding={"0"}>
      <thead>
        <tr>
          <th style ={{minWidth:"264px"}}>E-mail</th>
          <th style ={{minWidth:"274px"}}>Name</th>
          <th style ={{minWidth:"122px"}}>Type</th>
          <th>Company</th>
          <th>Country</th>
          <th>Subscription</th>
        </tr>
      </thead>
      <tbody>
        {state ? state.users.map((d: IUser) => <User {...d} />) : null}
      </tbody>
    </table>
    </div>
  );
};
export default Table;
