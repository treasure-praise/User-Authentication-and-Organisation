const request = require("supertest");
const app = require("../index");

describe("Organisation Endpoint", () => {
  it("should get all Organisations", async () => {
    const res = await request(app).get("/api/organisation");
    expect(res.statusCode).toEqual(200);
  });

  it("should create a new Organisation", async () => {
    const res = await request(app).post("/api/organisation").send({
      name: "string",
      description: "string",
    });
    expect(res.statusCode).toEqual(201);
  });
});
