var calculator = require('../src/calculator');
beforeEach(function(){
    calculator = new StringCalculator();
});

describe("should return zero when '' is passed", function () {
    it("should equal equal to zero", function () {
        expect(calculator.add("")).toEqual(0);
    });
});

describe("should return the single number that is passed", function () {
    it("should equal equal to one", function () {
        expect(calculator.add("1")).toEqual(1);
    });
});

describe("string calculator to add numbers", function () {
    it("should equal equal to zero", function () {
        expect(alculator.add("1,2")).toEqual(3);
    });
});
