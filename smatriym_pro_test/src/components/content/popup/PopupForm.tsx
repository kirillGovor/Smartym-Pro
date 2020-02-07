import React from "react";
import { IUser } from "../../../types/types";


const PopupForm = (props: IUser) => {
  //items
  const [isEditing, setIsEditing] = React.useState<boolean>(false);


  return (
    <>
      <tr
        onClick={() => {
          setIsEditing && setIsEditing(true);
        }}
      >
        <td>{props.name}</td>
        <td>{props.comapny}</td>
        <td>{props.name}</td>
        <td>{props.name}</td>
        <td>{props.name}</td>
      </tr>
      {/* {isEditing? <Popup {...props} /> : null} */}
    </>
  );
};

export default PopupForm;
