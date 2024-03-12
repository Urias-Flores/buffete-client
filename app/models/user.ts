class UserEntity {
  UserID: number;
  Name: string;
  Email: string;
  Phone: string;
  Password: string;
  Token: string;
  State: number;

  constructor(
    UserID: number,
    Name: string,
    Email: string,
    Phone: string,
    Password: string,
    Token: string,
    State: number
  ) {
    this.UserID = UserID;
    this.Name = Name;
    this.Email = Email;
    this.Phone = Phone;
    this.Password = Password;
    this.Token = Token;
    this.State = State;
  }

  fromObject(user: any) {
    return new UserEntity(
      user.UserID,
      user.Name,
      user.Email,
      user.Phone,
      user.Password,
      user.Token,
      user.State
    );
  }
}
