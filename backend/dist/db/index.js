"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mongooseConnect = void 0;
const mongoose_1 = require("mongoose");
const uri = process.env.MONGO_URL || "mongodb://127.0.0.1:27017/local";
const mongooseConnect = mongoose_1.connect(uri, (err) => {
    if (err) {
        // tslint:disable-next-line: no-console
        console.log(err.message);
    }
    else {
        // tslint:disable-next-line: no-console
        console.log("Successfully Connected!");
    }
});
exports.mongooseConnect = mongooseConnect;
//# sourceMappingURL=index.js.map