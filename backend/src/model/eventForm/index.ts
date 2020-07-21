import mongoose from "mongoose";
import { promisifyAll } from "bluebird";
import { IEventFormSchema } from "./type";

const Mongoose = promisifyAll(mongoose);

const errMessages = {
  invalidEmail: "The email you entered is invalid",
};

const EventFormSchema = new Mongoose.Schema(
  {
    firstName: { type: String, required: true, trim: true },
    lastName: { type: String, required: true, trim: true },
    email: {
      type: String,
      trim: true,
      required: true,
      lowercase: true,
    },
    eventDate: { type: Date, required: true },
  },
  { toJSON: { virtuals: true } },
);

EventFormSchema.path("email").validate((value: string) => {
  return validateEmail(value);
});
function validateEmail(email: string) {
  const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

export default Mongoose.model<IEventFormSchema>("EventForm", EventFormSchema);
