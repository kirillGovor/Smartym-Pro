import React from "react";
import { User } from "../../types/types";


const Popup = (props:User) => { //items
  return (
  <>
    <tr>
        <td>{props.name}</td>
        <td>{props.comapny}</td>
        <td>{props.name}</td>
        <td>{props.name}</td>
        <td>{props.name}</td>
    </tr>
  </>
  );
};

export default Popup;
