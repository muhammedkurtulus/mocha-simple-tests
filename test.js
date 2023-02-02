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
Object.defineProperty(exports, "__esModule", { value: true });
//const assert = require("assert");
const chai_1 = require("chai");
const foo = "bar";
const beverages = { tea: ["chai", "matcha", "oolong"] };
describe("Mocha Test", function () {
    before(function () {
        return __awaiter(this, void 0, void 0, function* () {
            // runs once before the first test in this block
            yield setTimeout(() => {
                console.log("before");
            }, 300);
        });
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
            chai_1.assert.equal([1, 2, 3].indexOf(4), -1);
        });
    });
    describe("#length", function () {
        it("should return 3 length", function () {
            chai_1.assert.equal([1, 2, 3].length, 3);
        });
    });
    describe("#constants", function () {
        it("foo equal to bar, type of string and 3 of length", function () {
            (0, chai_1.expect)(foo).to.be.a("string");
            (0, chai_1.expect)(foo).to.equal("bar");
            (0, chai_1.expect)(foo).to.have.lengthOf(3);
        });
        it("beverages has a tea of property with 3 of length", function () {
            (0, chai_1.expect)(beverages).to.have.property("tea").with.lengthOf(3);
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
