import React from "react";
import * as ReactDOM from "react-dom";
import { IUser } from "../../types/types";

const Popup:React.FC<IUser> = ({
  email,
  name,
  type,
  comapny,
  country,
  subscription,
  id
}: IUser) => {
  //items
  // const { state, setEdding } = React.useContext(AppContext);

  return ReactDOM.createPortal(
    <div
      style={{
        position: "fixed",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        background: "rgba(255,255,255,0.8)",
        display: "grid",
        justifyItems: "center",
        alignItems: "center",
        opacity:"70%"
      }}
    >
      {/* <UpdateEmployeeForm
            cancelClicked={this.cancelClicked}
            item={this.props.item}
          /> */}
      <div>{name}</div>
    </div>,

    document.body
  );
  
};

export default Popup;
