var calculator = require('../src/calculator');

// const verify = new stringCalculator();

describe("String calculator should", function () {
  //  let verify = new stringCalculator;

    it(" equal to zero", function () {
        expect(verify.add("")).toEqual(0);
    });
 
    it(" equal  to one", function () {
        expect(verify.add("1")).toEqual(1);
    });

    it(" equal 3", function () {
        expect(verify.add("1,2")).toEqual(3);
    });

    it(" Numbers can be separated with \\n", function () {
      expect(verify.add("1\n2\n3")).toEqual(6);
    });

    it("Ignore numbers greater or equal to 1000", () => {
      expect(verify.add("1000,1")).toEqual(1);
        });

    it("have multiple delimiter of length > 1", function () {
      expect(verify.add("//[***]\n1***2***3")).toEqual(6);
    });

    it("More than one separators can be defined", function () {
      expect(verify.add("//[*][%]\n1*2%3")).toEqual(6);
    });
  });
