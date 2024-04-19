import ClientEntity from "./client";
import SubjectEntity from "./subject";
import InternalDocumentEntity from "./internaldocument";
import DocumentEntity from "./document";
import DateEntity from "./date";

export default class UserEntity {
  UserID: number;
  Name: string;
  Email: string;
  Phone: string;
  Password: string;
  Token: string;
  State: number;
  AccessLevel: string;
  URL: string;
  Clients: ClientEntity[];
  Subjects: SubjectEntity[];
  InternalDocuments: InternalDocumentEntity[];
  Documents: DocumentEntity[];
  Dates: DateEntity[];

  constructor({UserID, Name, Email, Phone, Password, Token, State, AccessLevel, URL, Clients, Subjects, InternalDocuments, Documents, Dates} :
                { UserID: number, Name: string, Email: string, Phone: string, Password: string, Token: string, State: number, AccessLevel: string, URL: string,
                  Clients: ClientEntity[], Subjects: SubjectEntity[], InternalDocuments: InternalDocumentEntity[], Documents: DocumentEntity[], Dates: DateEntity[]}) {
    this.UserID = UserID;
    this.Name = Name;
    this.Email = Email;
    this.Phone = Phone;
    this.Password = Password;
    this.Token = Token;
    this.State = State;
    this.AccessLevel = AccessLevel;
    this.URL = URL;
    this.Clients = Clients;
    this.Subjects = Subjects;
    this.InternalDocuments = InternalDocuments;
    this.Documents = Documents;
    this.Dates = Dates;
  }
}
