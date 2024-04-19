import UserEntity from "./user";
import DocumentEntity from "./document";
import DateEntity from "./date";

export default class ClientEntity {
  ClientID: number;
  User: UserEntity;
  Name: string;
  Identity: string;
  Email: string;
  Phone: string;
  Address: string;
  URL: string;
  Documents: DocumentEntity[];
  Dates:  DateEntity[];

 constructor({ClientID, User, Name, Identity, Email, Phone, Address, URL, Documents, Dates}:
               {ClientID: number, User: UserEntity, Name: string, Identity: string, Email: string, Phone: string, Address: string, URL: string, Documents: [], Dates: []}) {
   this.ClientID = ClientID;
   this.User = User;
   this.Name = Name;
   this.Identity = Identity;
   this.Email = Email;
   this.Phone = Phone;
   this.Address = Address;
   this. URL = URL;
   this.Documents = Documents;
   this.Dates = Dates;
 }
}
