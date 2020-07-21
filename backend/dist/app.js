"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const body_parser_1 = __importDefault(require("body-parser"));
const http_1 = __importDefault(require("http"));
const cors_1 = __importDefault(require("cors"));
const routes_1 = __importDefault(require("./routes"));
const db_1 = require("./db");
dotenv_1.default.config();
const port = process.env.NODE_ENV === "test" ? 8081 : process.env.PORT || 8080; // default port to listen
// Setup server
const app = express_1.default();
const server = http_1.default.createServer(app);
app.use(cors_1.default());
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.use(body_parser_1.default.json());
app.use(routes_1.default);
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    next();
});
db_1.mongooseConnect.then(() => {
    // start the Express server
    server.listen(port, () => {
        // tslint:disable-next-line: no-console
        console.log(`server started at http://localhost:${port}`);
    });
});
exports.default = app;
//# sourceMappingURL=app.js.map