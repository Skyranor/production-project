export interface User {
  id: number;
  userName: string;
}

export interface UserSchema {
  authData?: User;
  _mounted: boolean;
}
