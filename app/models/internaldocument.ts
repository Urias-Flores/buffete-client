import UserEntity from "./user";

export default class InternalDocumentEntity {
  InternalDocumentID: number;
  User: number | UserEntity;
  Name: string;
  URL: string;
  CreatedDate: Date;
  UpdatedDate: Date;

  constructor({ InternalDocumentID, User, Name, URL, CreatedDate, UpdatedDate }:
                { InternalDocumentID: number, User: number | UserEntity, Name: string, URL: string, CreatedDate: Date, UpdatedDate: Date }) {
    this. InternalDocumentID = InternalDocumentID;
    this.User =  User;
    this.Name = Name;
    this.URL = URL;
    this.CreatedDate = CreatedDate;
    this.UpdatedDate = UpdatedDate;
  }
}
