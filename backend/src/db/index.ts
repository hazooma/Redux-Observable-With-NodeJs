import { connect } from "mongoose";

const uri: string = process.env.MONGO_URL || "mongodb://127.0.0.1:27017/local";

const mongooseConnect = connect(uri, (err: any) => {
  if (err) {
    // tslint:disable-next-line: no-console
    console.log(err.message);
  } else {
    // tslint:disable-next-line: no-console
    console.log("Successfully Connected!");
  }
});

export { mongooseConnect };
