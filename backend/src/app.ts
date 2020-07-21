import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import http from "http";
import cors from "cors";
import routes from "./routes";
import { mongooseConnect } from "./db";

dotenv.config();
const port = process.env.NODE_ENV === "test" ? 8081 : process.env.PORT || 8080; // default port to listen

// Setup server
const app = express();
const server = http.createServer(app);

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(routes);
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

mongooseConnect.then(() => {
  // start the Express server
  server.listen(port, () => {
    // tslint:disable-next-line: no-console
    console.log(`server started at http://localhost:${port}`);
  });
});

export default app;
