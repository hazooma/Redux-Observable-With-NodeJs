"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const bluebird_1 = require("bluebird");
const Mongoose = bluebird_1.promisifyAll(mongoose_1.default);
const errMessages = {
    invalidEmail: "The email you entered is invalid",
};
const EventFormSchema = new Mongoose.Schema({
    firstName: { type: String, required: true, trim: true },
    lastName: { type: String, required: true, trim: true },
    email: {
        type: String,
        trim: true,
        required: true,
        lowercase: true,
    },
    eventDate: { type: Date, required: true },
}, { toJSON: { virtuals: true } });
EventFormSchema.path("email").validate((value) => {
    return validateEmail(value);
});
function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}
exports.default = Mongoose.model("EventForm", EventFormSchema);
//# sourceMappingURL=index.js.map