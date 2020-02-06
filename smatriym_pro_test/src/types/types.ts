export interface User {
  email: string;
  name: string;
  type: string;
  comapny: string;
  country: string;
  subscription: string;
  id:number;
}
export interface AppState {
    users: User[];
}

export interface SystemState {
  loggedIn: boolean;
  session: string;
  userName: string;
}