import React, { useContext } from "react";
import * as ReactDOM from "react-dom";
import { IUser } from "../../../types/types";
import "./popup.css";
import close from "./image/exit.png";
import { AppContext } from "../../contextApp";

interface IPopup {
  item: IUser;
  setEdding(value: boolean): void;
}

const Popup: React.FC<IPopup> = props => {
  const { updateUser } = useContext(AppContext);
  const [editEmail, setEmail] = React.useState<string>(
    props.item.email ? props.item.email : ""
  );
  const [editFirstName, setFirsName] = React.useState<string>(
    props.item.firstName ? props.item.firstName : ""
  );
  const [editLasttName, setLastName] = React.useState<string>(
    props.item.lastName ? props.item.lastName : ""
  );
  const [editType, setType] = React.useState<string[]>(
    props.item.type ? props.item.type : []
  );
  const [editLevel, setLevel] = React.useState<string[]>(
    props.item.level ? props.item.level : []
  );
  const [editCompany, setCompany] = React.useState<string>(
    props.item.comapny ? props.item.comapny : ""
  );
  const [editCountry, setCountry] = React.useState<string>(
    props.item.country ? props.item.country : ""
  );
  const [editValidated, setValidated] = React.useState<string>(
    props.item.validated ? props.item.validated : ""
  );
  const [editCoints, setCoints] = React.useState<string>(
    props.item.validated ? props.item.coints : ""
  );
  const [editsubscriptionType, setsubscriptionType] = React.useState<string>(
    props.item.subscriptionType ? props.item.subscriptionType : ""
  );
  const [editsubscriptionDate, setsubscriptionDate] = React.useState<string>(
    props.item.subscriptionDate ? props.item.subscriptionDate : ""
  );

  const saveUser = () => {
    if (updateUser)
      updateUser({
        email: editEmail,
        firstName: editFirstName,
        lastName: editLasttName,
        type: editType,
        level: editLevel,
        validated: editValidated,
        coints: editCoints,
        comapny: editCompany,
        country: editCountry,
        subscriptionType: props.item.subscriptionType,
        subscriptionDate: props.item.subscriptionDate,
        id: props.item.id
      });
    props.setEdding(false);
  };

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
      <div className="popupBlock">
        <div className="header">
          <div>
            <p className="edit">
              EDIT {props.item.firstName} {props.item.lastName}
            </p>
            <p className="unique">unique ID - {props.item.id}</p>
          </div>
          <div>
            <img
              onClick={() => props.setEdding(false)}
              alt=""
              src={close}
            ></img>
          </div>
        </div>
        <div className="content">
          <div>
            <div>
              <span>
                <p className="label">E-MAIL</p>
                <input
                  className="email"
                  value={editEmail}
                  onChange={newValue => {
                    debugger;
                    setEmail(newValue.target.value);
                  }}
                  type="text"
                ></input>
              </span>
            </div>
            <div>
              <span>
                <p className="label">FIRST NAME</p>
                <input
                  value={editFirstName}
                  onChange={newValue => setFirsName(newValue.target.value)}
                  className="firstname"
                  type="text"
                ></input>
              </span>
            </div>
            <div>
              <span>
                <p className="label">LAST NAME</p>
                <input
                  value={editLasttName}
                  onChange={newValue => setLastName(newValue.target.value)}
                  className="lastname"
                  type="text"
                ></input>
              </span>
            </div>
          </div>
          <div>
            <div>
              <span>
                <p className="label">COUNTRY</p>
                <input
                  value={editCountry}
                  onChange={newValue => setCountry(newValue.target.value)}
                  className="country"
                  type="text"
                ></input>
              </span>
            </div>
            <div>
              <span>
                <p className="label">COMAPNY</p>
                <input
                  value={editCompany}
                  onChange={newValue => setCompany(newValue.target.value)}
                  className="company"
                  type="text"
                ></input>
              </span>
            </div>
          </div>
          <div>
            <div>
              <span>
                <p className="label">TYPE</p>
                <select>
                  {editType.map((item, index) => {
                    return <option key={index}>{item}</option>;
                  })}
                </select>
              </span>
            </div>
            <div>
              <span>
                <p className="label">LEVEL</p>
                <select>
                  {editLevel.map((item, index) => {
                    return <option key={index}>{item}</option>;
                  })}
                </select>
              </span>
            </div>
            <div>
              <span>
                <p className="label">VALIDATED</p>
                <input
                  value={editValidated}
                  onChange={newValue => setValidated(newValue.target.value)}
                  className="validated"
                  type="text"
                ></input>
              </span>
            </div>
            <div>
              <span>
                <p className="label">COINTS</p>
                <input
                  value={editCoints}
                  onChange={newValue => setCoints(newValue.target.value)}
                  className="coints"
                  type="text"
                ></input>
              </span>
            </div>
          </div>
          <div className="buttonsBlock">
            <div className="subscriptionblock">
              <p className="subscriptionText">
                Subscription type - <span>{props.item.subscriptionType}</span>
              </p>
              <p className="subscriptionText">
                Subscription date - <span>{props.item.subscriptionDate}</span>
              </p>
            </div>
            <div>
              <button className="resetPassword">RESET PASSWORD</button>
              <button className="revokeAcces">REVOKE ACCESS</button>
              <button onClick={saveUser} className="save">
                SAVE
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>,

    document.body
  );
};

export default Popup;
