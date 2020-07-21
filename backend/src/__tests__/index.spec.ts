import assert from "assert";
import request from "supertest";
import app from "../app";

describe("Event Forms Tests", () => {
  describe("GET /EventForm", () => {
    it("Fetch Forms from the API", async () => {
      const res: any = await request(app).get("/EventForm");
      assert.equal(res.statusCode, 200);
      assert.notEqual(res.body, null);
    });
  });

  describe("POST /EventForm", () => {
    it("Empty First Name ", async () => {
      const res: any = await request(app).post("/EventForm").send({
        firstName: "",
        lastName: "test",
        email: "hazme@gmail.com",
        eventDate: "1/1/2010",
      });

      assert.equal(res.statusCode, 422);
      assert.notEqual(res.error, null);
      assert.equal(res.body.message, "Invalid request data");
    });
  });

  describe("POST /EventForm", () => {
    it("Empty Last Name ", async () => {
      const res: any = await request(app).post("/EventForm").send({
        firstName: "test",
        lastName: "",
        email: "hazme@gmail.com",
        eventDate: "1/1/2010",
      });

      assert.equal(res.statusCode, 422);
      assert.notEqual(res.error, null);
      assert.equal(res.body.message, "Invalid request data");
    });
  });

  describe("POST /EventForm", () => {
    it("Empty Email ", async () => {
      const res: any = await request(app).post("/EventForm").send({
        firstName: "test",
        lastName: "test",
        email: "",
        eventDate: "1/1/2010",
      });

      assert.equal(res.statusCode, 422);
      assert.notEqual(res.error, null);
      assert.equal(res.body.message, "Invalid request data");
    });
  });

  describe("POST /EventForm", () => {
    it("Invalid Email", async () => {
      const res: any = await request(app).post("/EventForm").send({
        firstName: "hazem",
        lastName: "test",
        email: "hazme",
        eventDate: "1/1/2010",
      });

      assert.equal(res.statusCode, 422);
      assert.notEqual(res.error, null);
      assert.equal(res.body.message, "Invalid request data");
    });
  });

  describe("POST /EventForm", () => {
    it("Empty Event Date ", async () => {
      const res: any = await request(app).post("/EventForm").send({
        firstName: "hazem",
        lastName: "test",
        email: "hazme",
        eventDate: "",
      });

      assert.equal(res.statusCode, 422);
      assert.notEqual(res.error, null);
      assert.equal(res.body.message, "Invalid request data");
    });
  });

  // // E2E testing should use another testing DB
  // describe("POST /EventForm", () => {
  //   it("Successful Request", async () => {
  //     const body = {
  //       firstName: "Hazem",
  //       lastName: "Abdelalim",
  //       email: "hazme@gmail.com",
  //       eventDate: "2020-12-11T23:00:00.000Z",
  //     };
  //     const res: any = await request(app).post("/EventForm").send(body);

  //     assert.equal(res.statusCode, 200);
  //     assert.equal(res.body.firstName, body.firstName);
  //     assert.equal(res.body.lastName, body.lastName);
  //     assert.equal(res.body.email, body.email);
  //     assert.equal(res.body.eventDate, body.eventDate);
  //   });
  // });
});
