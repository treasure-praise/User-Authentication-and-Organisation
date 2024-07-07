const request = require("supertest");
const app = require("../index");
// const { PrismaClient } = require('@prisma/client');
// const prisma = new PrismaClient();
let server;

beforeAll(async () => {
  server = require("../server");
  //   await prisma.user.deleteMany();
});

afterAll(async () => {
  //   await prisma.$disconnect();
  server.close();
});

describe("Authentication", () => {
  it("should register a user", async () => {
    const res = await request(app).post("/api/auth/register").send({
      firstName: "John",
      lastName: "Doe",
      email: "john@example.com",
      password: "password",
      phone: "1234567890",
    });
    expect(res.statusCode).toEqual(201);
  });
});
