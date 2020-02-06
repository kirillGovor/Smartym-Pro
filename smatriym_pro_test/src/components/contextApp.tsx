import React from "react";
import {User,AppState} from "../types/types"
import { getAllUsers } from "../services/getAllUsers";


export interface IContextValue {
    state: AppState;
    getUsers():Promise<void>;
  }

export const AppContext  = React.createContext<Partial<IContextValue>>({});

export const AppContextProvider = AppContext.Provider;

class ContextApp extends React.Component <{},AppState> {
    constructor({}) {
        super({});
        this.state = {
        users:[]
        };
      }

  getUsers = async() =>{
    let allUsers = await getAllUsers();
    this.setState ({users:allUsers});
 }


  render() {
    return (
      <AppContextProvider
        value={{
          state: this.state,
          getUsers:this.getUsers
        }}
      >
        {this.props.children}
      </AppContextProvider>
    );
  }
}

export default ContextApp;