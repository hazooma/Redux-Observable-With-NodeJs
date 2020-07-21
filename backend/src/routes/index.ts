import { Router } from "express";
import * as eventController from "../controllers/eventController";
import { EventFormValidator } from "../middleWares/validations";

const router = Router();

// To check if the backend is working
router.get("/", (req, res) => {
  res.send("Hello World");
});

router.get("/EventForm", eventController.getEventForms);
router.post("/EventForm", EventFormValidator, eventController.createEventForm);

// routes
export default router;
