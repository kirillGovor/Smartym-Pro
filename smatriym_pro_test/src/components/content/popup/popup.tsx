import React from "react";
import * as ReactDOM from "react-dom";
import { IUser } from "../../../types/types";
import "./popup.css";
import close from "./image/exit.png";

const Popup: React.FC<IUser> = ({
  email,
  name,
  type,
  comapny,
  country,
  subscription,
  id
}: IUser) => {
  const [editType, setType] = React.useState<string>(type ? type : "");

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
        background: "rgba(000, 000, 000, 0.3)",
        display: "grid",
        justifyItems: "center",
        alignItems: "center"
      }}
    >
      {/* <UpdateEmployeeForm
            cancelClicked={this.cancelClicked}
            item={this.props.item}
          /> */}
      <div className="popupBlock">
        <div className="header">
          <div>
            {" "}
            <p> EDIT {name}</p>
            <p>Enique ID - {id}</p>
          </div>
          <div>
            <img alt ="" src ={close}></img>
          </div>
        </div>
        <div className="content">
          <div>
            <div>
              <p>E-MAIL</p>
              <input type="text"></input>
            </div>
            <div>
              <p>FIRST NAME</p>
              <input type="text"></input>
            </div>
            <div>
              <p>LAST NAME</p>
              <input type="text"></input>
            </div>
          </div>
          <div>
            <div>
              <p>COUNTRY</p>
              <input type="text"></input>
            </div>
            <div>
              <p>COMAPNY</p>
              <input type="text"></input>
            </div>
          </div>
          <div>
            <div>
              <p>TYPE</p>
              <input type="text"></input>
            </div>{" "}
            //select
            <div>
              <p>LEVEL</p>
              <input type="text"></input>
            </div>{" "}
            //select
            <div>
              <p>VALIDATED</p>
              <input type="text"></input>
            </div>
            <div>
              <p>COINTS</p>
              <input type="text"></input>
            </div>
          </div>
        </div>
        <div>
          <div>
            <p>Subscription type - {type}</p>
            <p>Subscription date - {}</p> //date
          </div>
          <div>
            <button>RESET PASSWORD</button>
            <button>REVOCE ACCESS</button>
            <button>SAVE</button>
          </div>
        </div>
      </div>
    </div>,

    document.body
  );
};

export default Popup;
