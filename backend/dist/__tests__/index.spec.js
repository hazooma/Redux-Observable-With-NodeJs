"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = __importDefault(require("assert"));
const supertest_1 = __importDefault(require("supertest"));
const app_1 = __importDefault(require("../app"));
describe("Event Forms Tests", () => {
    describe("GET /EventForm", () => {
        it("Fetch Forms from the API", () => __awaiter(void 0, void 0, void 0, function* () {
            const res = yield supertest_1.default(app_1.default).get("/EventForm");
            assert_1.default.equal(res.statusCode, 200);
            assert_1.default.notEqual(res.body, null);
        }));
    });
    describe("POST /EventForm", () => {
        it("Empty First Name ", () => __awaiter(void 0, void 0, void 0, function* () {
            const res = yield supertest_1.default(app_1.default).post("/EventForm").send({
                firstName: "",
                lastName: "test",
                email: "hazme@gmail.com",
                eventDate: "1/1/2010",
            });
            assert_1.default.equal(res.statusCode, 422);
            assert_1.default.notEqual(res.error, null);
            assert_1.default.equal(res.body.message, "Invalid request data");
        }));
    });
    describe("POST /EventForm", () => {
        it("Empty Last Name ", () => __awaiter(void 0, void 0, void 0, function* () {
            const res = yield supertest_1.default(app_1.default).post("/EventForm").send({
                firstName: "test",
                lastName: "",
                email: "hazme@gmail.com",
                eventDate: "1/1/2010",
            });
            assert_1.default.equal(res.statusCode, 422);
            assert_1.default.notEqual(res.error, null);
            assert_1.default.equal(res.body.message, "Invalid request data");
        }));
    });
    describe("POST /EventForm", () => {
        it("Empty Email ", () => __awaiter(void 0, void 0, void 0, function* () {
            const res = yield supertest_1.default(app_1.default).post("/EventForm").send({
                firstName: "test",
                lastName: "test",
                email: "",
                eventDate: "1/1/2010",
            });
            assert_1.default.equal(res.statusCode, 422);
            assert_1.default.notEqual(res.error, null);
            assert_1.default.equal(res.body.message, "Invalid request data");
        }));
    });
    describe("POST /EventForm", () => {
        it("Invalid Email", () => __awaiter(void 0, void 0, void 0, function* () {
            const res = yield supertest_1.default(app_1.default).post("/EventForm").send({
                firstName: "hazem",
                lastName: "test",
                email: "hazme",
                eventDate: "1/1/2010",
            });
            assert_1.default.equal(res.statusCode, 422);
            assert_1.default.notEqual(res.error, null);
            assert_1.default.equal(res.body.message, "Invalid request data");
        }));
    });
    describe("POST /EventForm", () => {
        it("Empty Event Date ", () => __awaiter(void 0, void 0, void 0, function* () {
            const res = yield supertest_1.default(app_1.default).post("/EventForm").send({
                firstName: "hazem",
                lastName: "test",
                email: "hazme",
                eventDate: "",
            });
            assert_1.default.equal(res.statusCode, 422);
            assert_1.default.notEqual(res.error, null);
            assert_1.default.equal(res.body.message, "Invalid request data");
        }));
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
//# sourceMappingURL=index.spec.js.map