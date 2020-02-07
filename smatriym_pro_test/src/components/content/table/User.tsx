import React from "react";
import { IUser } from "../../../types/types";
import { AppContext } from "../../contextApp";
import Popup from "../popup/popup";

const User = (props: IUser) => {
  //items
  const [isEditing, setIsEditing] = React.useState<boolean>(false);
  const { state, setEdding } = React.useContext(AppContext);

  return (
    <>
      <tr
        onClick={() => {
          setIsEditing && setIsEditing(true);
        }}
      >
        <td>{props.email}</td>
        <td>{props.name}</td>
        <td>{props.type}</td>
        <td>{props.comapny}</td>
        <td>{props.country}</td>
        <td>{props.subscription}</td>
      </tr>
      {isEditing? <Popup {...props} /> : null}
    </>
  );
};

export default User;
