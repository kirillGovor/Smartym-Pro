import React from "react";
import {AppState, IUser} from "../types/types"
import { getAllUsers } from "../services/getAllUsers";


export interface IContextValue {
    state: AppState;
    getUsers():Promise<void>;
    updateUser(user:IUser):void;
  }

export const AppContext  = React.createContext<Partial<IContextValue>>({});

export const AppContextProvider = AppContext.Provider;

class ContextApp extends React.Component <{},AppState> {
    constructor() {
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

  updateUser = (user:IUser) =>{
    this.setState(prev => {
      return {
        users: prev.users.map(e =>
          e.id === user.id ? { ...user } : e
        )
      };
    });
  }

  render() {
    return (
      <AppContextProvider
        value={{
          state: this.state,
          getUsers:this.getUsers,
          updateUser:this.updateUser
        }}
      >
        {this.props.children}
      </AppContextProvider>
    );
  }
}

export default ContextApp;