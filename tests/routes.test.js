const request = require("supertest");
const app = require("../app");

const mongoose = require('mongoose');

describe("Post Endpoint => /api/records", () => {
  // afterAll(async () => {
  //   await mongoose.connection.close();
  // });
  it("Succes Scenario - should fetch matching records", async () => {
    const res = await request(app).post("/api/records").send({
      startDate: "2014/10/12",
      endDate: "2021/10/12",
      minCount: 4,
      maxCount: 122,
    });
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty("code", 0);
    expect(res.body).toHaveProperty("msg");
    expect(res.body).toHaveProperty("records");
  });
  it("Failed Scenario - should fetch matching records", async () => {
    const res = await request(app).post("/api/records").send({
      endDate: "2021/10/12",
      minCount: 4,
      maxCount: 122,
    });
    expect(res.statusCode).toEqual(400);
    expect(res.body).toHaveProperty("code", 1);
    expect(res.body).toHaveProperty("msg");
    expect(res.body).not.toHaveProperty("records");
  });

});
