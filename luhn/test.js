
var assert = require("chai").assert;
var isValid = require("./lib/luhn1.js");

describe('Valid number', () => {
  // tests if doubling the odd digits and applying the -9 rule gives the correct sum of digits
  it('should follow the first set of luhn rules', () => {
    assert.equal(isValid.doubler(2205588990), 43);
  });
  // tests if the modulo 10 calc is producing the correct check digit
  it('should find the correct check digit', () => {
    assert.equal(isValid.checkDigit(2205588990), 7);
  });
  // tests if placing the correct check digit to the end of the 9 digit number is happening correctly
  it('should find the correct account number w/ check digit', () => {
    assert.equal(isValid.finalNumber(2205588990), 22055889907);
  });


});
