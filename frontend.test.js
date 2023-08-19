const supertest = require("supertest");
const { app, CLIENT_PORT, SERVER_PORT } = require("frontend");
const { request } = require("express");

describe("GET Requests", () => {
  it("should respond with a 200 status code when accessing the root path", async () => {
    const response = await request(app).get("/");
    expect(response.status).toBe(200);
  });
});