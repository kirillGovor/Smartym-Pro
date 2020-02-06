import React from "react";
import { IUser } from "../../types/types";
import { AppContext } from "../contextApp";
import Popup from "./popup";

const User = (props: IUser) => {
  //items
  const [isEditing, setIsEditing] = React.useState<boolean>(false);
  const { state, setEdding } = React.useContext(AppContext);

  return (
    <>
      <tr
        onClick={() => {
          debugger;
          setEdding && setIsEditing(true);
        }}
      >
        <td>{props.name}</td>
        <td>{props.comapny}</td>
        <td>{props.name}</td>
        <td>{props.name}</td>
        <td>{props.name}</td>
      </tr>
      {isEditing? <Popup {...props} /> : null}
    </>
  );
};

export default User;
