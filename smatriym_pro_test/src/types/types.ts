export interface IUser {
  email: string;
  firstName :string;
  lastName:string;
  type: Array<string>;
  level:Array<string>;
  validated:string;
  coints:string;
  comapny: string;
  country: string;
  subscriptionType: string;
  subscriptionDate: string;
  id:number;
}
export interface AppState {
    users: IUser[];
    isEdding:boolean;
}

export interface SystemState {
  loggedIn: boolean;
  session: string;
  userName: string;
}
