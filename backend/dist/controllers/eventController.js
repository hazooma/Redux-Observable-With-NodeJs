"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createEventForm = exports.getEventForms = void 0;
const eventForm_1 = __importDefault(require("../model/eventForm"));
const getEventForms = (req, res) => {
    eventForm_1.default.find().then((eventApps) => {
        return res.status(200).send(eventApps);
    });
};
exports.getEventForms = getEventForms;
const createEventForm = (req, res) => {
    const eventApplicationBody = req.body;
    eventForm_1.default.create(eventApplicationBody)
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
exports.createEventForm = createEventForm;
//# sourceMappingURL=eventController.js.map