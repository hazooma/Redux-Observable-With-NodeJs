import * as Joi from "joi";
import { Request, Response } from "express";

const EventFormSchema = {
  firstName: Joi.string().alphanum().required(),
  lastName: Joi.string().alphanum().required(),
  email: Joi.string().required().email(),
  eventDate: Joi.date().required(),
};

export const EventFormValidator = (req: Request, res: Response, next: any) => {
  Joi.validate(req.body, EventFormSchema, (err) => {
    if (err) {
      // send a 422 error response if validation fails
      return res.status(422).json({
        status: "error",
        message: "Invalid request data",
        error: err.message,
      });
    }
    return next();
  });
};
