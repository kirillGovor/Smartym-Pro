import React from "react";
import {AppState} from "../types/types"
import { getAllUsers } from "../services/getAllUsers";


export interface IContextValue {
    state: AppState;
    getUsers():Promise<void>;
    setEdding(value:boolean):void;
  }

export const AppContext  = React.createContext<Partial<IContextValue>>({});

export const AppContextProvider = AppContext.Provider;

class ContextApp extends React.Component <{},AppState> {
    constructor({}) {
        super({});
        this.state = {
        users:[],
        isEdding:false
        };
      }

  getUsers = async() =>{
    let allUsers = await getAllUsers();
    this.setState ({users:allUsers});
 }

  setEdding = (value:boolean) =>{
    this.setState({isEdding:!value})
  }

  render() {
    return (
      <AppContextProvider
        value={{
          state: this.state,
          getUsers:this.getUsers,
          setEdding:this.setEdding
        }}
      >
        {this.props.children}
      </AppContextProvider>
    );
  }
}

export default ContextApp;