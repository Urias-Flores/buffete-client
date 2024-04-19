import UserEntity from "./user";
import DocumentEntity from "./document";

export default class SubjectEntity {
  SubjectID: number;
  User: number | UserEntity;
  Name: string;
  CreatedDate: Date;
  UpdatedDate: Date;
  Documents: DocumentEntity[];

  constructor({ SubjectID, User, Name, CreatedDate, UpdatedDate, Documents }:
                {SubjectID: number, User: number | UserEntity, Name: string, CreatedDate: Date, UpdatedDate: Date, Documents: DocumentEntity[]}) {
    this.SubjectID = SubjectID;
    this.User = User;
    this.Name = Name;
    this.CreatedDate = CreatedDate;
    this.UpdatedDate = UpdatedDate;
    this.Documents = Documents;
  }
}
