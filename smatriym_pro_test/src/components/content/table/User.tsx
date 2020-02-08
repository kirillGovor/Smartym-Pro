import React from "react";
import { IUser } from "../../../types/types";
import { AppContext } from "../../contextApp";
import Popup from "../popup/popup";

const User = (props: IUser) => {
  //items
  const [isEditing, setIsEditing] = React.useState<boolean>(false);

  const setEdding = (value: boolean) => {
    setIsEditing(value);
  };

  return (
    <>
      <tr
        onClick={() => {
          setEdding(true);
        }}
      >
        <td>{props.email}</td>
      <td>{props.firstName} <span>{props.lastName}</span></td>
        <td>{props.type}</td>
        <td><span>{props.comapny}</span></td>
        <td><span>{props.country}</span></td>
        <td>{props.subscriptionDate}</td>
      </tr>
      {isEditing ? (
        <Popup item={props} setEdding={() => setEdding(false)} />
      ) : null}
    </>
  );
};

export default User;
