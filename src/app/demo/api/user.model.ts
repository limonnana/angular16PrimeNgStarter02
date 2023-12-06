export interface IUser {
  id?: any;
  username?: string;
  firstName?: string;
  lastName?: string;
  phone?: string;
  email?: string;
  country?: string;
  langKey?: string;
  roles?: string[];
  password?: string;
}

export class User implements IUser {
  constructor(
    public id?: any,
    public username?: string,
    public firstName?: string,
    public lastName?: string,
    public phone?: string,
    public email?: string,
    public country?: string,
    public langKey?: string,
    public roles?: string[],
    public password?: string
  ) {}
}
