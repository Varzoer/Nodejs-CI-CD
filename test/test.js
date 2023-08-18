const chai = require("chai");
const expect = chai.expect;
const request = require("supertest");
const app = require("../index");

describe("GET /", function () {
  it('should return a response for the "/" route', function (done) {
    request(app)
      .get("/")
      .end(function (err, res) {
        expect(res.statusCode).to.not.equal(404);
        done();
      });
  });
});
