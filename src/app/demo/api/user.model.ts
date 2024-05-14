export interface IUser {
  id?: any;
  username?: string;
  name?: string;
  lastName?: string;
  phone?: string;
  email?: string;
  country?: string;
  langKey?: string;
  admin?: boolean;
  password?: string;
  token?: string;
}

export class User implements IUser {
  constructor(
    public id?: any,
    public username?: string,
    public name?: string,
    public lastName?: string,
    public phone?: string,
    public email?: string,
    public country?: string,
    public langKey?: string,
    public admin?: boolean,
    public password?: string,
    public token?: string
  ) {}
}
