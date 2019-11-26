var {stringCalculator} = require('../src/calculator');

describe("String calculator should", function () {
   let calculator = new stringCalculator();

    it(" equal to zero", function () {
        expect(calculator.add("")).toEqual(0);
    });
 
    it(" equal  to one", function () {
        expect(calculator.add("1")).toEqual(1);
    });

    it(" equal 3", function () {
        expect(calculator.add("1,2")).toEqual(3);
    });

    it(" Numbers can be separated with \\n", function () {
      expect(calculator.add("1\n2\n3")).toEqual(6);
    });

    it("Throw an exception that doesnt allow negative numbers", () => {
      expect(() => {calculator.add("-5,-1")}).toThrowError('Negative not allowed: -5 -1 ');
        });

    it("Ignore numbers greater or equal to 1000", () => {
      expect(calculator.add("1000,1")).toEqual(1);
        });

    it("have multiple delimiter of length > 1", function () {
      expect(calculator.add("//[***]\n1***2***3")).toEqual(6);
    });

    it("More than one separators can be defined", function () {
      expect(calculator.add("//[*][%]\n1*2%3")).toEqual(6);
    });
  });
