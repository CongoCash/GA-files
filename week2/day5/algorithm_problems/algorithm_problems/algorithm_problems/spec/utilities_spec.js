const expect = require("chai").expect;
const utilities = require("../utilities");

//Test SUITE
describe("Testing Utilities", () => {

    //Test SPEC
    it("Should add two numbers together", (done) => {
        //Test ASSERTION
        expect(utilities.addTwo(2, 3)).to.equal(5);
        expect(utilities.addTwo(10, 15)).to.equal(25);
        done();
    });

    it("Should reverse a string", (done) => {
        expect(utilities.reverseString("hello")).to.equal("olleh");
        done();
    });

    it("Should find the longest word in a string", (done) => {
        expect(utilities.findLongest("Today I ate Japanese food for lunch")).to.equal("Japanese");
        done();
    });

    it("Should return true if word is a palindrome else false", (done) => {
        expect(utilities.isPalindrome("racecar")).to.equal(true);
        expect(utilities.isPalindrome("hello")).to.equal(false);
        done();
    });

    it("Should group an array based on a provided size", (done) => {
        // expect(utilities.groupArray([1, 2, 3, 4], 2)[0][0]).to.equal(1);
        // expect(utilities.groupArray([1, 2, 3, 4], 2)[0][1]).to.equal(2);
        // expect(utilities.groupArray([1, 2, 3, 4], 2)[1][0]).to.equal(3);
        // expect(utilities.groupArray([1, 2, 3, 4], 2)[1][1]).to.equal(4);
        expect(JSON.stringify(utilities.groupArray([1, 2, 3, 4], 2))).to.equal(JSON.stringify([[1, 2], [3, 4]]));
        done();
    });

});
