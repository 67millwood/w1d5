
var assert = require("chai").assert;
var isValid = require("./lib/luhn1.js");

describe('Valid number', () => {

  it('should follow the first set of luhn rules', () => {
    assert.equal(isValid.doubler(2205588990), 43);
  });
  it('should find the correct check digit', () => {
    assert.equal(isValid.checkDigit(2205588990), 7);
  });
  it('should find the correct account number w/ check digit', () => {
    assert.equal(isValid.finalNumber(2205588990), 22055889907);
  });


});
