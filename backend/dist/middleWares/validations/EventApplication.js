"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventFormValidator = void 0;
const Joi = __importStar(require("joi"));
const EventFormSchema = {
    firstName: Joi.string().alphanum().required(),
    lastName: Joi.string().alphanum().required(),
    email: Joi.string().required().email(),
    eventDate: Joi.date().required(),
};
exports.EventFormValidator = (req, res, next) => {
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
//# sourceMappingURL=EventApplication.js.map