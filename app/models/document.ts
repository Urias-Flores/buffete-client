import UserEntity from "./user";
import ClientEntity from "./client";
import SubjectEntity from "./subject";

export default class DocumentEntity {
  DocumentID: number;
  Subject: number | SubjectEntity;
  Client: number | ClientEntity;
  User: number | UserEntity;
  Name: string;
  URL: string;
  CreatedDate: Date;
  UpdatedDate: Date;

  constructor({ DocumentID, Subject, Client, User, Name,URL, CreatedDate, UpdatedDate }
                : { DocumentID: number, Subject: number, Client: number | ClientEntity, User: number | UserEntity, Name: string, URL: string, CreatedDate: Date, UpdatedDate: Date}) {
    this.DocumentID = DocumentID;
    this.Subject = Subject;
    this.Client = Client;
    this.User = User;
    this.Name = Name;
    this.URL = URL;
    this.CreatedDate = CreatedDate;
    this.UpdatedDate = UpdatedDate;
  }
}
