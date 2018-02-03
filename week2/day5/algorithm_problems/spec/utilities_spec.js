const expect = require("chai").expect;
const utilities = require("../utilities");

//Test Suite
describe("Testing utilities", () => {
    //Test SPEC
    it("should be two numbers together", (done) => {
        //Test Assertion
       expect(utilities.addTwo(2, 3)).to.equal(5);
       done();
    });

    it("should reverse a string"), (done) => {
        expect(utilities.reverseString("test")).to.equal("tset");
        done();
    }
})