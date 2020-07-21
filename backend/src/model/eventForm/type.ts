import { Document } from "mongoose";

export interface IEventFormSchema extends Document {
  firstName: string;
  lastName: string;
  email: string;
  eventDate: Date;
}
