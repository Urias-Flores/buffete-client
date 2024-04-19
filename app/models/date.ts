import ClientEntity from "./client";
import UserEntity from "./user";

export default class DateEntity {
  DateID: number;
  Issue: string;
  Client: ClientEntity;
  User: UserEntity;
  DateTime: Date;
  State: string;

  constructor({ DateID, Issue, Client, User, DateTime, State }:
                { DateID: number, Issue: string, Client: ClientEntity, User: UserEntity, DateTime: Date, State: string }) {
    this.DateID = DateID;
    this.Issue = Issue;
    this.Client = Client;
    this.User = User;
    this.DateTime = DateTime;
    this.State = State;
  }
}
