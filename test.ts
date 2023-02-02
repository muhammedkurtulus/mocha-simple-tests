//const assert = require("assert");
import { assert, expect } from "chai";

const foo = "bar";
const beverages = { tea: ["chai", "matcha", "oolong"] };

describe("Mocha Test", function () {
  before(async function () {
    // runs once before the first test in this block

    await setTimeout(() => {
      console.log("before");
    }, 300);
  });

  after("After Description", function () {
    // runs once after the last test in this block
    console.log("after");
  });

  beforeEach(function namedFunc() {
    // runs before each test in this block
    console.log("beforeEach");
  });

  afterEach(function () {
    // runs after each test in this block
    console.log("afterEach");
  });

  describe("#indexOf()", function () {
    it("should return -1 when the value is not present", function () {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
  });

  describe("#length", function () {
    it("should return 3 length", function () {
      assert.equal([1, 2, 3].length, 3);
    });
  });

  describe("#constants", function () {
    it("foo equal to bar, type of string and 3 of length", function () {
      expect(foo).to.be.a("string");
      expect(foo).to.equal("bar");
      expect(foo).to.have.lengthOf(3);
      expect(foo).to.changeTokenBalances
    });
    it("beverages has a tea of property with 3 of length", function () {
      expect(beverages).to.have.property("tea").with.lengthOf(3);
    });
  });

  describe("something slow", function () {
    this.slow(1);

    it("should take long enough for me to go make a sandwich", function () {
      console.log(Math.random);
    });
  });

  describe("a suite of tests", function () {
    this.slow(400);
    this.timeout(500);

    it("should take less than 500ms", function (done) {
      setTimeout(done, 300);
    });

    it("should take less than 500ms as well", function (done) {
      setTimeout(done, 250);
    });
  });
});
