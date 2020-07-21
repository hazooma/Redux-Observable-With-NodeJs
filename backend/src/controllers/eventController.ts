import { Request, Response } from "express";

import EventForm from "../model/eventForm";

const getEventForms = (req: Request, res: Response) => {
  EventForm.find().then((eventApps) => {
    return res.status(200).send(eventApps);
  });
};

const createEventForm = (req: Request, res: Response) => {
  const eventApplicationBody = req.body;

  EventForm.create(eventApplicationBody)
    .then((created) => {
      return res.status(200).send(created);
    })
    .catch((err) => {
      return res.status(422).json({
        status: "error",
        message: "Invalid request data",
        error: err.message,
      });
    });
};

export { getEventForms, createEventForm };
