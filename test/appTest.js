var request = require("supertest");
var app = require("../app");

describe("test for homepage", function () {
  it("TEST : Able to access the home page", function (done) {
    request(app)
      .get("/")
      .expect(200)
      .expect(/Smart Web Chat/, done);
  });
});
