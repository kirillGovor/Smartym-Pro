import React, { useEffect, useState } from "react";
import Popup from "./Popup";
import { AppContext } from "../contextApp";
import { User } from "../../types/types";

const Table: React.FC = () => {
  const { state, getUsers } = React.useContext(AppContext);

  useEffect(() => {
    debugger;
    if (getUsers) getUsers();
  }, []);

  return (
    <table cellSpacing={"0"} cellPadding={"0"}>
      <thead>
        <tr>
          <th>Title</th>
          <th>Border shadow</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {state ? state.users.map((d: User) => <Popup {...d} />) : null}
      </tbody>
    </table>
  );
};
export default Table;
