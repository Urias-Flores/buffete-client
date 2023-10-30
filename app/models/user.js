class UserEntity {
  constructor(UserID, Name, Email, Phone, Password, Token, State) {
    this.UserID = UserID;
    this.Name = Name;
    this.Email = Email;
    this.Phone = Phone;
    this.Password = Password;
    this.Token = Token;
    this.State = State;
  }

  fromObject( user ){
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
